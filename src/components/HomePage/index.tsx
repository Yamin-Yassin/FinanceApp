import React, {useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Transaction from './components/Transaction';

const w = Dimensions.get('window').width;

export const HomePage = () => {
  const user = {
    name: 'Yamin Yassin',
    avatar: require('../../assets/avatar.jpeg'),
    balance: '1000,00',
  };

  const [transaction, setTransaction] = useState([
    {
      id: 0,
      name: 'Bolt Payment',
      date: '21/07/2021',
      value: '-2,00',
      description: 'Payment for bolt ride on scooter',
    },
    {
      id: 1,
      name: 'Transf. Condomínio',
      date: '20/07/2021',
      value: '-100,00',
      description: 'Pagamento do condominio',
    },
    {
      id: 2,
      name: 'Ordenado Mensal',
      date: '10/07/2021',
      value: '+1000,00',
      description: 'ESTAS RICOOO FILHOOO',
    },
    {
      id: 3,
      name: 'Trans. MBWay José',
      date: '10/05/2021',
      value: '-5,00',
      description: 'Jantar',
    },
    {
      id: 4,
      name: 'Uber Ride',
      date: '3/01/2021',
      value: '-50,00',
      description: 'Payment for the ride hailing service',
    },
    {
      id: 5,
      name: 'Pagamento ISEL',
      date: '10/07/2002',
      value: '-67.97',
      description: 'Pagamento das propinas',
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
      <Pressable style={[styles.button]}>
        <Text>Show PopUp</Text>
      </Pressable>
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
    marginVertical: 20,
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: '#E6E6FA',
    borderRadius: 20,
    paddingHorizontal: 60,
  },
});
