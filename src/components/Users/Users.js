import React from 'react';
import { useState } from 'react';
import './Users.css';


const Users = (props) => {
    const {name, email, phone, profile} = props.user;
    const [users, setUsers] = useState();
    return (
        <div className='user-info'>
            <a href={profile}><img className='profile-image' src={profile} alt="" /></a>
            <h1>{name}</h1>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <button className='button'>Add me</button>
        </div>
    );
};
export default Users;