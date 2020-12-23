import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ month, year }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>
        {month} {year}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'white',
  },
  text: {
    color: 'gray',
    fontSize: 23,
    textAlign: 'center',
    paddingRight: 10,
  },
});

export default Header;
