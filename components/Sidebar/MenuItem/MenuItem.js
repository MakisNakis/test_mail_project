const MenuItem = ({ children, className = '', isActive = false, setActiveRecord = () => {}, ...otherProps }) => {
    const colorClassName = isActive ? 'text-font-secondary' : 'text-font-primary'
    const hoverClassName = isActive ? '' : 'hover:text-font-secondary'
    const cursorClassName = isActive ? 'cursor-default' : 'cursor-pointer'

    return (
        <div
            className={`mb-5 last:mb-0 flex items-center ${colorClassName} ${hoverClassName} ${cursorClassName} ${className}`}
            {...otherProps}
            onClick={setActiveRecord}
        >
            {children}
        </div>
    )
}

export default MenuItem
