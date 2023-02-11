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
  Button,
  TouchableHighlight 
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  
  return (
    <SafeAreaView style={styles.body}>
     <View style={styles.header}><Text style={styles.headerTitle}>Luonto Tracker</Text></View>
     <TouchableHighlight style={styles.retkiBtn}> <Button  title="Aloita uusi retki asdada"/></TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#ffffff",
    height: "100%",
    width: "100%",
  },
  header: {
    backgroundColor: "green"
  },
  headerTitle: {
    fontSize: 24
  },
  retkiBtn: {
    backgroundColor: "green"
  }
});

export default App;
