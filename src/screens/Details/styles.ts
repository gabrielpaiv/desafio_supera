import { StyleSheet } from 'react-native';
import { lessOrEq } from 'react-native-reanimated';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: theme.colors.mat0,
    },
    gameImage: {
        width: 410,
        height: 410,
    },
    gamePrice: {
        color: theme.colors.pricing,
        fontSize: 30
    },
    gameTitle: {
        fontSize: 28,
        paddingTop: 0,
        color: theme.colors.mat90,
        width: 300,
    },
    scoreView: {
        backgroundColor: theme.colors.pricing,
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: theme.colors.heading,
        borderWidth: 2,
        borderRadius: 15,
        margin: 5,
        position: 'absolute',
        left: 300,
        top: 25
    },
    gameScore: {
        color: theme.colors.heading
    },
    descTitle: {
        paddingTop: 20,
        fontSize: 25,
        color: theme.colors.text,
        opacity: 0.5,
    },
    gameDescription: {
        fontSize: 20,
        color: theme.colors.text,
        opacity: 0.7,
    },
    buyButton: {
        margin: 25,
        backgroundColor: theme.colors.pricing,
        width: 350,
        height: 50,
        borderRadius: 20
    },
    buyText: {
        color: theme.colors.text,
        fontSize: 30,
        alignSelf: 'center'
    },
    head: {
        flexDirection: 'row',
        padding: 5,
        maxHeight: 150,
    },
    body: {
        padding: 5,
        maxHeight: 400,
    },
});