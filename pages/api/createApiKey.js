import { supabase } from '../../utils/supabaseClient'
import cookie from 'cookie'
import crypto from 'crypto'
const handler = async (req, res) => {
    const { name } = req.body

    const { user } = await supabase.auth.api.getUserByCookie(req)
    if (!user) return res.status(401).send('Unauthorized')
    const token = cookie.parse(req.headers.cookie)['sb-access-token']
    supabase.auth.session = () => ({ access_token: token })

    const saltRounds = 10
    const key = crypto.randomUUID()
    try {
        const apiKey = {
            keyName: name,
            apiKey: key,
            user: user.id,
        }
        let { error } = await supabase.from('apiKeys').insert(apiKey, {
            returning: 'minimal', // Don't return the value after inserting
        })

        if (error) {
            throw error
        } else {
            return res.status(200).json({ key: key })
        }
    } catch (error) {
        return res.status(401).send('Error creating coupon')
    }
}

export default handler
