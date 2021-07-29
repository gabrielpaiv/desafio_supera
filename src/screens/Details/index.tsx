import React from 'react';
import { useRoute } from '@react-navigation/native';
import {
    ScrollView,
    Text,
    Image,
    View,
    Alert
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { CartButton } from '../../components/CartButton';
import { Footer } from '../../components/Footer';
import { GameProps } from '../../components/Game';
import { Header } from '../../components/Header';
import { Line } from '../../components/Line';
import { theme } from '../../global/styles/theme';

import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CART_ITENS } from '../../configs/database';

type Params = {
    selectedGame: GameProps;
}

export function Details() {
    const route = useRoute();
    const { selectedGame } = route.params as Params;

    async function addToCart() {
        const storage = await AsyncStorage.getItem(CART_ITENS);
        const itens = storage ? JSON.parse(storage) : [];

        await AsyncStorage.setItem(
            CART_ITENS,
            JSON.stringify([...itens, selectedGame])
        );
        Alert.alert('', `O item ${selectedGame.name} foi adicionado ao carrinho`);
    }

    return (
        <>
            <Header
                title="Detalhes do jogo"
                action={
                    <CartButton
                        isAdd
                        size={40}
                        color={theme.colors.mat0}
                        onPress={addToCart}
                    />
                }
            />
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <Image
                    source={selectedGame.image}
                    style={styles.gameImage}
                    resizeMode="cover"
                />
                <View style={styles.head}>
                    <View>
                        <Text style={styles.gamePrice}>
                            R${selectedGame.price}
                        </Text>
                        <Text style={styles.gameTitle}>
                            {selectedGame.name}
                        </Text>
                    </View>
                    <View style={styles.scoreView}>
                        <Text style={styles.gameScore}>
                            Score: {selectedGame.score}
                        </Text>
                    </View>
                </View>
                <View style={styles.body}>
                    <Text style={styles.descTitle}>
                        Sobre:
                    </Text>
                    <Text style={styles.gameDescription}>
                        {selectedGame.description}
                    </Text>
                    <RectButton
                        style={styles.buyButton}
                    >
                        <Text style={styles.buyText}>Comprar</Text>
                    </RectButton>
                </View>
                <Line />
                <Footer text={"Você pode gostar"} />
            </ScrollView>
        </>
    );
}