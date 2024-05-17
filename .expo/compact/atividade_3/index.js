import { useState } from 'react';
import { View, Text, Pressable, } from 'react-native';

import styles from './styles';

export default function Atividade_3 () {

    const [numero, setNumero] = useState(0);

    function incremento () {
        setNumero(numero + 1);
    }

    function menos () {
        setNumero(numero - 1);
    }

    function zerar () {
        setNumero(numero - numero);
    }


    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 3</Text>

            <text style={styles.txtNumero}>{numero}</text>

            <Pressable
              onPress={() => incremento()}
              style={({ pressed }) => pressed ?
                [styles.botao, styles.botaoPress]
                :
                styles.botao}
            >    
                <Text style={styles.txtBotao}>+1</Text>
            </Pressable>

            <Pressable
              onPress={() => menos()}
              style={({ pressed }) => pressed ?
                [styles.botao2, styles.botaoPress]
                :
                styles.botao2}
            >    
                <Text style={styles.txtBotao}>-1</Text>
            </Pressable>

            <Pressable
              onPress={() => zerar()}
              style={({ pressed }) => pressed ?
                [styles.botao, styles.botaoPress]
                :
                styles.botao}
            >    
                <Text style={styles.txtBotao}>zerar</Text>
            </Pressable>


            
        </View>
    );
};