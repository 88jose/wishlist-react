import React, { useContext } from 'react'
import TodoContext from '../../Context/TodosContext';
import './TodoItem.css'
import imgSkate from '../../assets/img/wishlist.jpg'
import iconDelete from '../../assets/icons/trash.png'

export const TodoItem = ({todos, title}) => {

    const {todosList, setTodosList} = useContext(TodoContext)

    const deleteTodo = (todo) => {
        const {id} = todo;
        const filteredTodos = todosList.filter((todoFromContext) => todoFromContext.id !== id)
        setTodosList(filteredTodos);
    }

    return (
        <div className='section-task'>
            <h1>{title}</h1>
            <img src={imgSkate} alt="" />
            {todos.map((todo)=>{
                    return (
                        <div className='task-button' key={todo.id}>
                            <span className='task'>Task:</span>
                            <p> {todo.text}</p>
                            <button onClick={() => deleteTodo(todo)}>
                                <span className="span-delete">Delete</span>
                                <img src={iconDelete} alt="" className="icon-delete" />
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}
