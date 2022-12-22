import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import Card, { CardVariant } from "./components/card";
import { IUser } from "./types/types";
import { Itodo } from "./types/types";
import UserItem from "./components/userItem";
import TodoItem from "./components/todoItem";
import List from "./components/list";
import EventsExample from "./components/EventsExample";


const App = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [todos, setTodos] = useState<Itodo[]>([])

  useEffect(() => {
    fetchUsers()
    fetchTodos()
  },[])

   async function fetchUsers(){
    try {
      const responce = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers (responce.data)
    } catch (e) {
      alert(e);
    }
   }
   async function fetchTodos(){
    try {
      const responce = await axios.get<Itodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      setTodos (responce.data)
    } catch (e) {
      alert(e);
    }
   }
 
  

  return(
    <div>
      <EventsExample />
      <Card
        onClick={(num: number) => console.log("click", num)}
        variant={CardVariant.outlined}
        width="200px"
        height="200px"
      >
        <button>кнопка</button>
      </Card>
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem user = {user} key = {user.id}/>} 
      />
      <List
        items={todos}
        renderItem={(todo: Itodo) => <TodoItem todo = {todo} key = {todo.id}/>} 
      />
    </div>
 )};

export default App;
