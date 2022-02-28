import Nav from "../components/nav/nav"
import Coupon_Tag from "../components/coupon/Coupon_Tag.js"
import Link from "next/link"

export default function Home() {
    return (
        <div id="sbody">
            <main>
                <div id="coupons_head"><h2>Coupons</h2><Link href="./coupon_form"><button>+</button></Link></div>
                <Coupon_Tag/>
                <Coupon_Tag/>
                <Coupon_Tag/>
                <Coupon_Tag/>
                <Coupon_Tag/>
                <Coupon_Tag/>
                <Coupon_Tag/>
                <Coupon_Tag/>
                <Coupon_Tag/>
                <Coupon_Tag/>
                <Coupon_Tag/>
                <Coupon_Tag/>
            </main>
            <Nav />
        </div>
    )
}