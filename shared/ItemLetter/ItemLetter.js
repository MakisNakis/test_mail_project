import { Clip } from '../../public/icons'

const ItemLetter = ({ letter, isActive, onClick }) => {
    const colorClassName = isActive ? 'bg-fill-primary' : ''
    const cursorClassName = isActive ? '' : 'cursor-pointer'

    return (
        <div
            className={`pt-7 pb-5 pl-8 pr-6 relative flex flex-col border-b-2 border-fill-secondary ${colorClassName}${cursorClassName}`}
            onClick={onClick}
        >
            {isActive && <div className="h-full w-1 left-0 top-0 absolute bg-blue-500"></div>}
            <div className="flex justify-between items-end">
                <div className="flex space-x-1">
                    {!letter.opened && <div className="h-2 w-2 mt-1.5 bg-blue-500 rounded-full"></div>}
                    <span className="text-font-secondary text-base">{letter.title}</span>
                </div>
                <div className="text-font-secondary text-xs">{letter.recieveDate}</div>
            </div>
            <div className="mt-1.5 flex justify-between items-end">
                <div className="text-font-quinary text-xs">{letter.senderName}</div>
                {letter.files.length > 0 && <Clip className="cursor-pointer transform hover:-rotate-12" />}
            </div>
        </div>
    )
}

export default ItemLetter
