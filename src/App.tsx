import React, { FC } from "react";
import Card, { CardVariant } from "./components/card";
import UserList from "./components/userList";
import { IUser } from "./types/types";

const App = () => {
  const users: IUser[] = [
    {
      id: 1,
      name: "Barry",
      eamil: "bb@goodle.com",
      address: {
        city: "Moscow",
        street: "Chistyiye prudyi",
        zipcode: "qwerty1",
      },
    },
    {
      id: 2,
      name: "Larry",
      eamil: "ll@goodle.com",
      address: {
        city: "Kaliningrad",
        street: "Chistaya",
        zipcode: "1qwerty",
      },
    },
  ];
  return (
    <div>
      <Card
        onClick={(num: number) => console.log("click", num)}
        variant={CardVariant.outlined}
        width="200px"
        height="200px"
      >
        <button>кнопка</button>
      </Card>
      <UserList users={users} />
    </div>
  );
};

export default App;
