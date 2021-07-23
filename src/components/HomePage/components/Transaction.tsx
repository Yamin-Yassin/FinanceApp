import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function Transaction() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View>
          <Image
            source={require('../../../assets/transLogo.png')}
            style={styles.avatar}
          />
        </View>
        <View style={styles.transName}>
          <Text>Trans. Name</Text>
          <Text>- Date</Text>
        </View>
      </View>

      <View>
        <Text> +0.000,00</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transName: {
    paddingHorizontal: 20,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 40,
  },
});
