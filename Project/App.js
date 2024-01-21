import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import * as Speech from 'expo-speech';
import { useState } from 'react';

export default function App() {
  const [inputText, setInputText] = useState();

  const speak = () => {
    if (inputText.trim() !== '') {
      Speech.speak(inputText);
    } else {
      Speech.speak("Please enter some text to read.");
    }
  };

  return (
    <View style={styles.container}>
      <Text>Enter text:</Text>
        <TextInput 
          placeholder='Type here...' 
          onChangeText={(text)=>setInputText(text)} 
          value={inputText} 
        />
        <Button title="Press" onPress={speak} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
