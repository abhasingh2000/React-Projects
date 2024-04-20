import { useSelector, useDispatch } from 'react-redux'
import { removetodo } from './component/todoSlice'
function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

  return (
    <>
    <ul style = {{listStyle:'none'}}>
        {todos.map((todo) => (
          <>
          <div style={{display:'flex'}}>
          <li
        
            key={todo.id}
          >
            <div style = {{fontWeight:600 , fontSize:'larger'}}>{todo.text}</div>
            <button
            style = {{margin: '-5px 20px', backgroundColor:'cadetblue'}}
             onClick={() => dispatch(removetodo(todo.id))}
            >d
             X
            </button>
          </li>
          </div>
          </>
        ))}
      </ul>
    </>
  )
}

export default Todos