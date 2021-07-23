import 'react-native-gesture-handler';

import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {HomePage} from './components/HomePage';

const App = () => {
  //const [SignedIn, setSignedIn] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <HomePage />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
