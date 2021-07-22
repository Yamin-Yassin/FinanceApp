import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text>Hi yall</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
