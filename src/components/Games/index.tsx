import React from 'react';

import {
    Image,
    TouchableOpacity,
    Text
} from 'react-native';

import { styles } from './styles';

type Props = {
    title: string,
    image: string,
    price: string
}

export function Games({ title, image, price}: Props) {
    title='Call Of Duty Infinite Warfare'
    

    return (
        <TouchableOpacity style={styles.container}>
            <Image
                source={require('../../assets/call-of-duty-infinite-warfare.png')}
                style={styles.gameImg}
            />
            <Text style={styles.gameTitle}>{title.length < 26 ? title : `${title.substring(0,23)}...`}</Text>
            <Text style={styles.gamePrice}>R$2500</Text>

        </TouchableOpacity>
    );
}