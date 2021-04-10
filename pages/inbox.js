import Inbox from '../components/Inbox'
import PageLayout from '../layouts/PageLayout'

const InboxPage = props => (
    <PageLayout title="Входящие">
        <Inbox {...props} />
    </PageLayout>
)

export default InboxPage
