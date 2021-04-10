import Home from '../components/Home'
import PageLayout from '../layouts/PageLayout'

const HomePage = props => (
    <PageLayout title="Почта">
        <Home {...props} />
    </PageLayout>
)

export default HomePage
