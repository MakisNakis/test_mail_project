import { Forward, Reply } from '../../public/icons'
import Toolbar from './Toolbar'

const Letter = ({ letter }) => {
    const generateFiles = files =>
        files.map(file => {
            return (
                <div
                    key={file.id}
                    className="p-1 flex items-end space-x-2 border rounded border-fill-secondary cursor-pointer"
                >
                    {file?.icon}
                    <span className="text-font-secondary text-xxs">{file.title}</span>
                </div>
            )
        })

    if (letter === null) {
        return <div className="h-full bg-fill-primary"></div>
    }

    return (
        <div className="h-full flex flex-col bg-fill-primary">
            <div className="w-full px-7 py-8 flex items-center border-b border-fill-secondary">
                <Toolbar />
            </div>
            <div className="overflow-y-auto">
                <div className="mx-7 pt-7 pb-4 border-b border-fill-secondary overflow-y-auto">
                    <div className="text-font-secondary text-2xl">
                        <span>{letter?.title}</span>
                    </div>
                    <div className="mt-6 flex items-center">
                        <div className="h-45px w-45px flex items-center justify-center">
                            <img src="/profile.jpg" />
                        </div>
                        <div className="w-full ml-1 flex flex-col">
                            <div className="flex justify-between">
                                <span className="text-font-secondary">{letter?.senderName}</span>
                                <span className="text-font-secondary opacity-60">{letter?.recieveDate}</span>
                            </div>
                            <div>
                                <span className="text-font-septenary text-xs">From: </span>
                                <span className="text-font-secondary text-xs">{letter?.senderEmail}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-7 py-7 text-font-secondary border-b border-fill-secondary">
                    <p className="whitespace-pre-wrap">{letter?.content}</p>
                </div>
                {letter.files.length > 0 && (
                    <div className="px-7 py-5 flex space-x-2">{generateFiles(letter.files)}</div>
                )}
                <div className="mx-7 pt-5 pb-8 flex space-x-4">
                    <button className="px-9 pt-4 pb-3 flex justify-center space-x-2 focus:outline-none bg-button rounded-full shadow-xl transform hover:scale-105">
                        <Reply className="mt-1" />
                        <span className="text-sm text-white">Reply</span>
                    </button>
                    <button className="px-9 pt-4 pb-3 flex justify-center space-x-2 focus:outline-none border border-fill-secondary rounded-full shadow-xl transform hover:scale-105">
                        <Forward className="mt-1" />
                        <span className="text-sm text-font-septenary">Forward</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Letter
