import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    Image,
    Text,
    View
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { GameProps } from '../Game';

import { styles } from './styles';

type Props = RectButtonProps & {
    data: GameProps;
}

export function ItensList({ data, ...rest }: Props) {
    const navigation = useNavigation();
    function handleGameDetails(selectedGame: GameProps) {
        navigation.push('Details', { selectedGame });
    }
    return (
        <RectButton style={styles.container} {...rest} onPress={() => handleGameDetails(data)}>
            <Image
                source={data.image}
                style={styles.gameImg}
            />
            <Text style={styles.gameTitle}>{data.name}</Text>
            <Text style={styles.gamePrice}>R${data.price}</Text>
        </RectButton>
    );
}