import '@/styles/globals.css'
import '@/styles/styles.scss'
import Navbar from './components/Navbar'

export default function App({ Component, pageProps }) {
  return (
    <div className="main">
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}
