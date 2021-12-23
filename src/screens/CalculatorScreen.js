import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import CalculatorButton from '../components/CalculatorButton';

const CalculatorScreen = () => {
  // set calculator number
  const [number, setNumber] = useState('0');

  // clear number
  const clear = () => {
    setNumber('0');
  };

  // build principal number
  const buildNumber = param => {
    // not accept double dot
    if (number.includes('.') && param === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      // decimal dot
      if (param === '.') {
        setNumber(number + param);
      } else if (param === '0' && number.includes('.')) {
        setNumber(number + param);
      } else if (param !== '0' && !number.includes('.')) {
        setNumber(param);
      }
    } else {
      setNumber(number + param);
    }
  };

  // build positive or negative number
  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber(number.replace('', '-'));
    }
  };

  // calculator config
  const btnArr = [
    {
      value: 'C',
      valueColor: true,
      valueFunction: clear,
      containerColor: 'grayLight',
      double: false,
    },
    {
      value: '+/-',
      valueColor: true,
      valueFunction: positiveNegative,
      containerColor: 'grayLight',
      double: false,
    },
    {
      value: '%',
      valueColor: true,
      valueFunction: clear,
      containerColor: 'grayLight',
      double: false,
    },
    {
      value: '/',
      valueColor: false,
      valueFunction: clear,
      containerColor: 'orange',
      double: false,
    },
    {
      value: '7',
      valueColor: false,
      valueFunction: buildNumber,
      containerColor: 'gray',
      double: false,
    },
    {
      value: '8',
      valueColor: false,
      valueFunction: buildNumber,
      containerColor: 'gray',
      double: false,
    },
    {
      value: '9',
      valueColor: false,
      valueFunction: buildNumber,
      containerColor: 'gray',
      double: false,
    },
    {
      value: 'X',
      valueColor: false,
      valueFunction: clear,
      containerColor: 'orange',
      double: false,
    },
    {
      value: '4',
      valueColor: false,
      valueFunction: buildNumber,
      containerColor: 'gray',
      double: false,
    },
    {
      value: '5',
      valueColor: false,
      valueFunction: buildNumber,
      containerColor: 'gray',
      double: false,
    },
    {
      value: '6',
      valueColor: false,
      valueFunction: buildNumber,
      containerColor: 'gray',
      double: false,
    },
    {
      value: '-',
      valueColor: false,
      valueFunction: clear,
      containerColor: 'orange',
      double: false,
    },
    {
      value: '1',
      valueColor: false,
      valueFunction: buildNumber,
      containerColor: 'gray',
      double: false,
    },
    {
      value: '2',
      valueColor: false,
      valueFunction: buildNumber,
      containerColor: 'gray',
      double: false,
    },
    {
      value: '3',
      valueColor: false,
      valueFunction: buildNumber,
      containerColor: 'gray',
      double: false,
    },
    {
      value: '+',
      valueColor: false,
      valueFunction: clear,
      containerColor: 'orange',
      double: false,
    },
    {
      value: '0',
      valueColor: false,
      valueFunction: buildNumber,
      containerColor: 'gray',
      double: true,
    },
    {
      value: ',',
      valueColor: false,
      valueFunction: clear,
      containerColor: 'gray',
      double: false,
    },
    {
      value: '=',
      valueColor: false,
      valueFunction: clear,
      containerColor: 'orange',
      double: false,
    },
  ];

  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.mathResultSmall}>1,500.00</Text>
      <Text style={styles.mathResult} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={styles.buttonsDashboard}>
        {btnArr.map(btn => (
          <CalculatorButton
            btnTxt={btn.value}
            txtBlack={btn.valueColor}
            containerColor={btn.containerColor}
            double={btn.double}
            setFunction={btn.valueFunction}
          />
        ))}
      </View>
    </View>
  );
};

export default CalculatorScreen;
