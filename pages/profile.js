import Nav from '../components/nav/nav'
import { useState } from 'react'
import PrivateRoute from '../components/PrivateRoute'

export default function Profile() {
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState()
    const [key, setKey] = useState()
    async function createKey() {
        fetch('/api/createApiKey', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify({ name }),
        })
            .then((response) => response.json())
            .then((data) => setKey(data.key))
    }
    return (
        <PrivateRoute>
            <div id="sbody">
                <main>
                    <form>
                        <div>
                            <h2>Account Information</h2>
                            <p>General information about your account:</p>
                        </div>

                        <div>
                            <label>Email</label>
                            <input type="text" />
                        </div>

                        <div>
                            <label>Password</label>
                            <input type="text" />
                        </div>

                        <div id="form_buttons">
                            <button disabled={loading}>
                                <span>{loading ? 'Loading' : 'Save'}</span>
                            </button>
                        </div>
                    </form>
                    <form>
                        <div>
                            <h2>Api Keys</h2>
                            <p>Manage your API keys:</p>
                        </div>

                        <div>
                            <label>API Key Name</label>
                            <input
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                value={name || ''}
                            />
                        </div>

                        <div id="form_buttons">
                            <button
                                disabled={loading}
                                onClick={(e) => {
                                    e.preventDefault()
                                    createKey()
                                }}
                            >
                                <span>{loading ? 'Loading' : 'Create'}</span>
                            </button>
                        </div>
                    </form>
                    {key && <h1>{key}</h1>}
                </main>
                <Nav />
            </div>
        </PrivateRoute>
    )
}
