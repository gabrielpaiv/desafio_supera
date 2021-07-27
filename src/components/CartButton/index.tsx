import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';
import {
    TouchableOpacity
} from 'react-native';
import { styles } from './styles';

type Props = {
    isAdd?: boolean,
    size?: number,
    color?: string,
}

export function CartButton({ isAdd=false, size, color }: Props) {
    return (
        <TouchableOpacity style={styles.container}>
            {
                isAdd ?
                <MaterialIcons
                    name="add-shopping-cart"
                    size={size}
                    color={color}
                />
                :
                <MaterialIcons
                    name="shopping-cart"
                    size={size}
                    color={color}
                />
            }
        </TouchableOpacity>
    );
}