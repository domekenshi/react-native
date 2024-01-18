/**
 * testApps
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StyleSheet} from 'react-native';
import app from './app.json';
import ItemList from './src/template/itemList';
function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.titleBox}>
          <Text style={styles.titleTxt}>{app.name}</Text>
        </View>

        <ItemList />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleBox: {
    marginTop: 20,
    marginBottom: 40,
  },
  titleTxt: {
    fontSize: 50,
  },
  category: {
    backgroundColor: 'aqua',
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  btnTxt: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
});
export default App;
