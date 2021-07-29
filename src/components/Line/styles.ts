import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  line: {
    backgroundColor: theme.colors.text,
    height: 1,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 3,
    marginVertical: 10,
    opacity: 0.3
  }
});