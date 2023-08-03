import useOneSignal from '../lib/useOneSignal';
import '../styles/global.css';

export default function App({ Component, pageProps }) {
    useOneSignal();
    return <Component {...pageProps} />;
}