import { View, Text } from 'react-native';

import Mensagem from './mensagem';

import styles from './styles';

function Exemplo2 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo2</Text>

            <Mensagem nome='Maria' sobrenome='Bonifácio' />
            <Mensagem nome='Fernanda' idade={16} />
            <Mensagem nome='Mafer' />


        </View>
    );
}

export default Exemplo2;