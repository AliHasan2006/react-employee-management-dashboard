import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        // ONLY set storage if it doesn't exist already
        if(!localStorage.getItem('employees')){
            setLocalStorage();
        }
        
        const {employees, admin} = getLocalStorage()
        setUserData({employees, admin})
    }, [])

    return (
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;