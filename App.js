import React from 'react';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDo: ["task", "task", "task"],
      newTodo: ''
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
        {this.state.toDo.map((toDo, i) => <Text onPress={() => this.removeTask(i)} key={i}>{toDo}</Text>)}
        <TextInput
          style={{ height: 40, width: 100 }}
          onChangeText={(e) => this.handleChange(e)}
          placeholder="Type new task"
          value={this.state.newTodo} />
        <Button title="Add Task" onPress={() => this.onPress(this.state.newTodo)} />
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
});
