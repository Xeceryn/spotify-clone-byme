import React from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet} from 'react-native';

export default thirdpartyButtonAtoms = ({buttonImage, buttonText}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.button}>
      <View style={styles.item}>
        <Image source={buttonImage} style={styles.image} />
        <Text style={styles.text}>{buttonText}</Text>
        <Text style={styles.text}></Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 327,
    height: 49,
    backgroundColor: '#121212',
    borderRadius: 60,
    justifyContent: 'center',
    borderColor: '#FFF',
    borderWidth: 0.8,
    margin: '1%',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 18,
    height: 18,
    resizeMode: 'stretch',
    left: '100%',
    top: '1%',
  },
  text: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
