import { View, Text } from 'react-native';

import styles from './styles';

export default function Mensagem({nome}) {
    return (
        <View style={styles.viewmensagem}>
             <Text style={styles.mensagem}>{`Marca: ${nome}`} </Text>
        </View>
    );
}