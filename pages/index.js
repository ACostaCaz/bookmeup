import { supabaseSignOut } from '../utils/supabaseSignOut'
import { supabase } from '../utils/supabaseClient'
import { useUser } from '../context/auth'
import PrivateRoute from '../components/PrivateRoute'

export default function Home() {
    const { user } = useUser()
    const session = supabase.auth.session()

    return (
        <PrivateRoute>
            <h1>Home</h1>
            <button
                onClick={() => {
                    supabaseSignOut()
                }}
            >
                Salir
            </button>
        </PrivateRoute>
    )
}
