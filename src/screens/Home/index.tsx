import React from 'react';

import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { games } from '../../utils/assets';

import ArrowDownSvg from '../../assets/arrow-down-icon.svg';
import { styles } from './styles';

import { Line } from '../../components/Line';
import { CartButton } from '../../components/CartButton';
import { theme } from '../../global/styles/theme';
import { Game, GameProps } from '../../components/Game';



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
            <FlatList
                data={games}
                keyExtractor={item => item.name}
                numColumns={2}
                renderItem= {({ item }) => (
                    <Game
                        data={item}
                    />
                )}
                style={styles.products}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}