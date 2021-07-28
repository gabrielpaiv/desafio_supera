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
}

type Props = RectButtonProps & {
    data: GameProps;
}

export function Game({ data, ...rest }: Props) {
    return (
        <RectButton style={styles.container} {...rest}>
            <Image
                source={data.image}

                style={styles.gameImg}
            />
            <Text style={styles.gameTitle}>{data.name.length < 26 ? data.name : `${data.name.substring(0, 23)}...`}</Text>
            <Text style={styles.gamePrice}>{data.price}</Text>

        </RectButton>
    );
}