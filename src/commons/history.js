import {createBrowserHistory, createMemoryHistory} from 'history'

let history;
//If document !== undefine => It's client side => using browser history, else it's server side
if (typeof document !== 'undefined') {
    history = createBrowserHistory()
} else {
    history = createMemoryHistory()
}

export default history