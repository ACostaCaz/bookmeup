import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import { supabaseSignOut } from '../utils/supabaseSignOut'

export default function Account({ session }) {
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [website, setWebsite] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)
  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    const username = "Alex27loko"
    fetch('/api/getUserProfile', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({ username }),
    })
  }

  async function updateProfile({ username, website, avatar_url }) {
    const token = session.access_token
    fetch('/api/updateProfile', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({ username, website, avatar_url }),
    })
  }

  return (
    <div className="form-widget">
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={session.user.email} disabled />
      </div>
      <div>
        <label htmlFor="username">Name</label>
        <input
          id="username"
          type="text"
          value={username || ''}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="website"
          value={website || ''}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <div>
        <button
          className="button block primary"
          onClick={() => updateProfile({ username, website, avatar_url })}
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Update'}
        </button>
      </div>

      <div>
        <button className="button block" onClick={() => supabaseSignOut()}>
          Sign Out
        </button>
      </div>
    </div>
  )
}
