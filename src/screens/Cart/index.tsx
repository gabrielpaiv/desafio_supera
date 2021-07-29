import React, { useCallback, useState } from 'react';
import {
    View,
    Text,
    FlatList
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Header } from '../../components/Header';

import { CART_ITENS } from '../../configs/database';

import { styles } from './styles';
import { Load } from '../../components/Load';
import { GameProps } from '../../components/Game';
import { ItensList } from '../../components/ItensList';
import { Line } from '../../components/Line';

export function Cart() {
    const [loading, setLoading] = useState(true);
    const [cartItens, setCartItens] = useState<GameProps[]>([]);
    const [shipping, setShipping] = useState(0);
    const [total, setTotal] = useState(0);

    async function loadItens() {
        const response = await AsyncStorage.getItem(CART_ITENS);
        const storage: GameProps[] = response ? JSON.parse(response) : [];
        setCartItens(storage);
        var price = 0;
        storage.map((item)=>{
            price = item.price + price;
        })
        setShipping(price > 250 ? 0 : storage.length * 10);
        setTotal(price+shipping);
        setLoading(false);
    }

    useFocusEffect(useCallback(() => {
        loadItens();
    }, []));

    return (
        <>
            <Header title="Carrinho" />

            <View style={styles.container}>
                {
                    loading ? <Load/> :
                    <FlatList
                        data={cartItens}
                        keyExtractor={item => item.name}
                        renderItem={({ item }) => (
                            <ItensList
                                data={item}
                            />
                        )}
                        ItemSeparatorComponent={() => <Line />}
                        showsVerticalScrollIndicator={false}
                        style={styles.list}
                    />
                }
                <View style={styles.shipping}>
                    <Text style={styles.textShipping}>Frete Estimado: R${shipping}</Text>
                    <Text style={styles.textShipping}>Total: R${total}</Text>
                    {/* Fazer botão Checkout, página de Checkout e opção de remover produtos*/}
                </View>
            </View>
        </>
    );
}