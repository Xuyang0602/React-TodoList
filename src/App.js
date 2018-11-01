import React, { Component } from 'react';
import './App.css';
class App extends Component {
  state = {
    lists: [],
    inputTextValue: '',
  }

  addList = () => {
    const {inputTextValue} = this.state;
    if (inputTextValue) {
      const todoItem = {
        content: inputTextValue,
        isComplete: false,
      };

      this.setState(prev => ({
        lists: [...prev.lists, todoItem],
        inputTextValue: '',
      }));
    }
  }

  onChangeHandler = (event) => {
    this.setState({
      inputTextValue: event.target.value,
    });
  }

  toggleComplete = (idx) => {
    const lists = [...this.state.lists];
    if (idx < lists.length) {
      lists[idx] = {
        content: lists[idx].content,
        isComplete: !lists[idx].isComplete,
      }
      this.setState({lists});
    }
  }

  render() {
    const {lists, inputTextValue} = this.state;
    const remainingTask = lists.filter(item => !item.isComplete);
    return (
      <div className="App">
        <div>
          <h2>Todo List</h2>
        </div>

        <div>
          <input value={inputTextValue} onChange={this.onChangeHandler}/>
          <button onClick={this.addList}>Add Todo Item</button>
        </div>

        <div>
          <p>{remainingTask.length} remaining out of {lists.length} tasks</p>
          <ul>
            {lists.map((item, idx) => (
              <li className={item.isComplete ? 'is-done': ''} key={idx} onClick={this.toggleComplete.bind(this, idx)}>{item.content}</li>
            ))}
          </ul>
        </div>

        <style>{`
          ul {
            list-style: none;
          }
          .is-done {
            text-decoration: line-through;
          }
        `}</style>
      </div>
    );
  }
}

export default App;
