import React from 'react';
// eslint-disable-next-line no-unused-vars
import {StyleSheet, Text, View, Button, FlatList} from 'react-native';
import BalancePanel from '../../components/BalancePanel';

const Main = () => {
  return (
    <View style={styles.container}>
      <BalancePanel />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main;
