import React from 'react';
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
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {ReduxStateType} from '../../store/expenses/sagas';
const w = Dimensions.get('window').width;

export const HomePage = () => {
  const user = {
    name: 'Yamin Yassin',
    avatar: require('../../assets/avatar.jpeg'),
    balance: '1000,00',
  };

  const nav = useNavigation();

  const reduxState = useSelector((state: any) => state);
  //const dispatch = useDispatch(function);
  console.log(reduxState);
  // nao consigo remover os erros dentro quando uso o reduxState
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
          <Text style={[styles.welcomeText]}>{user.name}</Text>
        </View>
      </View>

      {/* ------ Transaction List -------*/}
      <View>
        <Text> Filter by: </Text>
      </View>

      <FlatList
        style={styles.transListContainer}
        //data={reduxState.transactions}
        keyExtractor={item => item.value}
        renderItem={({item}) => <Transaction item={item} />}
      />

      {/* ------ Text inputs -------*/}
      <Pressable
        style={[styles.button]}
        onPress={() => nav.navigate('Transaction')}>
        <Text>Ask for Payment</Text>
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
