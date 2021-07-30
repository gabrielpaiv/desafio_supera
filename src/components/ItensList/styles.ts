import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
    height: 100,
  },
  gameImg: {
    width: 100,
    height: 100,
  },
  gameTitle: {
    fontSize: 16,
  },
  gamePrice: {
    position: 'absolute',
    right: 0,
    top: 40,
    fontSize: 16,
  },
  removeButton: {
    width: 40,
    height: 40,
    right: 0,
    top: 0,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },
  remove: {
    backgroundColor: theme.colors.matA70,
    width: 20,
    height: 5,
    borderRadius: 10,
  }
});