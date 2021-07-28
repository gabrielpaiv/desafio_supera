import React from 'react';
import {
    FlatList,
    View,
    Text
} from 'react-native';

import { games } from '../../utils/assets';

import { styles } from './styles';

import { Game } from '../Game';

type Props = {
    text: string;
}


export function Footer({ text }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {text}
            </Text>
            <FlatList
                data={games}
                keyExtractor={item => item.name}
                renderItem={({ item }) => (
                    <Game
                        data={item}
                        style={styles.gameContainer}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}