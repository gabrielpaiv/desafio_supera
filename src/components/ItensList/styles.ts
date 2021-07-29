import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    width: '100%',
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
    fontSize: 16,
  }
});