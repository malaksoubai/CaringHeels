import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const Checkbox = ({ label, value, onValueChange }) => {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <Switch
        value={value}
        onValueChange={onValueChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
});

export default Checkbox;
