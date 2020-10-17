import React, { Component } from 'react'
import Menu from './Menu'
import TodoList from './TodoList'
import TodoCounter from './TodoCounter'

import './todo.css'
import TodoApi from '../api/todo'

class Todo extends Component {
    constructor(props) {
        super(props)
        this.api = new TodoApi()
        this.state = {
            todos: [],
            text: '',
        }
        // 提前绑定好四个方法的 this
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onUpdate = this.onUpdate.bind(this)
        this.onDelete = this.onDelete.bind(this)
    }

    // 一般在componentDidMount 生命周期中发出数据请求
    componentDidMount() {
        this.api.all((r) => {
            let ts = r
            this.setState({
                todos: ts,
            })
        })
    }

    onUpdate(todo) {
        let todos = this.state.todos
        let t = todos.find(e => e.id === todo.id)
        // 数据更新的方式
        Object.keys(todo).forEach(k => {
            t[k] = todo[k]
        })
        this.setState({
            todos: todos,
        })
    }

    onDelete(id) {
        console.log('id in delete', id, this.state)
        let todos = this.state.todos
        let index = todos.findIndex(e => e.id === id)
        todos.splice(index, 1)
        this.setState({
            todos: todos,
        })
    }

    onChange(e) {
        this.setState({ text: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        if (!this.state.text.length) {
            return
        }
        let task = this.state.text
        let data = {
            task,
        }
        let todos = this.state.todos
        this.api.add(data, (r) => {
            let ts = r
            todos.push(ts)
            this.setState({
                todos: todos,
            })
        })
    }

    render() {
        let todos = this.state.todos
        console.log('todos in Todo', todos)
        return (
            <div>
                <Menu />
                <h3>TODO</h3>
                {/*父组件与子组件的通信使用回调函数的形式来实现*/}
                <TodoList todos={todos} onUpdate={this.onUpdate}
                          onDelete={this.onDelete}/>
                <TodoCounter todos={todos}/>
                <form onSubmit={this.onSubmit}>
                    {/*转让焦点*/}
                    <label htmlFor="new-todo">
                        输入事项
                    </label>
                    <input
                        id="new-todo"
                        onChange={this.onChange}
                        value={this.state.text}
                    />
                    <button>
                        添加第 {todos.length + 1} 个 todo
                    </button>
                </form>
            </div>
        )
    }
}

export default Todo
