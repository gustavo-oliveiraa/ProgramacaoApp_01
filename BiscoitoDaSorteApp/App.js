import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const App = () => {
    const [broken, setBroken] = useState(false);
    const [fortune, setFortune] = useState("");

    const fortunes = [
        "A sorte está ao seu lado!",
        "Hoje é um ótimo dia para começar algo novo.",
        "A paciência é a chave para o sucesso.",
        "Você terá grandes surpresas em breve!",
        "Seu futuro será brilhante.",
        "Boas notícias estão a caminho!",
        "Acredite em si mesmo e tudo será possível.",
        "Grandes realizações estão por vir.",
        "Você é capaz de superar qualquer obstáculo.",
        "A vida é cheia de possibilidades.",
        "Você é mais forte do que pensa.",
        "Aproveite a vida ao máximo!",
        "Grandes coisas estão por vir.",
        "Você é uma pessoa incrível!",
        "A sorte sempre estará ao seu lado.",
    ];

    const breakCookie = () => {
        const randomFortune =
            fortunes[Math.floor(Math.random() * fortunes.length)];
        setFortune(randomFortune);
        setBroken(true);
    };

    const resetCookie = () => {
        setBroken(false);
        setFortune("");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Biscoito da sorte</Text>
            <Image
                source={
                    broken
                        ? require("./assets/broken_cookie.png") // Imagem do biscoito quebrado
                        : require("./assets/closed_cookie.png") // Imagem do biscoito fechado
                }
                style={styles.cookieImage}
            />
            {broken && <Text style={styles.fortuneText}>{fortune}</Text>}
            <TouchableOpacity
                style={styles.button}
                onPress={broken ? resetCookie : breakCookie}
            >
                <Text style={styles.buttonText}>
                    {broken ? "Abrir um Novo Biscoito" : "Quebrar Biscoito"}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    cookieImage: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    fortuneText: {
        fontSize: 18,
        fontStyle: "italic",
        marginBottom: 20,
        textAlign: "center",
        paddingHorizontal: 20,
    },
    button: {
        backgroundColor: "#ff6600",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
});

export default App;
