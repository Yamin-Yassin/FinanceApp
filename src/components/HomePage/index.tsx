import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';

import Transaction from './components/Transaction';
import {ReduxStateType} from '../../store/root.reducer';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

import {actionAccountType} from '../../store/expenses/types';

const w = Dimensions.get('window').width;

export const HomePage = () => {
  const account = useSelector((state: ReduxStateType) => state.account);
  const dispatch = useDispatch();

  const getAccount = () => {
    dispatch({
      type: actionAccountType.Request,
      payload: {id: '9f7b5b90-8f9d-4ace-b05e-6022b4b75bd3'},
    });
  };

  useFocusEffect(
    React.useCallback(() => {
      getAccount();
    }, []),
  );

  console.log(account);
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <View style={[styles.containerUser]}>
        <View>
          <Text style={styles.welcomeText}>Welcome Back,</Text>
          <Text style={[styles.welcomeText, styles.welcomeName]}>
            {account.name}
          </Text>
        </View>
        <View>
          <Image
            source={require('../../assets/avatar.jpeg')}
            style={styles.avatar}
          />
        </View>
      </View>

      <View style={[styles.balanceContainer]}>
        <View>
          <Text style={[styles.welcomeText]}>Account Balance:</Text>
        </View>
        <View>
          <Text style={[styles.welcomeText]}>{account.initialValue}</Text>
        </View>
      </View>

      {/* ------ Transaction List -------*/}
      <View>
        <Text>
          {account.loading ? (
            <Text> loading </Text>
          ) : (
            <Text>loading completed </Text>
          )}
        </Text>
      </View>

      <FlatList
        style={styles.transListContainer}
        data={account.transactions}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Transaction item={item} />}
        extraData={account.transactions}
        onRefresh={() => getAccount()}
        refreshing={account.loading}
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
    height: 400,
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
