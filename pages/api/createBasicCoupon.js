import { supabase } from '../../utils/supabaseClient'
import cookie from 'cookie'
const handler = async (req, res) => {
    const { couponCode, discount } = req.body

    const { user } = await supabase.auth.api.getUserByCookie(req)
    if (!user) return res.status(401).send('Unauthorized')

    const token = cookie.parse(req.headers.cookie)['sb-access-token']
    supabase.auth.session = () => ({ access_token: token })

    try {
        let { data: coupon } = await supabase
            .from('coupons')
            .select('*')
            .eq('user', user.id)
            .eq('couponCode', couponCode)
            .single()
        if (!coupon) {
            const coupon = {
                couponCode: couponCode,
                discount: discount,
                user: user.id,
            }

            let { error } = await supabase.from('coupons').insert(coupon, {
                returning: 'minimal', // Don't return the value after inserting
            })
        } else {
            return res.status(401).send('Coupon already exists')
        }

        if (error) {
            throw error
        } else {
            console.log('Coupon created')
            return res.status(200).send(user.id)
        }
    } catch (error) {
        return res.status(401).send('Error creating coupon')
    }
}

export default handler
