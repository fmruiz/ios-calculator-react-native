import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  mathResult: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
    paddingRight: 20,
  },
  mathResultSmall: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
    textAlign: 'right',
    paddingRight: 20,
  },
  buttonsDashboard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    marginTop: 15
  },
});
