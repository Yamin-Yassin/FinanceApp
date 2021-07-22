import React from 'react';

import {Image, StyleSheet, Text, View} from 'react-native';

export const LoginPage = () => {
  const user = {
    name: 'Yamin Yassin',
    avatar: require(''),
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View>
          <View>
            <Text> Welcome Back, </Text>
            <Text> {user.name}</Text>
          </View>
        </View>
        <View>
          <Image source={user.avatar} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'coral',
    paddingTop: 0,
  },
});
