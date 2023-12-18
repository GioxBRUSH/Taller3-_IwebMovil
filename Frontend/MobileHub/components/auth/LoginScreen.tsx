import { SafeAreaView } from 'react-native-safe-area-context';
import {Button,Text, TextInput} from 'react-native-paper';
import { StyleSheet } from 'react-native';
import {useState} from 'react';
import { Link } from 'expo-router';

/**
 * Estilos para el componente LoginScreen.
 */
const style =  StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        paddingTop:0,
        alignItems:'center',
        gap:20.
    },
    textInput:{
        width:'100%',
    },
    button:{
        width:'100%',
        marginTop:20,
    },
});

/**
 * Componente LoginScreen.
 * Este componente se utiliza para mostrar la pantalla de inicio de sesión.
 */
const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [hidePwd, setHidePwd] = useState(true);

    /**
     * Maneja el cambio de texto en el campo de correo electrónico.
     * @param {string} text - El texto ingresado en el campo de correo electrónico.
     */
    const handleEmailChange = (text: string) => {
        setEmail(text);
    }

    /**
     * Maneja el cambio de texto en el campo de contraseña.
     * @param {string} text - El texto ingresado en el campo de contraseña.
     */
    const handlePwdChange = (text: string) => {
        setPwd(text);
    }

    /**
     * Maneja el evento de mostrar/ocultar la contraseña.
     */
    const handleShowPassword = () => {
        setHidePwd(!hidePwd);
    }

    return (
        <SafeAreaView style={style.container}>
            <Text variant ="displayMedium">Iniciar Sesión</Text>
            <TextInput 
            style={style.textInput} 
            label={"Correo Electrónico"}
            placeholder={"tu.correo@ucn.cl"}
            placeholderTextColor={"#B2B2B2"}
            autoComplete={"email"}
            mode={"outlined"}
            value={email}
            onChangeText={handleEmailChange}
            />

            <TextInput 
            style={style.textInput} 
            label={"Contraseña"}
            secureTextEntry={hidePwd}
            placeholder={hidePwd ? "*********" : "Tu contraseña..."}
            placeholderTextColor={"#B2B2B2"}
            autoComplete={"password"}
            mode={"outlined"}
            value={pwd}
            onChangeText={handlePwdChange}
            right={<TextInput.Icon icon={hidePwd ? "eye" : "eye-off" } onPress={handleShowPassword}/>}
            />

           <Link href={"/home/"} asChild >
            <Button mode={"contained"} style={style.button} >
                Ingresar
            </Button>
           </Link>
        </SafeAreaView>
    );
}

export default LoginScreen;
