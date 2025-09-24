import { useState } from "react";
import "@/styles/globals.css";
import "@/styles/styles.scss";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="main">
      {loading && <Loader onFinish={() => setLoading(false)} />}
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}