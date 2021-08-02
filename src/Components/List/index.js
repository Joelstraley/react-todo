import React, { useState } from "react"; 
import InputForm from "../Input Field";
import Todo from "../Todo";


function List(props){
        const [todos, setTodos] = useState([])

        const addTodo = todo => {
            if(!todo.text){
                return;
            }

            const newTodos = [todo,...todos]

            setTodos(newTodos)
        };

        const updateTodo = (todoId, newValue) => {
            if(!newValue.text){
                return;
            }

            setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
            );

        }


        const removeTodo = id => {
            const removeArr = [...todos].filter(todo => todo.id !== id)

            setTodos(removeArr)

        }

        const completeTodo = id => {
            let updatedTodos = todos.map(todo => {
                if(todo.id === id){
                    todo.isComplete = !todo.isComplete
                }
                return todo;
            });
            setTodos(updatedTodos)
        }

    return(

        <div className="listItems">
            <h1>Today's List</h1>
                <ul className="todo-container">
                 <InputForm onSubmit={addTodo}/>
                 <Todo 
                 todos={todos}
                 completeTodo={completeTodo}
                 removeTodo={removeTodo}
                 updateTodo={updateTodo} />
                </ul>
          
        </div>

    )
} 

export default List