import React from 'react';
import {
  View,
  StatusBar,
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import SignButtonAtoms from '../atoms/sign-button-atoms';
import ThirdpartyButtonAtoms from '../atoms/thirdparty-button-atoms';

export default SignPages = () => {
  return (
    <View style={styles.sign}>
      <StatusBar backgroundColor="rgba(0,0,0,0)" translucent={true} />
      <ImageBackground
        source={require('../../assets/sign-bg.jpeg')}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.header}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.headerText}>Milions of Songs.</Text>
          <Text style={styles.headerText}>Free on Spotify.</Text>
        </View>
        <View style={styles.button}>
          <SignButtonAtoms />
          <ThirdpartyButtonAtoms
            buttonText={'Continue with Google'}
            buttonImage={require('../../assets/google.png')}
          />
          <ThirdpartyButtonAtoms
            buttonText={'Continue with Facebook'}
            buttonImage={require('../../assets/facebook.png')}
          />
          <ThirdpartyButtonAtoms
            buttonText={'Continue with Apple'}
            buttonImage={require('../../assets/apple.png')}
          />
          <TouchableOpacity activeOpacity={0.8} style={styles.buttonLogin}>
            <Text style={styles.textLogin}>Log in</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  sign: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: '13%',
  },
  logo: {
    width: 53,
    height: 53,
    resizeMode: 'stretch',
  },
  headerText: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    top: '-5%',
  },
  buttonLogin: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLogin: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
