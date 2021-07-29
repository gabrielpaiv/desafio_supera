import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';


export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 104,
        paddingTop: getStatusBarHeight(),
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: theme.colors.mat70
    },
    name: {
        flex: 1,
        textAlign: 'center',
        fontSize: 20,
        color: theme.colors.mat10,
        paddingTop: 25,
        paddingHorizontal: 10,
        width: 210
    }
});