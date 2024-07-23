import React from "react";
import { MdOutlineDeleteForever } from "react-icons/md";

function ToDoitem(props){

     return <div className="cross" >
     <li>{props.text}
     <MdOutlineDeleteForever onClick={()=>{props.delF(props.id)}} />
     </li>
     
     </div>  
}
export default ToDoitem;