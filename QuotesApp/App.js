import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import quotesData from './assets/quotes.json'; // Importa o JSON

const App = () => {
  const [quote, setQuote] = useState({});
  
  // Função para obter uma citação aleatória
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    setQuote(quotesData[randomIndex]);
  };

  // Chama a função ao iniciar o aplicativo
  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <View style={styles.container}>
      {quote.image && (
        <Image source={{ uri: quote.image }} style={styles.image} />
      )}
      <Text style={styles.quoteText}>"{quote.quote}"</Text>
      <Text style={styles.authorText}>- {quote.author}</Text>
      <Button title="Nova Citação" onPress={getRandomQuote} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282c34',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  quoteText: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  authorText: {
    fontSize: 18,
    color: 'lightgray',
    marginBottom: 20,
  },
});

export default App;
