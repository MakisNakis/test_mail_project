const Inbox = props => {
    return (
        <svg width={15} height={15} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g fillRule="evenodd">
                <path d="M13.5 1.5v12h-12v-12h12zm0-1.5h-12C.675 0 0 .675 0 1.5v12c0 .825.675 1.5 1.5 1.5h12c.825 0 1.5-.675 1.5-1.5v-12c0-.825-.675-1.5-1.5-1.5z" />
                <path d="M9.75 10.5c0 1.275-.975 2.25-2.25 2.25s-2.25-.975-2.25-2.25H0v3c0 .825.675 1.5 1.5 1.5h12c.825 0 1.5-.675 1.5-1.5v-3H9.75z" />
            </g>
        </svg>
    )
}

export default Inbox
