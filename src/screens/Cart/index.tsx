import React, { useCallback, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    Alert
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Header } from '../../components/Header';
import { Load } from '../../components/Load';
import { GameProps } from '../../components/Game';
import { ItensList } from '../../components/ItensList';
import { Line } from '../../components/Line';

import { CART_ITENS } from '../../configs/database';

import { styles } from './styles';
import { RectButton } from 'react-native-gesture-handler';

export function Cart() {
    const navigation = useNavigation()

    const [empty, setEmpty] = useState(false);
    const [loading, setLoading] = useState(true);
    const [cartItens, setCartItens] = useState<GameProps[]>([]);
    const [shipping, setShipping] = useState(0);
    const [subTotal, setSubTotal] = useState(0);

    async function loadItens() {
        const response = await AsyncStorage.getItem(CART_ITENS);
        const storage: GameProps[] = response ? JSON.parse(response) : [];
        setCartItens(storage);
        var price = 0;
        storage.map((item) => {
            price = item.price + price;
        })
        price === 0 ? setEmpty(true) : price;
        setShipping(price > 250 ? 0 : storage.length * 10);
        setSubTotal(price);
        setLoading(false);
    }

    async function handleRemoveItem(selectedItem: GameProps) {
        await AsyncStorage.removeItem(CART_ITENS);
        var temp: GameProps[] = [];
        cartItens.forEach(element => {
            if (element.name !== selectedItem.name) {
                temp.push(element);
            }
        });
        setCartItens(temp);
        if (cartItens.length === 0) {
            await AsyncStorage.setItem(
                CART_ITENS,
                JSON.stringify([cartItens])
            );
        }
    }

    useFocusEffect(useCallback(() => {
        loadItens();
    }, []));

    return (
        <>
            <Header title="Carrinho" />
            {
                empty ? <Text style={styles.empty}>Nenhum item no carrinho</Text> :
                    <View style={styles.container}>
                        {
                            loading ? <Load /> :
                                <FlatList
                                    data={cartItens}
                                    keyExtractor={item => item.name}
                                    renderItem={({ item }) => (
                                        <ItensList
                                            data={item}
                                            onPress={() => handleRemoveItem(item)}
                                        />
                                    )}
                                    ItemSeparatorComponent={() => <Line />}
                                    showsVerticalScrollIndicator={false}
                                    style={styles.list}
                                />
                        }
                        <View style={styles.shipping}>
                            <Text style={styles.textShipping}>Subtotal: R${subTotal}</Text>
                            <Text style={styles.textShipping}>Frete Estimado: R${shipping}</Text>
                            <Text style={styles.textShipping}>Total: R${subTotal + shipping}</Text>
                            <RectButton style={styles.button} onPress={() => { Alert.alert('Olá', `Você chegou até aqui, chegará na sua casa os seguintes itens:${cartItens.map((item) => { return ` ${item.name}` })}.`, [{ onPress: () => { alert("Fim do desafio!, Obrigado pela oportunidade e mande seu feedback ^^") } }]) }}>
                                <Text style={styles.textShipping}>
                                    Finalizar Compra
                                </Text>
                            </RectButton>
                        </View>
                    </View>
            }
        </>
    );
}