import { createContext, useState, useEffect, useContext } from 'react';
import { supabase } from '../utils/supabaseClient';
const AuthContext = createContext();

const Provider = ({ children }) => {
    const [user, setUser] = useState(supabase.auth.user())

    useEffect(() => {
        supabase.auth.onAuthStateChange(() => {
            setUser(supabase.auth.user())
        })
    }, [])
    const exposed = {
        user,
    }
    return <AuthContext.Provider value={exposed}>{children}</AuthContext.Provider>
}


export const useUser = () => useContext(AuthContext)
export default Provider
