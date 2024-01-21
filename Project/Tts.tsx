import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import * as Speech from 'expo-speech';

const Tts = () => {
  const [inputText, setInputText] = useState("");

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
        onChangeText={(text) => setInputText(text)}
        value={inputText}
      />
      <Button title="Press" onPress={speak} />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Tts;