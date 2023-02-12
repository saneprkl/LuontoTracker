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
  TouchableHighlight,
  TouchableOpacity 
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  
  return (
    <SafeAreaView style={styles.body}>
     <View style={styles.header}><Text style={styles.headerTitle}>Luonto Tracker</Text></View>
     <TouchableOpacity  style={styles.retkiBtn}><Text style={styles.retkiTxt}>Aloita uusi retki</Text></TouchableOpacity>
     <View style={styles.doubleBtns}>
      <TouchableOpacity  style={styles.jokuBtn}><Text>Aiemmat reitit</Text></TouchableOpacity>
      <TouchableOpacity  style={styles.karttaanBtn}><Text>Karttaan</Text></TouchableOpacity>
     </View>
     <TouchableOpacity  style={styles.retkiBtn}><Text>Ansaitut kreditit</Text></TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#ffffff",
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    color:'white'
  },
  header: {
    backgroundColor: "green"
  },
  headerTitle: {
    fontSize: 24
  },
  retkiBtn: {
    backgroundColor: "green",
    marginTop: 150
  },
  retkiTxt: {
    color: 'white'
  },
  doubleBtns: {
    flexDirection: 'row',
    marginTop: 35,
    justifyContent: 'center'
  },
  jokuBtn: {
    height: 50,
    width: 50,
    backgroundColor: 'green'
  },
  karttaanBtn: {
    height: 50,
    width: 50,
    backgroundColor: 'green'
  }
});

export default App;
