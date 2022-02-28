import { supabase } from '../../utils/supabaseClient'
import cookie from 'cookie'

const handler = async (req, res) => {
    const { user } = await supabase.auth.api.getUserByCookie(req)
    if (!user) return res.status(401).send('Unauthorized')

    const token = cookie.parse(req.headers.cookie)['sb-access-token']
    supabase.auth.session = () => ({ access_token: token })

    try {
        let { data: coupons, error } = await supabase
            .from('coupons')
            .select('*')
            .eq('user', user.id)

        if (error) {
            throw error
        } else {
            console.log(coupons)
            return res.status(200).json(coupons)
        }
    } catch (error) {
        return res.status(401).send('Error getting profile')
    }
}

export default handler
