import { useEffect } from 'react'
import { Auth } from '../components/auth/Auth'
import { useUser } from '../context/auth'
import { useRouter } from 'next/router'
export default function Login() {
    const { user, lastRoute } = useUser()
    const router = useRouter()
    useEffect(() => {
        if (user) {
            router.push(lastRoute)
        }
    }, [user])

    return <Auth />
}
