import { View, Text } from 'react-native';

import styles from './styles';

function Exemplo_1 () {
    return(
        <View style={styles.compact}>
            <Text style={styles.texto}>Minha primeira tela</Text>
            <Text>Minha primeira tela</Text>
        </View>
    );
}

export default Exemplo_1;