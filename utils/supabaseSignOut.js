import { supabase } from '../utils/supabaseClient'

export async function supabaseSignOut() {
    const { error } = await supabase.auth.signOut()
}