import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export default function App() {
  
  const handlePress = () => {
    console.log("Button Pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image 
        source={require('./assets/Image/Circle.png')}
        style={styles.Circle}
      />
      <Image 
        source={require('./assets/Image/RainbowCircle.gif')}
        style={styles.rainbow}
      />
      <Image 
        source={require('./assets/Image/Letters.png')}
        style={styles.ColourLetter}
      />
      <Image 
        source={require('./assets/Image/Letter2.png')}
        style={styles.ColourLetter2}
      />
      <Image 
        source={require('./assets/Image/Letters3.png')}
        style={styles.ColourLetter3}
      />
      <Image 
        source={require('./assets/Image/Letters4.png')}
        style={styles.ColourLetter4}
      />

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Colorize</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040204',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Circle: {
    width: 234, 
    height: 235, 
    position: 'absolute', 
    top: 115, 
    left: 68,
  },
  rainbow: {
    width: 228, 
    height: 265, 
    position: 'absolute', 
    top: 100, 
    left: 70,
  },
  ColourLetter2: {
    position: 'absolute', 
    top: 445, 
    left: 40,
  },
  ColourLetter: {
    position: 'absolute', 
    top: 470, 
    left: 40,
  },
  ColourLetter3: {
    position: 'absolute', 
    top: 530, 
    left: 40,
  },
  ColourLetter4: {
    position: 'absolute', 
    top: 570, 
    left: 40,
  },
  button: {
    position: 'absolute', 
    top: 640,
    left: 40,
    backgroundColor: 'transparent', 
    borderWidth: 2,                
    borderColor: '#FBFBF9',          
    borderRadius: 10,             
    padding: 10,                   
    alignItems: 'center',           
    justifyContent: 'center',       
    opacity: 0.7,
  },
  buttonText: {
    color: '#FBFBF9',
    fontSize: 18,
  },
});
