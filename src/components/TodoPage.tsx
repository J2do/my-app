import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { Itodo } from "../types/types";
import TodoItem from "./todoItem";
import List from "./list";

const TodoPage: FC = () => {

    const [todos, setTodos] = useState<Itodo[]>([])
  
    useEffect(() => {
      fetchTodos()
    },[])
  
     async function fetchTodos(){
      try {
        const responce = await axios.get<Itodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
        setTodos (responce.data)
      } catch (e) {
        alert(e);
      }
     }

    return(
        <List
            items={todos}
            renderItem={(todo: Itodo) => <TodoItem todo = {todo} key = {todo.id}/>} 
        />
    );
};

export default TodoPage;