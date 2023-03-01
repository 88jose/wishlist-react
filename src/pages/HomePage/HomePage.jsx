import React, { useContext, useState } from 'react'
import { TodoContext } from '../../Context/TodosContext'
import './HomePage.css'
import iconAdd from '../../assets/icons/plus2.png'
import { v4 as uuidv4 } from 'uuid';
import { PlayerGif } from '../../components/PlayerGif/PlayerGif';



export const HomePage = () => {
    const {todosList, setTodosList} = useContext(TodoContext)


    const addTodo = () => {
        // e.preventDefault();
        setTodosList([...todosList, formData])
        setFormData({
            id:"",
            text:"",
            status:"pending"
        })
        
    }

    const [formData, setFormData] = useState({
        id:uuidv4(),
        text:"",
        status:"pending"
    })

    const handleChangeFormData = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    console.log(formData)

    return (
        <>
            <div className='title-gif'>
                <h1>WISH LIST</h1>
                <PlayerGif />
            </div>
            <div className='section-form'>
                <form onSubmit={addTodo}>
                    <div className='inputs'>
                        <input type="text" name='text' value={formData.text} id={formData.id} placeholder='Insert Tasck' onChange={handleChangeFormData}/>
                        <select name="status" id="status" value={formData.status} onChange={handleChangeFormData}>
                            <option value="pending">Pending</option>
                            <option value="inProgress">In Progress</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                    
                        <button type="submit">
                            <span className="span-add">Add</span>
                            <img src={iconAdd} alt="" className="icon-add" />
                        </button>
                    
                </form>
            </div>
        </>
    )
}
