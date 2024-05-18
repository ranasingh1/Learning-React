import React, { createContext } from 'react'

const UserContext = createContext({
    user:{
        name: 'Rana',
        email: 'Ranasingh061177@gmail.com'
    }
});

export default UserContext;