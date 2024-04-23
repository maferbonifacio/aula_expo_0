import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%',
        width: '100%',
        borderRadius: 20,
        alignItems: 'center',
        padding: 8,
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'newromantics',
        marginVertical: 20,
    },
    mensagem: {
        fontSize: 25,
        margin: 10,
        color: '#59b3b0',
    },
    viewmensagem: {
        borderWidth: 2,
        borderColor: '#59b3b0',
        borderRadius: 20,
        fontWeight: 'bold',
    },
});

export default styles;