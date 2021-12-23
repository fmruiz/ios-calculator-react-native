import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const CalculatorButton = ({
  btnTxt,
  txtBlack,
  containerColor,
  double,
  setFunction,
}) => {
  // calculator styles
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
      backgroundColor: '#2d2d2d',
    },
    backgroundOrange: {
      backgroundColor: '#ff9427',
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
    <TouchableOpacity onPress={() => setFunction(btnTxt)}>
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
    </TouchableOpacity>
  );
};

export default CalculatorButton;
