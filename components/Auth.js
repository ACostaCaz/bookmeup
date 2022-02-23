import { useState } from 'react'
import { supabaseEmailSignIn } from '../utils/supabaseEmailSignIn'
import { supabaseEmailSignUp } from '../utils/supabaseEmailSignUp'
import { signInWithGoogle } from '../utils/supabaseGoogleSignIn'

export default function Auth() {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = async (email, password) => {
        supabaseEmailSignUp(email, password, setLoading)
    }

    const handleSignIn = async (email, password) => {
        supabaseEmailSignIn(email, password, setLoading)
    }

    return (
        <div className="row flex flex-center">
            <div className="col-6 form-widget">
                <h1 className="header">Auth page</h1>
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
                            handleSignIn(email, password)
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