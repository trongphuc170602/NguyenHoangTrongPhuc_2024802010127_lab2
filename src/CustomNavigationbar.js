import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const CustomNavigationbar = ({ title, leftButtonTitle, onLeftButtonPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onLeftButtonPress} style={styles.leftButton}>
        <Text>{leftButtonTitle}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
export default CustomNavigationbar;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 64,
    paddingHorizontal: 16,
    backgroundColor: 'lightblue',
  },
  leftButton: {
    marginRight: 8,
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
  },
});