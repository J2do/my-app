import React, {FC} from 'react'
import { Itodo } from '../types/types';


interface todoProps{
    todo: Itodo;
}

const TodoItem: FC<todoProps> = ({todo}) =>{
    return(
        <div>
            <input type="checkbox" checked={todo.completed} />
            {todo.id}. {todo.title}
        </div>
    )
}
export default TodoItem;