import React from 'react'

import { view as Filter } from '../components/TodoList/filter'
import { view as Todos } from '../components/TodoList/todos'

const TodoList = () => {
  return (
    <div>
      <Filter />
      <Todos />
    </div>
  )
}

export default TodoList
