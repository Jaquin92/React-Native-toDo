import React from 'react';
import { StyleSheet, TextInput, Text, View, Button, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDo: ["task", "task", "task"],
      newTodo: '',
      fontSize: 12
    };
  };

  handleChange = (e) => {
    this.setState({ newTodo: e })
  };
  onPress = (task) => {
    if (task === '') {
      alert('Invalid task')
      return
    }
    this.setState({
      toDo: [...this.state.toDo, task],
      newTodo: ''
    });
  };
  removeTask = (index) => {
    let { toDo } = this.state;
    alert(`${toDo[index]} is done!`)
    toDo.splice(index, 1)
    if (toDo.length === 0) {
      alert('You completed your todo list!')
    }
    this.setState({ toDo: [...toDo] })
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form} >
          s<TextInput
            style={styles.textInput}
            onChangeText={(e) => this.handleChange(e)}
            placeholder="Type new task"
            value={this.state.newTodo} />

          <TouchableOpacity
            style={styles.addTask}
            onPress={() => this.onPress(this.state.newTodo)} >
            <Text style={styles.buttonText}  > yerr </Text>
          </TouchableOpacity>
        </View>

        {this.state.toDo.map((toDo, i) => <Text onPress={() => this.removeTask(i)} key={i}>{toDo}</Text>)}


      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 80
  },
  form: {
    flexDirection: 'row',

  },
  textInput: {
    flex: 0.7,
    fontSize: 18
  },
  addTask: {
    flex: 0.3,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold'
  }



});
