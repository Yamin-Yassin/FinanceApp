import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet, TextInput} from 'react-native';

export const TransactionPopup = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  return (
    <>
      <View style={styles.container}>
        <View style={styles.welcomeName}>
          <Text style={[styles.welcomeText, styles.containerUser]}>
            Add a new transaction
          </Text>
        </View>
        <View style={[styles.transContainer]}>
          <TextInput
            style={[styles.inputContainer, styles.transName]}
            placeholder="Transaction name"
            onChangeText={setName}
            value={name}
          />
          <TextInput
            style={[styles.inputContainer, styles.transDate]}
            placeholder="Transaction date"
            onChangeText={setDate}
            value={date}
          />
        </View>

        <View style={[styles.transContainer]}>
          <TextInput
            style={[styles.inputContainer, styles.transDescr]}
            placeholder="Transaction description"
            multiline={true}
            textAlignVertical="center"
            onChangeText={setDescription}
            value={description}
          />
        </View>

        <View style={[styles.transContainer]}>
          <TextInput
            keyboardType="number-pad"
            style={[styles.inputContainer, styles.transValue]}
            placeholder="€ Value"
            onChangeText={setAmount}
            value={amount}
          />
        </View>
        <Pressable style={styles.button}>
          <Text>Add</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingTop: 5,
    height: '100%',
    marginTop: '50%',
  },

  avatar: {
    width: 60,
    height: 55,
    borderRadius: 40,
  },

  welcomeText: {
    fontSize: 26,
    fontWeight: '200',
  },

  welcomeName: {
    opacity: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerUser: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  balanceContainer: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  transListContainer: {
    height: 250,
  },

  inputContainer: {
    borderWidth: 1,
    borderRadius: 3,
    paddingVertical: 6,
    borderColor: 'grey',
  },

  transContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },

  transName: {
    paddingHorizontal: 30,
  },

  transDate: {
    paddingHorizontal: 15,
  },

  transDescr: {
    paddingHorizontal: 100,
    paddingVertical: 30,
  },

  transValue: {
    paddingHorizontal: 150,
    paddingVertical: 10,
  },

  button: {
    marginVertical: 50,
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: '#E6E6FA',
    borderRadius: 20,
    paddingHorizontal: 60,
  },
});
