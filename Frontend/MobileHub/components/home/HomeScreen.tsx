import {ActivityIndicator,Text, Button, Card} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import{StyleSheet, ScrollView} from 'react-native';
import { useEffect, useState } from "react";
import { Repository } from '../../models/Repository';
import axios from "axios";

/**
 * Estilos para el componente HomeScreen.
 */
const style =  StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        paddingTop:0,
        alignItems:'center',
        gap:20.
    },
    loadingContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    card:{
        width:'100%',
        backgroundColor: '#F0F0F0',
        marginBottom:15,
    },
    button:{
        width:'100%',
        marginTop:20,
    },
    scrollView: {
        width: "100%",
        margin: 0,
        padding: 0,
    },
});

/**
 * Componente HomeScreen.
 * Este componente se utiliza para mostrar una lista de repositorios.
 */
const HomeScreen = () => {

    const [repositories, setRepositories] = useState<Repository[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const url = "http://192.168.0.8:5139/repositories";

    /**
     * Efecto para cargar los repositorios al montar el componente.
     */
    useEffect(() => {
        setIsLoading(true);
        axios
        .get(url)
        .then((response) => {
            setRepositories(response.data);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return (
        <SafeAreaView style={style.loadingContainer}>
            <ActivityIndicator animating={true} size={"large"} />
        </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={style.container}>
        <Text variant={"displaySmall"}>Mis Repositorios</Text>
        <ScrollView style={style.scrollView}>
            {repositories.map((r) => (
            <Card style={style.card} key={r.name}>
                <Card.Title title={r.name} titleVariant={"headlineSmall"} />
                <Card.Content>
                <Text variant={"bodyMedium"}>
                    Creado el {r.createdAt.split("T")[0]}
                </Text>
                <Text variant={"bodyMedium"}>
                    Última Actualización {r.updatedAt.split("T")[0]}
                </Text>
                <Text variant={"bodyMedium"}>{r.commitsAmount} Commits</Text>
                </Card.Content>
                <Card.Actions>
                <Button
                    onPress={() => console.log("Ver más pressed")}
                    mode={"contained"}
                >
                    Ver más
                </Button>
                </Card.Actions>
            </Card>
            ))}
        </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;