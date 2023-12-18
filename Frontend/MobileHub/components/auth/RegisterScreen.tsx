import { SafeAreaView } from 'react-native-safe-area-context';
import {Button,Text, TextInput} from 'react-native-paper';
import { StyleSheet } from 'react-native';
import {useState} from 'react';
import { Link } from 'expo-router';
import { View } from "react-native";
import axios from 'axios';

/**
 * Estilos para el componente RegisterScreen.
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
 * Componente RegisterScreen.
 * Este componente se utiliza para mostrar un formulario de registro.
 */
const RegisterScreen = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [rut, setRut] = useState('');

    /**
     * Maneja el cambio del input de email.
     * @param {string} text - El nuevo texto del input de email.
     */
    const handleEmailChange = (text: string) =>{
        setEmail(text);
    }

    /**
     * Maneja el cambio del input de nombre.
     * @param {string} text - El nuevo texto del input de nombre.
     */
    const handleNameChange = (text: string) =>{
        setName(text);
    }

    /**
     * Maneja el cambio del input de rut.
     * @param {string} text - El nuevo texto del input de rut.
     */
    const handleRutChange = (text: string) =>{
        setRut(text);
    }

    /**
     * Maneja el cambio del input de año.
     * @param {string} text - El nuevo texto del input de año.
     */
    const handleYearChange = (text: string) =>{
        setYear(text);
    }

    /**
     * Maneja el envío del formulario.
     * Esta función está actualmente vacía y necesita ser implementada.
     */
    const handleSubmit = () =>{}

    return (
        <SafeAreaView style={style.container}>
            <Text variant ="displayMedium">Regístrate</Text>
            <TextInput 
            style={style.textInput} 
            label={"Nombre Completo"}
            placeholder={"Nombre..,"}
            placeholderTextColor={"#B2B2B2"}
            autoComplete={"name"}
            mode={"outlined"}
            value={name}
            onChangeText={handleNameChange}
            />
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
            label={"Año de nacimiento"}
            placeholder={"Año de nacimiento"}
            placeholderTextColor={"#B2B2B2"}
            mode={"outlined"}
            value={year}
            onChangeText={handleYearChange}
            />

            <TextInput 
            style={style.textInput} 
            label={"RUT"}
            placeholder={"RUT"}
            placeholderTextColor={"#B2B2B2"}
            mode={"outlined"}
            value={rut}
            onChangeText={handleRutChange}
            />

        
           <Link href={"/home/"} asChild replace>
            <Button mode={"contained"} style={style.button} >
                Ingresar
            </Button>
           </Link>
 

        </SafeAreaView>
    );
}

export default RegisterScreen