import React, {FC} from 'react';
import { IUser } from '../types/types';

interface UserItemPrors{
    user: IUser;
    onClick: (user: IUser) => void;
}

const UserItem:FC<UserItemPrors> =({user, onClick}) => {
    return(
        <div onClick={() => onClick(user)} style={{ padding: 15, border: "1px solid black" }}>
          {user.id}. {user.name} living {user.address.city} on street{" "}
          {user.address.street}
        </div>
        
    );
};

export default UserItem;