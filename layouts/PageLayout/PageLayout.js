import Head from 'next/head'

import Sidebar from '../../components/Sidebar'

const PageLayout = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className="h-screen flex flex-row bg-fill-primary text-fill-primary">
                <Sidebar />
                <main className="h-full w-5/6">{children}</main>
            </div>
        </>
    )
}

export default PageLayout
