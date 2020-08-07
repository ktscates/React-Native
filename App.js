import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function App() {

  // const [name, setName] = useState('shaun')

  // const [person, setPerson] = useState({name: 'mario', age: 40})

  // const clickHandler = () => {
  //   setName('Cates')
  //   setPerson({name: 'yoshi', age: 50})
  // }

  // const [name, setName] = useState('shaun')

  // const [age, setAge] = useState('30')

  const [people, setPeople] = useState([
    {name: 'shaun', id: '1'},
    {name: 'yoshi', id: '2'},
    {name: 'mario', id: '3'},
    {name: 'luigi', id: '4'},
    {name: 'peach', id: '5'},
    {name: 'toad', id: '6'},
    {name: 'bowser', id: '7'},
   
  ]); 

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id != id)
    })
    // setPeople()
  }

  return (
    <View style={styles.container}>
      {/* <Text>My name is {name}</Text>
      <Text>His name is {person.name} and he's {person.age}</Text>
      <View style={styles.buttonContainer}>
        <Button title='update state' onPress={clickHandler}/>
      </View>  */}
      {/* <Text>Enter name: </Text>
      <TextInput 
          multiline
          style={styles.input}
          placeholder = 'e.g John Doe'
          onChangeText = {(val) => setName(val)}
        />
        <Text>Enter age: </Text>
        <TextInput 
          keyboardType = 'numeric'
          style={styles.input}
          placeholder = 'e.g 50'
          onChangeText = {(val) => setAge(val)}
        />
      <Text>name: {name}, age: {age}</Text> */}

      {/* <ScrollView>
        {people.map(item => (
            <View id={item.id}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
        ))}
      </ScrollView> */}
      <FlatList 
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  buttonContainer: {
    marginTop: 20
  },

  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
  },

  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24
  }

});
