import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useUser } from '../context/auth'

export default function PrivateRoute({ children }) {
    const { user } = useUser()
    const router = useRouter()

    useEffect(() => {
        if (!user) {
            router.push('/login')
        }
    }, [user])

    return user ? children : <></>
}
