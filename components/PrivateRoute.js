import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useUser } from '../context/auth'

export default function PrivateRoute({ children }) {
    const { user, setLastRoute } = useUser()
    const router = useRouter()

    useEffect(() => {
        if (!user) {
            setLastRoute(router.asPath)
            router.push('/login')
        }
    }, [user])

    return user ? children : <></>
}
