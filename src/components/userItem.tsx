import React, {FC} from 'react';
import { IUser } from '../types/types';

interface UserItemPrors{
    user: IUser;
}

const UserItem:FC<UserItemPrors> =({user}) => {
    return(
        <div style={{ padding: 15, border: "1px solid black" }}>
          {user.id}. {user.name} living {user.address.city} on street{" "}
          {user.address.street}
        </div>
        
    );
};

export default UserItem;