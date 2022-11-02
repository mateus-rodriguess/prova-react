import React, {useState} from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";


export default function App() {
 
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

  return (
    <View style={styles.container}>
      <Text>Prova Mobile</Text>
      <Text>Input 1</Text>
      <TextInput onChangeText={setInput1} value={input1} style={styles.input}/>

      <Text>Input 2</Text>
      <TextInput onChangeText={setInput2} value={input2} style={styles.input}/>

      <Text>Input 3</Text>
      <TextInput onChangeText={setInput3} value={input3} style={styles.input}/>
      
      <Text>1: {input1}</Text>
      <Text>2: {input2}</Text>
      <Text>3: {input3}</Text>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    margin: 10,
    fontSize: 12
  },
});