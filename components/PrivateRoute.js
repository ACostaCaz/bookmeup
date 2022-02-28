import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useUser } from '../context/auth'
import { supabase } from '../utils/supabaseClient'

import axios from 'axios'
export default function PrivateRoute({ children }) {
    const { user, setLastRoute } = useUser()
    const router = useRouter()

    useEffect(() => {
        if (!user) {
            setLastRoute(router.asPath)
            router.push('/login')
        }
        axios.post('/api/auth', {
            event: user ? 'SIGNED_IN' : 'SIGNED_OUT',
            session: supabase.auth.session(),
        })
    }, [user])

    return user ? children : <></>
}
