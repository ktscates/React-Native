import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoItem'
import AddTodo from './components/addTodo'
import Sandbox from './components/sandbox'

export default function App() {

  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play on the switch', key: '3'}
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {
    return text.length > 5 ? (
      setTodos((prevTodos) => {
        return [
          {text: text, key: Math.random().toString()},
          ...prevTodos
        ]
      })
    ) : (
      Alert.alert('OOPS!', 'Todos must be 5 chars long', [
        {text: 'Understood', onPress: () => console.log('alert closed')}
      ])
    ) 
  }

  const press = () => {
    // console.log('dismissed keyboard')
    Keyboard.dismiss()
  }

  return (
    // <Sandbox />
    <TouchableWithoutFeedback onPress={press}>
      <View style={styles.container}>
        {/* header */}
        <Header />
        <View style={styles.content}>
          {/* form */}
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={({item}) => (
                <View>  
                  <TodoItem item={item} pressHandler={pressHandler} />
                </View>
              )}
            />
          </View>

        </View>

      </View>
    </TouchableWithoutFeedback>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  content: {
    padding: 40,
    flex: 1,
  },

  list: {
    marginTop: 20,
  }

});
