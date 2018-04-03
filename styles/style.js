import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        color: '#FFF',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '700'
    },
    containerLogin: {
        flex: 1,
        backgroundColor: '#3498db'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100
    },
    userInput: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        color: '#FFF',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15
    },
    buttonTextLogin: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '700'
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    headerText: {
        fontSize: 50,
        fontWeight: 'bold',
        padding: 10
    },
    quizContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    options: {
        alignItems: 'center',
        width: 250,
        padding: 10,
        margin: 5,
        backgroundColor: '#2980b9',
        paddingVertical: 15,
        borderRadius:10,
        shadowColor: '#30C1DD',
        shadowRadius: 10,
        shadowOpacity: 0.6,
        elevation: 8,
        shadowOffset: {width: 0,height: 4}
    },
    soruText: {
        fontSize: 20,
        textAlign: 'left'

    },
    soruDesc: {
        fontSize: 60,
    },
    optionText:{
        fontSize: 20,
        color:'white'
    },
    gotoQuestions: {
        alignItems: 'center',
        backgroundColor: '#32CD32',
        width: 250,
        padding: 10,
        margin: 5
    }
});

export default styles;