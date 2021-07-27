import React from 'react';

import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import ArrowDownSvg from '../../assets/arrow-down-icon.svg';
import { styles } from './styles';

import { Line } from '../../components/Line';
import { CartButton } from '../../components/CartButton';
import { theme } from '../../global/styles/theme';
import { Games } from '../../components/Games';



export function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Text style={styles.textLogo}>Super Shop</Text>
            </View>
            <View style={styles.header}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Ordenar Itens</Text>
                    <ArrowDownSvg height={20} width={20} />
                </TouchableOpacity>
                <CartButton
                    size={50}
                    color={theme.colors.text}
                />
            </View>
            <Line />
            <ScrollView>
                <Text style={styles.ordered}>Ordenado por: { }</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Games />
                    <Games />
                </View>
            </ScrollView>
        </View>
    );
}