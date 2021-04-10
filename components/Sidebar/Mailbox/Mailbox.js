import Link from 'next/link'

import { Attachents, Drafts, Inbox, More, SentMail, Trash } from './icons'

import Block from '../Block'

import MAILBOX_TABS from './constants'
import letters from '../../../data'

const Mailbox = ({ mailboxCurrentTab, setMailboxTab }) => {
    const MENU = [
        {
            title: (
                <Link href={`/${MAILBOX_TABS.inbox}`}>
                    <a>{`Inbox (${letters.length})`}</a>
                </Link>
            ),
            name: MAILBOX_TABS.inbox,
            icon: <Inbox className="fill-current" />,
        },
        {
            title: (
                <Link href={`/${MAILBOX_TABS.sentMail}`}>
                    <a>{'Sent Mail'}</a>
                </Link>
            ),
            name: MAILBOX_TABS.sentMail,
            icon: <SentMail className="fill-current" />,
        },
        {
            title: (
                <Link href={`/${MAILBOX_TABS.drafts}`}>
                    <a>{'Drafts'}</a>
                </Link>
            ),
            name: MAILBOX_TABS.drafts,
            icon: <Drafts className="fill-current" />,
        },
        {
            title: (
                <Link href={`/${MAILBOX_TABS.trash}`}>
                    <a>{'Trash (2)'}</a>
                </Link>
            ),
            name: MAILBOX_TABS.trash,
            icon: <Trash className="fill-current" />,
        },
        {
            title: (
                <Link href={`/${MAILBOX_TABS.attachments}`}>
                    <a>{'Attachments'}</a>
                </Link>
            ),
            name: MAILBOX_TABS.attachments,
            icon: <Attachents className="fill-current" />,
        },
        {
            title: (
                <Link href={`/${MAILBOX_TABS.more}`}>
                    <a>{'More'}</a>
                </Link>
            ),
            name: MAILBOX_TABS.more,
            icon: <More className="fill-current" />,
        },
    ]

    return <Block title="MAILBOX" listConfig={MENU} activeRecord={mailboxCurrentTab} setActiveRecord={setMailboxTab} />
}

export default Mailbox
