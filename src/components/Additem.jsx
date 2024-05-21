import React from "react";

function ToDoitem(props){

     return <div className="cross" >
     <li onClick={()=>props.delF(props.id)}>{props.text}</li>
     </div>  
}
export default ToDoitem;