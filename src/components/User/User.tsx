import React from 'react';

export interface UserProps {
    firstName: string;
    lastName: string;
    picture: string;
}

const User = ({ firstName, lastName, picture }: UserProps) => {
    return (
        <div>
            <p>{`${firstName} ${lastName}`}</p>
            <img src={picture} alt="User" />
        </div>
    )
}

export default User