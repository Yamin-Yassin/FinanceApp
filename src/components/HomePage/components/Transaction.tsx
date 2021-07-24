import React from 'react';
import {View, Text, Image, StyleSheet, Pressable, Alert} from 'react-native';

export default function Transaction(props: any) {
  return (
    <Pressable onPress={() => Alert.alert(props.item.value)}>
      <View style={styles.container}>
        <View style={styles.container}>
          <View>
            <Image
              source={require('../../../assets/transLogo.png')}
              style={styles.avatar}
            />
          </View>
          <View style={styles.transName}>
            <Text>{props.item.name}</Text>
            <Text>{props.item.date}</Text>
          </View>
        </View>

        <View>
          <Text>{props.item.value}</Text>
        </View>
      </View>
    </Pressable>
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
