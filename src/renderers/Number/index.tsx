import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function (selected: boolean, value: number) {
  return (
    <View style={[style.numberContainer, selected && style.selectedContainer]}>
      <Text style={[style.text, selected && style.selectedText]}>{value}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  numberContainer: {
    borderWidth: 1,
    padding: 10,
    margin: 4,
    backgroundColor: 'white',
  },
  selectedContainer: {
    backgroundColor: 'green',
  },
  text: {
    color: 'black',
  },
  selectedText: {
    color: 'white',
  },
});
