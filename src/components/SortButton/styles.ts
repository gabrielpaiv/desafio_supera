import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  button: {
    flex: 0.4,
    backgroundColor: theme.colors.mat30,
    margin: 5,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title:{
    color: theme.colors.text,
    fontSize: 18
  }
});