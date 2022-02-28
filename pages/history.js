import Nav from '../components/nav/nav'
import Coupon_Tag from '../components/coupon/Coupon_Tag'
import PrivateRoute from '../components/PrivateRoute'

export default function History() {
    return (
        <PrivateRoute>
            <div id="sbody">
                <main>
                    <h2>Expired</h2>
                    <Coupon_Tag />
                    <Coupon_Tag />
                    <Coupon_Tag />
                    <Coupon_Tag />
                    <Coupon_Tag />
                    <Coupon_Tag />
                    <Coupon_Tag />
                    <Coupon_Tag />
                    <Coupon_Tag />
                    <Coupon_Tag />
                    <Coupon_Tag />
                    <Coupon_Tag />
                </main>
                <Nav />
            </div>
        </PrivateRoute>
    )
}
