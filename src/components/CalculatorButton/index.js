import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CalculatorButton = ({btnTxt, txtBlack, containerColor, double}) => {
  const styles = StyleSheet.create({
    container: {
      borderRadius: 100,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10,
      marginBottom: 10,
    },
    sizeNormal: {
      width: 70,
      height: 70,
    },
    sizeLarge: {
      width: 161,
      height: 70,
    },
    backgroundGrayLight: {
      backgroundColor: '#9b9b9b',
    },
    backgroundGray: {
      backgroundColor: 'gray',
    },
    backgroundOrange: {
      backgroundColor: 'orange',
    },
    text: {
      fontWeight: 'bold',
      fontSize: 20,
    },
    textWhite: {
      color: 'white',
    },
    textBlack: {
      color: 'black',
    },
  });

  return (
    <View
      style={[
        styles.container,
        containerColor === 'grayLight' && styles.backgroundGrayLight,
        containerColor === 'gray' && styles.backgroundGray,
        containerColor === 'orange' && styles.backgroundOrange,
        double ? styles.sizeLarge : styles.sizeNormal,
      ]}>
      <Text
        style={[styles.text, txtBlack ? styles.textBlack : styles.textWhite]}>
        {btnTxt}
      </Text>
    </View>
  );
};

export default CalculatorButton;
