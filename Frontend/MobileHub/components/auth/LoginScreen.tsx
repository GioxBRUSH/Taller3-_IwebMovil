import { SafeAreaView } from 'react-native-safe-area-context';
import {Button,Text, TextInput} from 'react-native-paper';
import { StyleSheet } from 'react-native';
import {useState} from 'react';
import { Link } from 'expo-router';

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

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [hidePwd, setHidePwd] = useState(true);

    const handleEmailChange = (text: string) =>{
        setEmail(text);
    }

    const handlePwdChange = (text: string) =>{
        setPwd(text);
    }

    const handleShowPassword = () =>{
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
