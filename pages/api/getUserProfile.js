import { supabase } from "../../utils/supabaseClient"
const handler = async (req, res) => {
    const { username } = req.body
    console.log(username)
    try {
        let { data: profile, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('username', username)
            .single()
        console.log(profile)
        if (error) {
            throw error
        } else {
            return res.status(200).json(profile)
        }
    } catch (error) {
        return res.status(401).send("Error getting profile")
    }
}

export default handler