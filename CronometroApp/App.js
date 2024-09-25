import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const App = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    // Atualiza o cronômetro
    useEffect(() => {
        if (isRunning) {
            const id = setInterval(() => {
                setTime((prevTime) => prevTime + 10); // Incrementa 10 milissegundos
            }, 10);
            setIntervalId(id); // Salva o ID do intervalo
        } else if (intervalId) {
            clearInterval(intervalId); // Limpa o intervalo
        }

        return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar
    }, [isRunning]);

    // Formata o tempo decorrido
    const formatTime = (time) => {
        const minutes = String(Math.floor((time / 60000) % 60)).padStart(
            2,
            "0"
        );
        const seconds = String(Math.floor((time / 1000) % 60)).padStart(2, "0");
        const milliseconds = String(Math.floor((time % 1000) / 10)).padStart(
            2,
            "0"
        );
        return `${minutes}:${seconds}:${milliseconds}`;
    };

    const handleStart = () => {
        setIsRunning(true);
    };

    const handlePause = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cronômetro</Text>
            <Text style={styles.timer}>{formatTime(time)}</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title={isRunning ? "Pausar" : "Iniciar"}
                    onPress={isRunning ? handlePause : handleStart}
                />
                <Button title="Reiniciar" onPress={handleReset} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#282c34",
    },
    title: {
        fontSize: 32,
        color: "white",
        marginBottom: 20,
    },
    timer: {
        fontSize: 48,
        color: "white",
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 20,
    },
});

export default App;
