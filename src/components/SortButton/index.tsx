import React from 'react';
import {
    Text
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

type Props = RectButtonProps & {
    title: string;
    checked?: boolean;
}

export function SortButton({ title, checked = false, ...rest }: Props) {
    return (
        <RectButton style={[styles.button, { opacity: checked ? 1 : 0.4 }]} {...rest}>
            <Text style={styles.title}>{title}</Text>
        </RectButton>
    );
}