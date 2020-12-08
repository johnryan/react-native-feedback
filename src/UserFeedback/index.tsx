import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import type { FeedbackRenderFunction } from 'src/renderers/renderer';
import Star from '../renderers/Star';

type Props = {
  maxNumber?: number;
  rating?: number;
  onRatingChanged?: (rating: number) => void;
  renderRating?: FeedbackRenderFunction;
  style?: StyleProp<ViewStyle>;
};

export default function UserFeedback(props: Props) {
  const {
    renderRating = Star,
    maxNumber = 5,
    rating = 0,
    onRatingChanged,
  } = props;

  var elements = [];
  for (let index = 1; index <= maxNumber; index++) {
    const rendered = renderRating(index <= rating, index);
    elements.push(
      <TouchableOpacity
        key={index}
        onPress={() => onRatingChanged && onRatingChanged(index)}
      >
        {rendered}
      </TouchableOpacity>
    );
  }

  return <View style={[styles.container, props.style]}>{elements}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
});
