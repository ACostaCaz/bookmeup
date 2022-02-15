import { supabase } from './supabaseClient'
export const supabaseEmailSignUp = async (email, password, setLoading) => {
    try {
        setLoading(true)
        const { error } = await supabase.auth.signUp({
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