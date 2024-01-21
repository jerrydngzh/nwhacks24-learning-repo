import React from 'react';
import { useEffect, useState } from 'react';
import { Button, StatusBar, View, Text, StyleSheet} from 'react-native';
import Voice from '@react-native-voice/voice'
import { SafeAreaView } from 'react-native';
import { MiMapView } from '@mappedin/react-native-sdk';
import Tts, { styles } from './Tts'

// See Trial API key Terms and Conditions
// https://developer.mappedin.com/guides/api-keys
const options = {
  clientId: '5eab30aa91b055001a68e996',
  clientSecret: 'RJyRXKcryCMy4erZqqCbuB1NbR66QTGNXVE0x3Pg6oCIlUR1',
  venue: 'mappedin-demo-mall',
  perspective: 'Website',
};

const App = () => {
  let [started, setStarted] = useState(false);
  let [results, setResults] = useState([]);

  useEffect(() => {
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    }
  }, []);

  const startSpeechToText = async () => {
    await Voice.start("en-NZ");
    setStarted(true);
  };

  const stopSpeechToText = async () => {
    await Voice.stop();
    setStarted(false);
  };

  const onSpeechResults = (result) => {
    setResults(result.value);
  };

  const onSpeechError = (error) => {
    console.log(error);
  };

  return (
    <>
     <View style={styles.container}>
      {!started ? <Button title='Start Speech to Text' onPress={startSpeechToText} /> : undefined}
      {started ? <Button title='Stop Speech to Text' onPress={stopSpeechToText} /> : undefined}
      {results.map((result, index) => <Text key={index}>{result}</Text>)}
      <StatusBar />
    </View>
    <SafeAreaView style={{flex: 1}}>
      <MiMapView
        style={{ flex: 1 }}
        key="mappedin"
        options={options}
      />
    </SafeAreaView>
    <Tts></Tts>
    </>
  );
};

export default App;