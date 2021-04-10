const initialState = {
    currentTab: '',
}

const mailbox = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MAILBOX_TAB':
            return {
                ...state,
                currentTab: action.payload,
            }
        default:
            return state
    }
}

export default mailbox
