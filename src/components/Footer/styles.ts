import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize:24,
    marginVertical: '2%',
    paddingHorizontal: '2%',
  },
  gameContainer:{
    paddingVertical: '6%',
    width: 190,
    alignItems: 'center',
    height: 250,
  }
});