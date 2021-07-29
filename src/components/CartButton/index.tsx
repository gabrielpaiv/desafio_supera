import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';
import {
    TouchableOpacity
} from 'react-native';
import { styles } from './styles';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

type Props = RectButtonProps & {
    isAdd?: boolean,
    size?: number,
    color?: string,
}

export function CartButton({ isAdd=false, size, color, ...rest}: Props) {
    return (
        <RectButton style={styles.container} {...rest}>
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
        </RectButton>
    );
}