import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import UserFeedback, { Number } from 'react-native-feedback';

export default function App() {
  const [numberRating, setNumberRating] = React.useState(5);

  const [starRating, setStarRating] = React.useState(1);

  return (
    <View style={styles.container}>
      <UserFeedback
        maxNumber={10}
        rating={numberRating}
        onRatingChanged={setNumberRating}
        renderRating={Number}
      />

      <UserFeedback
        maxNumber={5}
        rating={starRating}
        onRatingChanged={setStarRating}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
