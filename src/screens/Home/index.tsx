import React from 'react';

import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { games } from '../../utils/assets';

import ArrowDownSvg from '../../assets/arrow-down-icon.svg';
import { styles } from './styles';

import { Line } from '../../components/Line';
import { CartButton } from '../../components/CartButton';
import { theme } from '../../global/styles/theme';
import { Game } from '../../components/Game';
import { OrderBy } from '../../components/OrderBy';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';



export function Home() {
    const navigation = useNavigation();

    const [order, setOrder] = useState('');
    const [crescent, setCrescent] = useState(true);
    const [gameOrdered, setGameOrdered] = useState(games);

    function handleOrderSelect(orderName: string) {
        orderName === order ? setCrescent(!crescent) : setOrder(orderName);
        if(orderName === 'name'){
            if(crescent){
                setGameOrdered(games.sort((a,b)=> a.name.localeCompare(b.name)));
            }else{
                setGameOrdered(games.reverse());
                setCrescent(true);
            }
        }else if(orderName === 'price'){
            if(crescent){
                setGameOrdered(games.sort((a,b)=>{return a.price - b.price}));
            }else{
                setGameOrdered(games.reverse());
                setCrescent(true);
            }
        }else if(orderName === 'score'){
            if(crescent){
                setGameOrdered(games.sort((a,b)=>{return a.score - b.score}));
            }else{
                setGameOrdered(games.reverse());
                setCrescent(true);
            }
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Text style={styles.textLogo}>Super Shop</Text>
            </View>
            <View style={styles.header}>
                <OrderBy
                    orderSelected={order}
                    setOrder={handleOrderSelect}
                />
                <CartButton
                    size={50}
                    color={theme.colors.text}
                    onPress={()=>navigation.push('Cart')}
                />
            </View>
            <Line />
            <FlatList
                data={gameOrdered}
                keyExtractor={item => item.name}
                numColumns={2}
                renderItem={({ item }) => (
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