
import Button from '@mui/material/Button';
import '@fontsource/roboto/500.css';
import { useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import DeleteIcon from '@mui/icons-material/Delete';



export default function TodoForm() {

    let [todos, setTodos] = useState([{task: "Sample task", id: uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);

    }
    let addNewTask = () => {
        setTodos((prevTodo) => {
            if(newTodo !== ""){
                return [...prevTodo, {task: newTodo, id: uuidv4()}];
            }else{
                return [...prevTodo];
            }
        });
        setNewTodo("");
    }

    let printSome = (id) => {
        setTodos((prevTodo) => (
            todos.filter((prevTodo) => prevTodo.id != id)
        ))
    }

    return (
        <>
            <div>
                <h2 className='text-center text-4xl font-bold m-8'>Todo List</h2>
                <div className='flex items-center justify-center gap-4'>
                    <input type="text" placeholder='Enter your task' id='taskInput' className='rounded outline-none' value={newTodo}  onChange={updateTodoValue} />
                    <Button variant="contained" className='mt-4' onClick={addNewTask} >Add</Button>
                </div>
            </div>

            <h2 className='text-center my-12 font-bold text-2xl'>Listed Items </h2>
            <div className='flex items-center justify-center gap-4'>
                <ul>
                    {
                        todos.length == 0 ? <h1 className='text-2xl font-bold mt-8'>No Such Task Available</h1>
                        : todos.map((item) => (
                            <li key={item.id} className='list'>
                                <span>{item.task}</span>
                                <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => printSome(item.id)} className="delbtn">Delete</Button>
                            </li>
                        ))
            
                    }

                </ul>
            </div>

        </>
    )
}