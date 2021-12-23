import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import CalculatorButton from '../components/CalculatorButton';
import {btnArr} from '../config/ButtonsTypes';

const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.mathResultSmall}>1,500.00</Text>
      <Text style={styles.mathResult}>1,500.00</Text>

      <View style={styles.buttonsDashboard}>
        {btnArr.map(btn => (
          <CalculatorButton
            btnTxt={btn.text}
            txtBlack={btn.textColor}
            containerColor={btn.containerColor}
            double={btn.double}
          />
        ))}
      </View>
    </View>
  );
};

export default CalculatorScreen;
