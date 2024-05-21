import React, {useState} from "react";

function Upper(props){
    
     let [task,setTask] = useState("");

     function handleChange(event){
          setTask(event.target.value);
        }

     return (
       <div>
       <div className="heading">
       <h1>To-Do List</h1>
       </div>
       <div className="form">
         <input onChange = {handleChange} value={task} type="text" />
         <button
           onClick={ () => {
           props.onAdd(task) ;
           setTask("")
           }}>
           <span >Add</span>
         </button>
       </div></div>
     );
}

export default Upper;