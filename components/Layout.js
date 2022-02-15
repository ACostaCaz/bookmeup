import { useEffect } from "react"
import { useUser } from "../context/auth"
import Auth from "./Auth"
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