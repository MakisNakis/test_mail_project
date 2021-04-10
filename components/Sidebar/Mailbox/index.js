import { connect } from 'react-redux'
import setMailboxTab from '../../../store/actions/mailbox'

import Mailbox from './Mailbox'

const mapState = state => ({
    mailboxCurrentTab: state.mailbox.currentTab,
})

const mapDispatch = dispatch => ({
    setMailboxTab: tabName => dispatch(setMailboxTab(tabName)),
})
export default connect(mapState, mapDispatch)(Mailbox)
