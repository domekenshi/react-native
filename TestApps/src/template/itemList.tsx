import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function ItemList(): JSX.Element {
  return (
    <View style={styles.category}>
      <Text style={styles.btnTxt}>button</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
