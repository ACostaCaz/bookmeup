import { useState } from 'react'
import { supabaseEmailSignUp } from '../../utils/supabaseEmailSignUp'
import styles from '../../styles/auth/register.module.css'
import importantInfo from '../information/importantInfo'

export default function RegisterForm() {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignIn = async (email, password) => {
        supabaseEmailSignUp(email, password, setLoading)
    }

    return (
        <form>
            <div>
                <h2>Registration</h2>
                <p>
                    You will connect to our services using the following
                    information:
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

            <div id={styles.checkbox_panel}>
                <label id="checkbox_label">
                    <input type="checkbox" />
                    *Do you want to receive an email whenever a client books for
                    your services?.
                </label>
                <label id="checkbox_label">
                    <input type="checkbox" />
                    *Do you want to receive news and information about our
                    products?.
                </label>
                <label id="checkbox_label">
                    <input type="checkbox" required />
                    Do you agree with our <a>Terms and Services?</a>
                </label>
            </div>

            <div id="form_buttons">
                <button
                    onClick={(e) => {
                        e.preventDefault()
                        handleSignIn(email, password)
                    }}
                    disabled={loading}
                >
                    <span>{loading ? 'Loading' : 'Register'}</span>
                </button>
            </div>

            <div>
                <importantInfo
                    information={[
                        'Do you already have an account? ',
                        'Sign in',
                        ' and start creating coupons!',
                    ]}
                    href="/login"
                />
            </div>
        </form>
    )
}
