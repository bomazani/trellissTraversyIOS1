import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';


const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hello Trelliss
      </Text>
      <Image source={
        require('./node_modules/react-native/Libraries/NewAppScreen/components/TrellissBackground.png')
      }/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  text: {
    color: 'darkslateblue',
    fontSize: 50,
  },
  img: {
    width:100,
    height: 100,
  }
});

export default App;