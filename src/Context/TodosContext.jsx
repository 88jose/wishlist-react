import { createContext, useState, useEffect } from "react";


export const TodoContext = createContext();

export const TodosProvider = ({children}) => {
    const [todosList, setTodosList] = useState(JSON.parse(localStorage.getItem("todos")) || []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todosList))
    }, [todosList])
    

    return(
        <TodoContext.Provider value={{todosList, setTodosList}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext