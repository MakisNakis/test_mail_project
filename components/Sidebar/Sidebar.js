import Compose from './icons'
import Mailbox from './Mailbox'
import Lists from './Lists'
import Labels from './Labels'

const profile = {
    img: <img src="/profile.jpg"></img>,
    name: 'Salman Shah',
    email: 'shah.salman4@gmaiil.com',
}

const Sidebar = () => {
    return (
        <aside className="h-full w-1/6 min-w-min flex flex-col">
            <div className="mt-8 mb-5 pl-29px pr-5">
                <button className="w-full pt-4 pb-3 flex justify-center space-x-2 focus:outline-none bg-button rounded-full shadow-xl transform hover:scale-105">
                    <Compose className="" />
                    <span className="text-sm text-white">Compose</span>
                </button>
            </div>
            <div className="pl-29px pr-5 flex flex-col flex-grow overflow-y-auto">
                <Mailbox />
                <Lists />
                <Labels />
            </div>
            <div className="pl-4 pr-5 pt-3 pb-4 flex space-x-1 border-t">
                {profile.img}
                <div className="flex flex-col text-font-quarternary">
                    <span className="text-sm">{profile.name}</span>
                    <span className="text-xxs opacity-60">{profile.email}</span>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
