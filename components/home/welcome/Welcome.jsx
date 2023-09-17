import React from 'react';
// import styles from './welcome.style';
import { StyleSheet, Text, View, TouchableOpacity, Dimension, Image } from 'react-native';

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.logoContainer} source={require('../welcome/App_Logo.png')}/>
      <Text style={styles.slogan}>Where Minds Battle Technology</Text>

      <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate('TicTacBasic');
      }}>
        <Text style={styles.buttonText}>TicTacToe</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate('SuperTicTac');
      }}>
        <Text style={styles.buttonText}>Super TicTacToe</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate('Chess');
      }}>
        <Text style={styles.buttonText}>Chess</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#e53935',  // Red color
  },
  slogan: {
    fontSize: 18,
    marginBottom: 40,
    fontStyle: 'italic',
    color: '#1e88e5',  // Blue color
  },
  button: {
    backgroundColor: '#e53935',
    padding: 15,
    width: 250,
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
  logoContainer: {
    width: 300,
    height: 150,
    marginBottom: 40,
  }
});