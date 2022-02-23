import { useEffect } from "react"
import { useUser } from "../context/auth"
import Auth from "./auth/Auth"
import Register from "./auth/register.js"

export default function Layout({ children }) {
    const { user } = useUser()

    return (
        user ? (
            <div>
                {children}
            </div>

        ) : (
            <Auth />
        )
    )
}