import Block from '../Block'
import { Purple, Orange, Yellow, Blue } from './icons'

const MENU = [
    {
        title: 'Personal (2)',
        icon: <Purple />,
    },
    {
        title: 'Clients',
        icon: <Orange />,
    },
    {
        title: 'Work (2)',
        icon: <Yellow />,
    },
    {
        title: 'Friends',
        icon: <Blue />,
    },
]

const Labels = () => {
    return <Block title="LABELS" listConfig={MENU} />
}

export default Labels
