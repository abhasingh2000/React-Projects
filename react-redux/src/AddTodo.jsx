
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addtodo } from "./component/todoSlice";
const AddTodo = () => {
const dispatch = useDispatch();
    const[input , setInput] = useState('')

    const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(addtodo(input));
    setInput('')


    }
  return ( 
    <div>
      Add Todo
      <form onSubmit={handleSubmit}>
        <input type = "text"  
        name="text"         
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}/> 
        <br/>
       <br/>

        <button type = "submit" onClick = {handleSubmit}>Save</button>
      </form>
    </div>
  )
}

export default AddTodo
