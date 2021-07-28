import { NavigationProp, ParamListBase, useRoute } from '@react-navigation/native';
import React from 'react';

import {
    ScrollView,
    Text,
    Image,
    View
} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { CartButton } from '../../components/CartButton';
import { Footer } from '../../components/Footer';
import { GameProps } from '../../components/Game';
import { Header } from '../../components/Header';
import { Line } from '../../components/Line';
import { theme } from '../../global/styles/theme';

import { styles } from './styles';

type Params = {
    selectedGame: GameProps;
}
type Props = {
    navigation: NavigationProp<ParamListBase>;
}

export function Details({ navigation }: Props) {
    const route = useRoute();
    const { selectedGame } = route.params as Params;

    function addToCart() {
        // console.log("O item ", selectedGame.name, " foi adicionado ao carrinho!")
    }

    return (
        <>
            <Header
                title="Detalhes do jogo"
                action={
                    <BorderlessButton onPress={addToCart}>
                        <CartButton
                            isAdd
                            size={40}
                            color={theme.colors.mat0}
                        />
                    </BorderlessButton>
                }
            />
            <ScrollView style={styles.container}>
                <Image
                    source={selectedGame.image}
                    style={styles.gameImage}
                    resizeMode="cover"
                />
                <View style={styles.head}>
                    <Text style={styles.gamePrice}>
                        R${selectedGame.price}
                    </Text>
                    <Text style={styles.gameTitle}>
                        {selectedGame.name}
                    </Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.gameScore}>
                        {selectedGame.score}
                    </Text>
                    <Text style={styles.gameDescription}>
                        {selectedGame.description}
                    </Text>
                </View>
                <Line />
                <Footer text={"Você pode gostar"} />
            </ScrollView>
        </>
    );
}