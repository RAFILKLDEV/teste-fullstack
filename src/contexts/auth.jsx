import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { createSession } from "../services/api";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const login = async (email, password) => {
        const response = await createSession(email, password)
        setUser(response.data.user)
        localStorage.setItem('user', JSON.stringify(response.data.user))
        navigate('/')
    }

    const logout = () => {
        localStorage.removeItem('user')
        setUser(null)
        navigate('/login')
    }

    useEffect(() => {
        const user = localStorage.getItem('user')

        if (user) {
            setUser(JSON.parse(user))
        }

        setLoading(false)
    }, [])

    return (
        <AuthContext.Provider value={{
            authenticated: !!user,
            user,
            loading,
            login,
            logout
            }}>
            {children}
         </AuthContext.Provider>
    )
}