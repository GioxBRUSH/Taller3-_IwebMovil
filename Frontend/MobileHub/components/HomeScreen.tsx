import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Text } from 'react-native-paper';
import { StyleSheet, Image } from 'react-native';
import {Link} from 'expo-router';

/**
 * Estilos para el componente HomeScreen.
 */
const style =  StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        alignItems:'center',
        gap:20.
    },
    buttonStyle:{
        width:'100%',
    },
    image:{
        width:350,
        height:350,
    },
});

/**
 * Componente HomeScreen.
 * Este componente se utiliza para mostrar la pantalla de inicio.
 */
const HomeScreen = () => {
    return (
        <SafeAreaView style={style.container}>
            <Text variant ="displayMedium">!Bienvenido!</Text>
            <Image source={require('../assets/images/MobileHub.png')} style={style.image}/>
            <Link href="/auth/login" asChild>
                <Button style={style.buttonStyle} mode="contained" onPress={() => console.log('Login')}>
                    Iniciar Sesión
                </Button>
            </Link>
            <Button style={style.buttonStyle} mode="outlined" onPress={() => console.log('Register')}>
                Regístrarse
            </Button>
        </SafeAreaView>
    );
}

export default HomeScreen;