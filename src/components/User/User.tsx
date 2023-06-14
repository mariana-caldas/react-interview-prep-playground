import React from 'react';

export interface UserProps {
    firstName: string;
    lastName: string;
    picture: string;
}

const User: React.FC<UserProps> = ({ firstName, lastName, picture }) => {
    return (
        <div>
            <p>{`${firstName} ${lastName}`}</p>
            <img src={picture} alt="User" />
        </div>
    )
}

export default User