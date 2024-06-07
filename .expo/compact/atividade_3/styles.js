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
        fonytSize: 50,
        fontWeight: 'bold',
        marginVertical: 20,
        color: '#bf86b4',
    },
    botao: {
        borderWidth: 3,
        padding: 10,
        width: '35%',
        borderRadius: 20,
        alignItems: 'center',
        borderColor: '#438f8f',
        marginHorizontal:20,
    },
    botao2: {
        borderWidth: 3,
        padding: 10,
        width: '35%',
        borderRadius: 20,
        alignItems: 'center',
        borderColor: '#438f8f',
        marginHorizontal:20,
    },
    txtBotao: {
        fontSize: 20,
        color: '#bf86b4',
    },
    botaoPress: {
        backgroundColor: 'white',
    },
    txtNumero: {
        fontSize: 60,
        color: '#bf86b4',
        marginVertical: 10,
    },
    numerocontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;