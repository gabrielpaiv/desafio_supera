import React, { ReactNode } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

type Props = {
    title: string;
    action?: ReactNode;
}

export function Header({ title, action }: Props) {

    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <BorderlessButton onPress={handleGoBack}>
                <Feather
                    name="arrow-left"
                    size={24}
                    color={theme.colors.mat20}
                />
            </BorderlessButton>
            <Text style={styles.name}>
                {title}
            </Text>
            {
                action ?
                    <View>
                        {action}
                    </View> :
                    <View style={{ width: 24 }} />
            }
        </View>
    );
}