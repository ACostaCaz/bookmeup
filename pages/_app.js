import Layout from '../components/Layout'
import Provider from '../context/auth'
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {

  return (
    <Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
