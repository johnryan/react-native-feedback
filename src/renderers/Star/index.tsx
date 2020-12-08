import React from 'react';
import { Image, StyleSheet } from 'react-native';

const selectedImg = require('./star_selected.png');
const unselectedImg = require('./star.png');

export default function (selected: boolean) {
  return (
    <Image
      style={style.numberContainer}
      source={selected ? selectedImg : unselectedImg}
    />
  );
}

const style = StyleSheet.create({
  numberContainer: {
    width: 40,
    height: 40,
    margin: 4,
  },
});
