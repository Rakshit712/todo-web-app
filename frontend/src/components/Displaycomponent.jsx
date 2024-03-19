import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
 const toDoo = ({text,updateMode,deleteTodo,toggleStatus, status})=>{
    return(
        <div className="todo">
            <div className="text">{text}</div>
            <div className="icons">
                <BiEdit className ='icon' onClick = {updateMode}></BiEdit>
                <AiFillDelete className = 'icon' onClick = {deleteTodo}></AiFillDelete>
                <button className="toggle" onClick={toggleStatus}>
                {status ? "Mark Incomplete" : "Mark Complete"}
        </button>
            </div>
        </div>
    )
 }


 export default toDoo;