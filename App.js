import React, { useState } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import {
  useFonts,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import { 
  AguafinaScript_400Regular 
} from '@expo-google-fonts/aguafina-script'
import { 
  AlmendraDisplay_400Regular 
} from '@expo-google-fonts/almendra-display'


export default function App() {
  const [name, setName] = useState("Amy");
  const [person, setPerson] = useState({name: "Mario", age: 40})
  
  const clickHandler = () => {
    setName("Nolan");
    setPerson({name: "Luigi", age: 45})
  }
  
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    AguafinaScript_400Regular,
    AlmendraDisplay_400Regular, 
  });


  if (!fontsLoaded) {
    return (
      <Text>App loading...</Text>
    );
  } else {
    return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'AlmendraDisplay_400Regular' }}>My name is {name}</Text>
      <Text style={{ fontFamily: 'AguafinaScript_400Regular',  }}>His name is {person.name} and his age is {person.age}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Update Name" onPress={clickHandler}/>
      </View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },

});
