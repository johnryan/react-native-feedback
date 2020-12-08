import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UserFeedback, { Number } from 'react-native-user-feedback';

export default function App() {
  const [rating, setRating] = React.useState(5);

  return (
    <View style={styles.container}>
      <View style={styles.example}>
        <Text style={styles.description}>Number:</Text>
        <UserFeedback
          maxNumber={10}
          rating={rating}
          onRatingChanged={setRating}
          renderRating={Number}
        />
      </View>

      <View style={styles.example}>
        <Text style={styles.description}>Star:</Text>
        <UserFeedback
          maxNumber={5}
          rating={rating}
          onRatingChanged={setRating}
        />
      </View>

      <View style={styles.example}>
        <Text style={styles.description}>Custom:</Text>
        <UserFeedback
          maxNumber={7}
          rating={rating}
          renderRating={(selected) => {
            return (
              <Text style={styles.customText}>{selected ? '👍' : '👎'}</Text>
            );
          }}
          onRatingChanged={setRating}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {},
  example: {
    marginBottom: 20,
    width: '100%',
  },
  customText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
