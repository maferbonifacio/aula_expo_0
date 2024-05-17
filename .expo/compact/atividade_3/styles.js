import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b0e8e8',
        borderRadius: 20,
        width: '100%',
        alignItems: 'center',
    },
    titulo: {
        fonytSize: 30,
        fontWeight: 'bold',
        marginVertical: 20,
        color: '#bf86b4',
    },
    botao: {
        borderWidth: 3,
        padding: 10,
        width: '10%',
        borderRadius: 20,
        alignItems: 'center',
        borderColor: '#438f8f',
        marginRight: '5px',
    },
    botao2: {
        borderWidth: 3,
        padding: 10,
        width: '10%',
        borderRadius: 20,
        alignItems: 'center',
        borderColor: 'yellow',
        marginLeft: '400px',
    },
    txtBotao: {
        fontSize: 25,
        color: '#bf86b4',
    },
    botaoPress: {
        backgroundColor: 'white',
    },
    txtNumero: {
        fontSize: 35,
        color: '#bf86b4',
        marginVertical: 10,
    }
});

export default styles;