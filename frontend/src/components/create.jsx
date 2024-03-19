import { useEffect, useState } from 'react';
import axios from "axios";

import '../../src/App.css'

import Displaycomponent from  './Displaycomponent';
import { addToDo, getAllToDo, updateToDo, deleteToDo,toggleToDoStatus } from '../utils/handleAPI';

function Create() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId,  setTodoId] = useState("");
  useEffect(()=>{
    getAllToDo(setToDo)
  },[])
 
  const enterUpdateMode = (_id,text)=>{
    setIsUpdating(true)
    setTodoId(_id)
    setText(text)
  }

  return (
    <>
      <div className= 'container'>
        <h1> ToDo App</h1>
        <div className='top'>
          <input 
          type='text' 
          placeholder='Add ToDo here...'
          value={text}
          onChange={e => setText(e.target.value)}
          ></input>
          <button onClick={ isUpdating? 
            ()=>updateToDo(toDoId, text, setToDo, setIsUpdating, setText)
            :()=> addToDo(text,setText,setToDo)} className='add'> 
          {isUpdating?'Update':'Add'}
          </button>
        </div>
        <div className='list'>
        {toDo && toDo.map((item) => (
            < Displaycomponent 
            key={item._id} 
            text = {item.task}
            updateMode={()=> enterUpdateMode(item._id,item.task)}
            deleteTodo={()=> deleteToDo(item._id,setToDo)}
            toggleStatus={() => toggleToDoStatus(item._id, item.status,setToDo)} // Corrected toggleStatus function call
            status={item.status} // Pass the status prop
            
            />))}

           
            

        </div>
      </div>
    </>
  );
};

export default Create;