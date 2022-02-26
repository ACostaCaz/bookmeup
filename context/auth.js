import { createContext, useState, useEffect, useContext } from 'react'
import { supabase } from '../utils/supabaseClient'
import axios from 'axios'
const AuthContext = createContext()

const Provider = ({ children }) => {
    const [user, setUser] = useState(supabase.auth.user())
    const [lastRoute, setLastRoute] = useState('/')
    useEffect(() => {
        supabase.auth.onAuthStateChange(() => {
            setUser(supabase.auth.user())
        })
    }, [])
    const exposed = {
        user,
        lastRoute,
        setLastRoute,
    }
    return (
        <AuthContext.Provider value={exposed}>{children}</AuthContext.Provider>
    )
}

export const useUser = () => useContext(AuthContext)
export default Provider
