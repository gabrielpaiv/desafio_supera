import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: theme.colors.mat0,
    },
    gameImage: {
        width: '100%',
        paddingTop: 50
    },
    gamePrice: {
        backgroundColor: '#fff'
    },
    gameTitle: {
        backgroundColor: '#777'
    },
    gameScore: {
        backgroundColor: '#987654'
    },
    gameDescription: {
        backgroundColor: '#555'
    },
    buyButton: {
        backgroundColor: '#999'
    },
    head: {
        padding: 5,
    },
    body: {
        padding: 5,
    },
});