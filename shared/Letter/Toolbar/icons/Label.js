const Label = props => {
    return (
        <svg width={15} height={15} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" {...props}>
            <g fillRule="evenodd">
                <path
                    d="M6.588.371A1.204 1.204 0 005.706 0H1.237A1.24 1.24 0 000 1.237v4.438c0 .325.124.634.356.866l8.04 8.041c.248.248.558.356.882.356.31 0 .634-.124.866-.356l4.438-4.407a1.21 1.21 0 00.016-1.732L6.588.371z"
                    fill="#8E8E93"
                />
                <path
                    d="M3.093 1.856a1.24 1.24 0 00-1.237 1.237c0 .68.556 1.237 1.237 1.237A1.24 1.24 0 004.33 3.093a1.24 1.24 0 00-1.237-1.237zm0 1.855a.62.62 0 01-.619-.618.62.62 0 01.619-.619.62.62 0 01.618.619.62.62 0 01-.618.618z"
                    fill="#FFF"
                />
            </g>
        </svg>
    )
}

export default Label
