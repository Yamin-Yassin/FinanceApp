import 'react-native-gesture-handler';

import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {HomePage} from './components/HomePage';
import {DetailsPage} from './components/DetailsPage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginPage} from './components/LoginPage';
import {TransactionPopup} from './components/HomePage/components/TransactionPopup';
import {connect} from 'react-redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, createStore} from 'redux';
import rootSaga from './store/root.sagas';
import {rootReducers} from './store/root.reducer';
// Redux Variables

const mapStatetoProps = (state: any) => {
  console.log('state: ', state);

  return {state.transactions.transactions};
};

// Navigation Variables
const Stack = createStackNavigator();

const App = () => {
  const [SignedIn, setSignedIn] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          {SignedIn ? (
            <>
              <Stack.Screen name="Home" component={HomePage} />
              <Stack.Screen name="Details" component={DetailsPage} />
              <Stack.Screen name="Transaction" component={TransactionPopup} />
            </>
          ) : (
            <Stack.Screen name="Login" component={LoginPage} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
