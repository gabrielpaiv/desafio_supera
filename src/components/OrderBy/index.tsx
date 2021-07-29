import React from 'react';

import {
    Text,
    View
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { SortButton } from '../SortButton';

import { styles } from './styles';

type Props = {
    orderSelected: string;
    setOrder: (orderBy: string) => void;
}

export function OrderBy({ orderSelected, setOrder }: Props) {
    var checked = false;
    function sortByName(checked: boolean, title: string) {
    }
    return (
        <View style={styles.container}>
            <SortButton title="Nome" onPress={() => setOrder('name')} checked={orderSelected === 'name'} />
            <SortButton title="Preço" onPress={() => setOrder('price')} checked={orderSelected === 'price'} />
            <SortButton title="Score" onPress={() => setOrder('score')} checked={orderSelected === 'score'} />
        </View>
    );
}

{/* <TouchableOpacity style={styles.button}>
    <Text style={styles.text}>Ordenar Itens</Text>
    <ArrowDownSvg height={20} width={20} />
</TouchableOpacity> */}
// const sorted = games.sort((a,b)=> a.name.localeCompare(b.name));
//     games.sort((a,b)=>{return a.price - b.price})