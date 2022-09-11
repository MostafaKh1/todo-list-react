import React , {useEffect, useState} from "react"

import "./App.css"
import List from "./List"




export default function App() {

const [item,setItems] = useState("")
const [iteamEmpty,setIteamEmpty] = useState(false)  
const [iteamAdded,setIteamAdded] = useState(false)
const [objItem,setObjItems] = useState([])




function RemoveItem(id) {
    setObjItems(prevet => prevet.filter(iteam => iteam.id !== id))
    console.log(id)
}

const Iteams = objItem.map(item => <List key={item.id}  value={item.task}  RemoveItem={RemoveItem}  id={item.id}/>)

function HanndleChange(e) {
    
    setItems(e.target.value)
}   

function AddingItems() {
    const Chacked = objItem.some(word => word.task === item)
    if(Chacked) {
        setIteamAdded(true)
        
    } else if (item === "") {
        setIteamEmpty(true)
    }
        
     else {
        setIteamAdded(false)
        setObjItems(prevent => [...prevent , {
            id:item,
            task:item
        }])
        setItems("")
    }
    
    
}

useEffect(()=> {
    if(item.length > 0) {
        setIteamEmpty(false)
    }
},[item])



    return(
    
        <>
            <div className='container'>
            <div className='items'>
                 <div className='item-top'>
                    <span style={{display: iteamAdded ? "block" : "none" , color:"red"}}>This task already added</span>
                    <span style={{display: iteamEmpty ? "block" : "none" , color:"red"}}>Box is Empty</span>
            <input type="text" placeholder='Add your new Todo' name="Task" onChange={HanndleChange} value={item} />
           <button className="btn" onClick={AddingItems}>+</button>
           </div>
           <div className="tasks">
                     {Iteams}
                    {objItem.length > 0 ? <button onClick={() => setObjItems([])} className="btn">Delete All</button> : ""}
           </div>
           
        </div>
             </div>
        </>
    )
};