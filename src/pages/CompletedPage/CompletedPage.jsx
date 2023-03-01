import React, { useContext } from 'react'
import { TodoItem } from '../../components/TodoItem/TodoItem'
import { TodoContext } from '../../Context/TodosContext'

export const CompletedPage = () => {
    const {todosList} = useContext(TodoContext)

    const completedTodos = todosList.filter((todo) => todo.status === 'completed')
    
    return (
        <div className='section-completed'>
            <TodoItem  title="COMPLETED" todos={completedTodos}/>
        </div>
    )
}
