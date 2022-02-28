import Nav from "../components/nav/nav"
import { useState } from 'react'

export default function Profile() {
    const [loading, setLoading] = useState(false)

    return (
        <div id="sbody">
            <main>
                <form>
                    <div>
                        <h2>Account Information</h2>
                        <p>General information about your account:</p>
                    </div>

                    <div>
                        <label>Email</label>
                        <input
                            type="text"
                        />
                    </div>

                    <div>
                        <label>Password</label>
                        <input
                            type="text"
                        />
                    </div>

                    <div id="form_buttons">
                        <button
                            disabled={loading}
                        >
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
                        />
                    </div>

                    <div id="form_buttons">
                            <button
                                disabled={loading}
                            >
                                <span>{loading ? 'Loading' : 'Create'}</span>
                            </button>
                        </div>
                </form>
            </main>
            <Nav />
        </div>
    )
}