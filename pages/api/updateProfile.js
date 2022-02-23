import { supabase } from "../../utils/supabaseClient"
import cookie from 'cookie'
const handler = async (req, res) => {
  const { username, website, avatar_url } = req.body

  const { user } = await supabase.auth.api.getUserByCookie(req)
  if (!user) return res.status(401).send("Unauthorized")

  const token = cookie.parse(req.headers.cookie)['sb-access-token']
  supabase.auth.session = () => ({ access_token: token })

  try {
    const updates = {
      id: user.id,
      username: username,
      website: website,
      avatar_url: avatar_url,
      updated_at: new Date(),
    }

    let { error } = await supabase.from('profiles').upsert(updates, {
      returning: 'minimal', // Don't return the value after inserting
    })

    if (error) {
      throw error
    } else {
      return res.status(200).send("OK")
    }
  } catch (error) {
    return res.status(401).send("Error updating profile")
  }
}

export default handler