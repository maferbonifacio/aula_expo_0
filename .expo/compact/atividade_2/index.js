import { View, Text } from 'react-native';

import Mensagem from './mensagem';

import styles from './styles';

function Atividade2 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Marcas de Perfume!</Text>

            <Mensagem nome='Agátta' />
            <Mensagem nome='Eudora' />
            <Mensagem nome='Forever Liss' />
            <Mensagem nome='Givenchy' />
            <Mensagem nome='Intimus' />
            <Mensagem nome='Johnson & Johnson' />


        </View>
    );
}

export default Atividade2;