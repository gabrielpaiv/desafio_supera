import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal:10,
    },
    list:{
        maxHeight: 550,
    },
    shipping:{
        height: 150,
        width: 380,
        margin: 20,
        alignItems: 'flex-start',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    textShipping:{
        fontSize:25,
        color: theme.colors.text,
        paddingHorizontal: 20
    }
});