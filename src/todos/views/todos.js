import React from 'react'
import AddTodo from './addTodo'
import TodoList from './todoList'
const Todos = () => {
    return (
        <div>
            <TodoList />
            <AddTodo />
        </div>
    )
}

export default Todos