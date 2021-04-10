import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { useState } from 'react'

import Letter from '../../shared/Letter'
import ItemLetter from '../../shared/ItemLetter'
import MAILBOX_TABS from '../Sidebar/Mailbox/constants'

import letters from '../../data'
import ArrowDown from './icons'

const Inbox = props => {
    const { className } = props

    const [selectedLetter, setSelectedLetter] = useState(null)
    const [searchValue, setSearchValue] = useState('')

    const generateLetters = lettersList =>
        lettersList.map(letter => {
            if (letter.title.includes(searchValue.trim()))
                return (
                    <ItemLetter
                        key={letter.id}
                        isActive={letter.id === selectedLetter?.id || false}
                        letter={letter}
                        onClick={() => {
                            letter.opened = true
                            setSelectedLetter(letter)
                        }}
                    />
                )
        })

    return (
        <div className="h-full flex">
            <div className={`p-h-full w-2/5 flex flex-col bg-fill-tertiary ${className}`}>
                <div className="p-8">
                    <Input
                        className="h-45px text-font-secondary font-medium rounded-full"
                        onChange={({target}) => setSearchValue(target.value)}
                        placeholder="Search"
                        prefix={<SearchOutlined className="text-font-primary" />}
                    />
                </div>
                <div className="px-7 pb-4 flex justify-between items-end space-x-2">
                    <span className="text-font-secondary text-2xl">Inbox</span>
                    <div className="flex items-center">
                        <span className="text-sm text-font-senary">Sort by:</span>
                        <span className="ml-1 text-sm text-font-senary">Unread</span>
                        <ArrowDown className="ml-2 cursor-pointer" />
                    </div>
                </div>
                <div className="flex flex-col flex-grow overflow-y-auto">{generateLetters(letters)}</div>
            </div>
            <div className="h-full w-3/5 bg-pink-100">
                <Letter letter={selectedLetter} />
            </div>
        </div>
    )
}

export default Inbox
