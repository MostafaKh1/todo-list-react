import React,{useState} from 'react'
import {BsFillTrashFill} from "react-icons/bs"

import {MdDone} from "react-icons/md"
import {FaUndoAlt} from "react-icons/fa"

import {TiDelete} from "react-icons/ti"
import { useEffect } from 'react';




function List({value, id, RemoveItem, }) {

    const [taskDone,setTaskDone] = useState(false)




  
 
  

    const taskDoneIcon = taskDone ? <FaUndoAlt  color='black' className='icon-space' size={20} onClick={() =>setTaskDone(false)} /> : <MdDone color='green' size={20} className='done-icon icon-space' onClick={() => setTaskDone(true)} />

  return (
    <div  className='item'>
      
              
            <div>
               <div className='task-name'>
                    <span className={taskDone ? "active" : "bullet"} onClick={() =>setTaskDone(true)}></span>
                    <h3 className={taskDone ? "done" : "none"}>{value}</h3>
                </div>  
            </div>
            <div className='icons'>
                    {taskDoneIcon}
                    <BsFillTrashFill size={20} onClick={() => RemoveItem(id)} />
  
            </div>
    </div>
  )
}

export default List