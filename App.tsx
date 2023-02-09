/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  Header
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  
}

function App(): JSX.Element {
  /*const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };*/

  return (
    <SafeAreaView style={styles.body}>
     <Text>asd</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#ffffff",
    height: "100%",
    width: "100%",
  }
});

export default App;
