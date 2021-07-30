import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 10,
        backgroundColor: theme.colors.mat0
    },
    list: {
        maxHeight: 550,
    },
    shipping: {
        height: 200,
        width: 380,
        marginHorizontal: 20,
        marginTop: 20,
        alignItems: 'flex-start',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    textShipping: {
        fontSize: 25,
        color: theme.colors.text,
        paddingHorizontal: 20
    },
    empty: {
        width: 400,
        height: 100,
        textAlign: 'center',
        alignSelf: 'center',
        marginVertical: 350,
        fontSize: 30
    },
    button: {
        alignSelf: 'center',
        margin: 5,
        marginBottom: 20,
        backgroundColor: theme.colors.pricing,
        borderRadius: 20,
        padding: 15,
    }
});