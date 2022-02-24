import { useState } from 'react'
import { supabaseEmailSignIn } from '../../utils/supabaseEmailSignIn'
import { signInWithGoogle } from '../../utils/supabaseGoogleSignIn'
import Important from '../information/important_info'
import Google_Icon from '../../styles/auth/google_icon.js'
import styles from '../../styles/auth/sign_in.module.css'

export default function Auth() {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignIn = async (email, password) => {
        supabaseEmailSignIn(email, password, setLoading)
    }

    return (
        <form>
            <div>
                <h2>Sign-In</h2>
                <p>
                    Connect to our services filling the following information:
                </p>
            </div>

            <div>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div>
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div id="password_fields">
                <label id="checkbox_label">
                    <input type="checkbox" />
                    Remember me.
                </label>
                <a href="./">Forgot password?</a>
            </div>

            <div id="form_buttons">
                <button
                    onClick={(e) => {
                        e.preventDefault()
                        handleSignIn(email, password)
                    }}
                    disabled={loading}
                >
                    <span>{loading ? 'Loading' : 'Sign-In'}</span>
                </button>
                <p>or</p>
                <button
                    id={styles.log_google}
                    onClick={(e) => {
                        e.preventDefault()
                        signInWithGoogle()
                    }}
                    disabled={loading}
                >
                    <Google_Icon />
                    <span id={styles.log_google_text}>
                        {loading ? 'Loading' : 'Sign in with Google'}
                    </span>
                </button>
            </div>

            <div>
                <Important
                    information={[
                        'Do you want to make your own business? ',
                        'Create account',
                        ' and make your clients reach you easily!',
                    ]}
                    href="/register"
                />
            </div>
        </form>
    )
}
