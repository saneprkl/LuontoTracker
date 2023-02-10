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

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  
  return (
    <SafeAreaView style={styles.body}>
     <View style={styles.header}>Luonto Tracker</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#ffffff",
    //height: "100%",
    //width: "100%",
  }
  header: {
    backgroundColor: "#ffffff"
  }
});

export default App;
