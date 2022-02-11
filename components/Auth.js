import { useState } from 'react'
import { supabase } from '../utils/supabaseClient'

export default function Auth() {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (email, password) => {
        try {
            setLoading(true)
            const { error } = await supabase.auth.signIn({
                email: email,
                password: password
            })
            if (error) throw error
            alert('Check your email for the login link!')
        } catch (error) {
            alert(error.error_description || error.message || email || password)
        } finally {
            setLoading(false)
        }
    }

    async function signInWithGoogle() {
        const { user, session, error } = await supabase.auth.signIn({
            provider: 'google',
        })
    }
    return (
        <div className="row flex flex-center">
            <div className="col-6 form-widget">
                <h1 className="header">Supabase + Next.js</h1>
                <p className="description">Sign in via magic link with your email below</p>
                <div>
                    <input
                        className="inputField"
                        type="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className="inputField"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button
                        onClick={(e) => {
                            e.preventDefault()
                            handleLogin(email, password)
                        }}
                        className="button block"
                        disabled={loading}
                    >
                        <span>{loading ? 'Loading' : 'Create account'}</span>
                    </button>
                    <button
                        onClick={(e) => {
                            e.preventDefault()
                            signInWithGoogle()
                        }}
                        className="button block"
                        disabled={loading}
                    >
                        <span>{loading ? 'Loading' : 'Google'}</span>
                    </button>
                </div>
            </div>
        </div>
    )
}