import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {
  // Estado para rastrear o número de pessoas no restaurante
  const [count, setCount] = useState(0);

  // Função para incrementar o número de pessoas
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Função para decrementar o número de pessoas
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.container}
    >
      <Text style={styles.title}>Contador Restaurante</Text>
      
      {/* Exibe o número atual de pessoas */}
      <Text style={styles.counter}>{count}</Text>
      
      <View style={styles.buttonContainer}>
        {/* Botão para incrementar */}
        <TouchableOpacity style={styles.button} onPress={handleIncrement}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        
        {/* Botão para decrementar */}
        <TouchableOpacity style={styles.button} onPress={handleDecrement}>
          <Text style={styles.buttonText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

// Estilos do aplicativo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  counter: {
    fontSize: 48,
    marginVertical: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default App;
