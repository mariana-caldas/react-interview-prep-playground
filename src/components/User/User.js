import React from 'react';

export default function User({ userFirstName, userLastName, userPicture }) {
    return (
        <div>
            <p>{`${userFirstName} ${userLastName}`}</p>
            <img src={userPicture} alt="User" />
        </div>
    )
}