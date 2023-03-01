import React, { useContext } from 'react'
import { TodoItem } from '../../components/TodoItem/TodoItem'
import { TodoContext } from '../../Context/TodosContext'

export const ProgresPage = () => {
    const {todosList} = useContext(TodoContext)

    const inProgressTodos = todosList.filter((todo) => todo.status === 'inProgress')
    
    return (
        <div className='section-progress'>
            <TodoItem title="IN PROGRESS" todos={inProgressTodos}/>
        </div>
    )
}
