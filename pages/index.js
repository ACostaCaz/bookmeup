import { supabaseSignOut } from "../utils/supabaseSignOut";
import { supabase } from "../utils/supabaseClient";
import { useUser } from "../context/auth";
import Account from "../components/Account";
import { useEffect } from "react";
import axios from "axios";
export default function Home() {

  const { user } = useUser()
  const session = supabase.auth.session()

  useEffect(() => {
    axios.post("/api/auth", {
      event: user ? 'SIGNED_IN' : 'SIGNED_OUT',
      session: session
    })
  }, [user])

  return (
    <div>
      <h1>{user.email}</h1>
      <Account session={session} />
      <button
        onClick={() => supabaseSignOut()}>
        Log out
      </button>
    </div>
  )
}