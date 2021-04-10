import { combineReducers, createStore } from 'redux'

import mailbox from './reducers/mailbox'

const models = combineReducers({
    mailbox,
})

const store = createStore(models)

export default store
