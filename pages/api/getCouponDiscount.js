import { supabase } from '../../utils/supabaseClient'
const handler = async (req, res) => {
    const { couponCode } = req.body
    const key = req.headers.authorization
    try {
        const saltRounds = 10
        let { data: user } = await supabase
            .from('apiKeys')
            .select('*')
            .eq('apiKey', key)
            .single()
        let { data: coupon, error } = await supabase
            .from('coupons')
            .select('*')
            .eq('user', user.user)
            .eq('couponCode', couponCode)
            .single()

        if (error) {
            throw error
        } else {
            return res.status(200).send(coupon.discount)
        }
    } catch (error) {
        return res.status(401).send('Error creating coupon')
    }
}

export default handler
