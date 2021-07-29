import React, { ReactNode } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

type Props = {
    title: string;
    action?: ReactNode;
}

export function Header({ title, action }: Props) {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <BorderlessButton onPress={() => navigation.goBack()}>
                <Ionicons
                    name="arrow-back"
                    size={40}
                    color={theme.colors.mat20}
                />
            </BorderlessButton>
            <BorderlessButton onPress={() => navigation.navigate('Home')}>
                <Ionicons
                    name="home"
                    size={40}
                    color={theme.colors.mat20}
                />
            </BorderlessButton>
            <View>
                <Text style={styles.name}>
                    {title}
                </Text>
            </View>
            {
                action ?
                    <View>
                        {action}
                    </View> :
                    <View style={{ width: 40 }} />
            }
        </View>
    );
}