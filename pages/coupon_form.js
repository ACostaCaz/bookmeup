/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react'
import PrivateRoute from '../components/PrivateRoute'
import styles from '../styles/auth/register.module.css'

export default function couponForm() {
    const [loading, setLoading] = useState(false)
    const [couponCode, setCouponCode] = useState()
    const [discount, setDiscount] = useState()
    async function createCoupon() {
        fetch('/api/createBasicCoupon', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify({ couponCode, discount }),
        })
    }
    return (
        <PrivateRoute>
            <form>
                <div>
                    <h2>New Coupon</h2>
                    <p>
                        You are creating a new coupon, please fill the following
                        information.
                    </p>
                </div>

                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        onChange={(e) => setCouponCode(e.target.value)}
                        value={couponCode || ''}
                    />
                </div>

                <div>
                    <label>% Discount</label>
                    <input
                        type="number"
                        min={0}
                        max={100}
                        onChange={(e) => setDiscount(e.target.value)}
                        value={discount || 0}
                    />
                </div>

                <div id="form_buttons">
                    <button
                        disabled={loading}
                        onClick={(e) => {
                            e.preventDefault()
                            createCoupon()
                        }}
                    >
                        <span>{loading ? 'Loading' : 'Create'}</span>
                    </button>
                </div>
            </form>
        </PrivateRoute>
    )
}
