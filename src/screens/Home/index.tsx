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
import { Game } from '../../components/Game';



export function Home() {
    const navigation = useNavigation();
    function handleGameDetails() {
        navigation.navigate('Details');
    }
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
            <Text style={styles.ordered}>Ordenado por: { }</Text>

            <FlatList
                data={games}
                keyExtractor={item => item.name}
                numColumns={2}
                renderItem={({ item }) => (
                    <Game
                        data={item}
                        onPress={() => handleGameDetails()}
                    />
                )}
                style={styles.products}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}