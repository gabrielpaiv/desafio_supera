import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';

import {
    Image,
    ImageSourcePropType,
    TouchableOpacity,
    Text
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

export type GameProps = {
    id: number;
    name: string;
    price: number;
    score: number;
    image: ImageSourcePropType;
    description: string;
}

type Props = RectButtonProps & {
    data: GameProps;
}

type Params = {
    navigation: StackNavigationProp<ParamListBase>;
}


export function Game({ data, ...rest }: Props) {
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
            <Text style={styles.gameTitle}>{data.name.length < 23 ? data.name : `${data.name.substring(0, 20)}...`}</Text>
            <Text style={styles.gamePrice}>R${data.price}</Text>

        </RectButton>
    );
}