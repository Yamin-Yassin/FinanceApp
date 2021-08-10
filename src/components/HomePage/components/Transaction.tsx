import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';

export default function Transaction(props: any) {
  const nav = useNavigation();
  console.log('TRANSACTION ', props);

  return (
    <Pressable onPress={() => nav.navigate('Details', props.item)}>
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
            <Text>{props.item.createdDate}</Text>
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
