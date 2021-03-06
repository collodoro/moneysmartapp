import React from 'react';
import {View, StyleSheet} from 'react-native';
import BalancePanelLabel from './BalacePanelLabel';
import BalancePanelChart from './BalancePanelChart';
const BalancePanel = () => {
  return (
    <View style={styles.container}>
      <BalancePanelLabel />
      <BalancePanelChart />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
export default BalancePanel;
