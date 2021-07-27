import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: getStatusBarHeight(),
        backgroundColor: theme.colors.mat0,
    },
    logo: {
        backgroundColor: theme.colors.mat80,
        width: '100%',
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textLogo: {
        color: theme.colors.mat10,
        fontSize: 40,
    },
    header: {
        width: '100%',
        height: 90,
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        paddingLeft: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 25,
    },
    text: {
        color: theme.colors.text,
        fontSize: 30,
        padding: 5,
    },
});