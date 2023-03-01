import React, { useContext } from 'react'
import { TodoItem } from '../../components/TodoItem/TodoItem'
import { TodoContext } from '../../Context/TodosContext'

export const PendingPage = () => {
    const {todosList} = useContext(TodoContext)

    const pendingTodos = todosList.filter((todo) => todo.status === 'pending')
    
    return (
        <div className='section-pending'>
            <TodoItem title="PENDING" todos={pendingTodos}/>
        </div>
    )
}
