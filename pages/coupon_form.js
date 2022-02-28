import { useState } from 'react'
import styles from '../styles/auth/register.module.css'

export default function coupon_form() {
    const [loading, setLoading] = useState(false)
    return (
        <form>
            <div>
                <h2>New Coupon</h2>
                <p>
                    You are creating a new coupon, please fill the following information.
                </p>
            </div>

            <div>
                <label>Name</label>
                <input
                    type="text"
                />
            </div>

            <div>
                <label>Additional Information</label>
                <input
                    type="text"
                />
            </div>

            <div id="form_buttons">
                <button
                    
                    disabled={loading}
                >
                    <span>{loading ? 'Loading' : 'Create'}</span>
                </button>
            </div>
        </form>
    )
}
