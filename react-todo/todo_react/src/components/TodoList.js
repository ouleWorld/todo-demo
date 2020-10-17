import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
    render() {
        let todos = this.props.todos
        let onDelete = this.props.onDelete
        let onUpdate = this.props.onUpdate
        return (
            <ul>
                {todos.map(t => (
                    <li key={t.id}>
                        {/*实际上对于每一个 Todo, 都通过 TodoItem 来处理*/}
                        <TodoItem todo={t}
                                  onUpdate={onUpdate}
                                  onDelete={onDelete}/>
                    </li>
                ))}
            </ul>
        )
    }
}

export default TodoList
