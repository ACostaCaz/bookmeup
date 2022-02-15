import { supabase } from '../utils/supabaseClient'

export async function signInWithGoogle() {
    const { user, session, error } = await supabase.auth.signIn({
        provider: 'google',
    })
}