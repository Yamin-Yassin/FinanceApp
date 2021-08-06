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
import {Provider, connect} from 'react-redux';

import store from './store/store';
// Redux Variables

// Navigation Variables
const Stack = createStackNavigator();

const App = () => {
  const [SignedIn, setSignedIn] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
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
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
