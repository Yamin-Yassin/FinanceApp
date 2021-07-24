import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import Transaction from './components/Transaction';

const w = Dimensions.get('window').width;

export const HomePage = () => {
  const user = {
    name: 'Yamin Yassin',
    avatar: require('../../assets/avatar.jpeg'),
    balance: '+100.000,00',
  };

  const [transaction, setTransaction] = useState([
    {
      id: 0,
      name: 'yamin',
      date: '10/07/2002',
      value: '+100,00',
      description: 'Transferencia para a minha mamãe Linda',
    },
    {
      id: 1,
      name: 'yamin',
      date: '10/07/2002',
      value: '+100,00',
      description: 'Transferencia para a minha mamãe Linda',
    },
    {
      id: 2,
      name: 'yamin',
      date: '10/07/2002',
      value: '+100,00',
      description: 'Transferencia para a minha mamãe Linda',
    },
    {
      id: 3,
      name: 'yamin',
      date: '10/07/2002',
      value: '+100,00',
      description: 'Transferencia para a minha mamãe Linda',
    },
    {
      id: 4,
      name: 'yamin',
      date: '10/07/2002',
      value: '+100,00',
      description: 'Transferencia para a minha mamãe Linda',
    },
    {
      id: 5,
      name: 'yamin',
      date: '10/07/2002',
      value: '+100,00',
      description: 'Transferencia para a minha mamãe Linda',
    },
    {
      id: 6,
      name: 'yamin',
      date: '10/07/2002',
      value: '+100,00',
      description: 'Transferencia para a minha mamãe Linda',
    },
  ]);

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

      <FlatList
        style={styles.transListContainer}
        data={transaction}
        renderItem={({item}) => <Transaction item={item} />}
      />

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
            multiline={true}
            textAlignVertical="center"
          />
        </View>

        <View style={[styles.transContainer]}>
          <TextInput
            style={[styles.inputContainer, styles.transValue]}
            placeholder="€ Value"
          />
          <Pressable style={styles.button}>
            <Text>Add</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
    paddingTop: 5,
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
