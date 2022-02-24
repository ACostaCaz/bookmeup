import { supabaseSignOut } from '../utils/supabaseSignOut'
import { supabase } from '../utils/supabaseClient'
import { useUser } from '../context/auth'
import PrivateRoute from '../components/PrivateRoute'
import { useEffect } from 'react'
import axios from 'axios'

export default function Home() {
    const { user } = useUser()
    const session = supabase.auth.session()

    useEffect(() => {
        axios.post('/api/auth', {
            event: user ? 'SIGNED_IN' : 'SIGNED_OUT',
            session: supabase.auth.session(),
        })
    }, [user])

    return (
        <PrivateRoute>
            <h1>Home</h1>
        </PrivateRoute>
    )
}
