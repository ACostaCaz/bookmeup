import Layout from '../components/PrivateRoute'
import Provider from '../context/auth'
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
    return (
        <Provider>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp
