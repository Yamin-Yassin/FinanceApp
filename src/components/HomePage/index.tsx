import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Transaction from './components/Transaction';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export const HomePage = () => {
  const user = {
    name: 'Yamin Yassin',
    avatar: require('../../assets/avatar.jpeg'),
    balance: '+100.000,00',
  };

  return (
    <View style={styles.container}>
      <View style={[styles.containerUser]}>
        <View>
          <Text style={styles.welcomeText}>Welcome Back,</Text>
          <Text style={[styles.welcomeText, styles.welcomeName]}>
            {user.name}
          </Text>
        </View>
        <View>
          <Image source={user.avatar} style={styles.avatar} />
        </View>
      </View>

      <View style={[styles.balanceContainer]}>
        <View>
          <Text style={[styles.welcomeText]}>Account Balance:</Text>
        </View>
        <View>
          <Text style={[styles.welcomeText]}>{user.balance}</Text>
        </View>
      </View>

      {/* ------ Transaction List -------*/}

      <View>
        <Text> Filter by: </Text>
      </View>

      <ScrollView style={[styles.transListContainer]}>
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
      </ScrollView>

      {/* ------ Text inputs -------*/}

      <View>
        <Text style={[styles.welcomeText, styles.containerUser]}>
          Add a new transaction
        </Text>

        <View style={[styles.transContainer]}>
          <TextInput
            style={[styles.inputContainer, styles.transName]}
            placeholder="Transaction name"
          />
          <TextInput
            style={[styles.inputContainer, styles.transDate]}
            placeholder="Transaction date"
          />
        </View>

        <View style={[styles.transContainer]}>
          <TextInput
            style={[styles.inputContainer, styles.transDescr]}
            placeholder="Transaction description"
          />
        </View>

        <View style={[styles.transContainer]}>
          <TextInput
            style={[styles.inputContainer, styles.transValue]}
            placeholder="€ Value"
          />
          <TouchableOpacity style={styles.button}>
            <Text>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    paddingHorizontal: 14,
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
    paddingStart: 10,
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
    padding: 10,
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
    paddingHorizontal: w - 250,
    paddingVertical: 30,
  },

  transValue: {
    paddingHorizontal: 60,
  },

  button: {
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: '#E6E6FA',
    borderRadius: 20,
    paddingHorizontal: 60,
  },
});
