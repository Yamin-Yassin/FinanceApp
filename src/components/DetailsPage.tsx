import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export const DetailsPage = () => {
  const route = useRoute();

  const item = route.params;

  console.log(item);
  return (
    <View style={styles.container}>
      <View style={[styles.balanceContainer]}>
        {/* IMAGE AND AMOUNT */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/transLogo.png')}
            style={styles.avatar}
          />
          <Text style={[styles.section]}>Amount</Text>

          <View style={styles.amountContainer}>
            <Text style={[styles.amount]}>{item.value}</Text>
            <Text style={[styles.currency]}> EUR</Text>
          </View>
        </View>

        <View>
          <Text style={[styles.textName]}>{item.name}</Text>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <View style={[styles.section]}>
          <Text>Description</Text>
        </View>
        <Text style={[styles.textName]}>{item.description}</Text>

        <View style={[styles.section]}>
          <Text>Transaction Date:</Text>
        </View>
        <Text style={[styles.textName]}>{item.date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    paddingHorizontal: 14,
  },
  balanceContainer: {
    paddingVertical: 10,
    alignItems: 'center',
  },

  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 80,
    height: 90,
    borderRadius: 40,
    marginBottom: 10,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amount: {
    fontWeight: '200',
    fontSize: 30,
  },
  currency: {
    fontSize: 20,
    opacity: 0.8,
  },
  textName: {
    fontSize: 26,
    fontWeight: '200',
    opacity: 0.8,
    marginBottom: 20,
    paddingHorizontal: 8,
  },
  bottomContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    opacity: 0.8,
  },
});
