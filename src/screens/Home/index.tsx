import React from 'react';

import {
    View,
    Text,
    ScrollView
} from 'react-native';

import { styles } from './styles';

export function Home() {
    return (
        <View style={styles.container}>
            <Text>Pagina Home</Text>
        </View>
    );
}