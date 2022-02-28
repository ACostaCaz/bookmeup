import Nav from '../components/nav/nav'
import Coupon_Tag from '../components/coupon/Coupon_Tag.js'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import PrivateRoute from '../components/PrivateRoute'

export default function Home() {
    const [coupons, setCoupons] = useState([])
    useEffect(() => {
        fetch('/api/getUserCoupons', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
        })
            .then((response) => response.json())
            .then((data) => setCoupons(Array.from(data)))
    }, [])
    return (
        <PrivateRoute>
            <div id="sbody">
                <main>
                    <div id="coupons_head">
                        <h2>Coupons</h2>
                        <Link href="./coupon_form">
                            <button>+</button>
                        </Link>
                    </div>
                    {coupons.map((coupon) => (
                        <Coupon_Tag
                            key={coupon.index}
                            name={coupon.couponCode}
                            discount={coupon.discount}
                        />
                    ))}
                </main>
                <Nav />
            </div>
        </PrivateRoute>
    )
}
