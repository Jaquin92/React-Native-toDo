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
    this.setState({
      toDo: [task, ...this.state.toDo],
      newTodo: ''
    });
  };
  removeTask = (index) => {
    let { toDo } = this.state;
    toDo.splice(index, 1)
    this.setState({ toDo: [...toDo] })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.toDo.map((toDo, i) => <Text onPress={() => this.removeTask(i)} key={i}>{toDo}</Text>)}
        <TextInput
          style={{ height: 40, width: 100 }}
          onChangeText={(e) => this.handleChange(e)}
          placeholder="Type new task"
          value={this.state.newTodo} />
        <Button title="click" onPress={() => this.onPress(this.state.newTodo)} />

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
