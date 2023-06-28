import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
export default signButtonAtoms = ({}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.button}>
      <Text style={styles.text}>Sign up free</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 327,
    height: 49,
    backgroundColor: '#1ED760',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1%',
  },
  text: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
