import { supabase } from './supabaseClient'
export const supabaseEmailSignIn = async (email, password, setLoading) => {
    try {
        setLoading(true)
        const { error } = await supabase.auth.signIn({
            email: email,
            password: password
        })
        if (error) throw error
    } catch (error) {
        alert(error.error_description || error.message)
    } finally {
        setLoading(false)
    }
}