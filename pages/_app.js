import { Provider } from 'react-redux'

import store from '../store'

import '../styles/tailwind.css'

console.log(store.getState())

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp
