import MenuItem from '../MenuItem'

const Block = ({ title = '', listConfig = [], activeRecord = '', setActiveRecord = () => {} }) => {
    const generateList = list =>
        list.map((item, ix) => {
            return (
                <MenuItem
                    key={`${item.title}${ix}`}
                    isActive={activeRecord === item.name}
                    setActiveRecord={() => setActiveRecord(item.name)}
                >
                    {item.icon && <div className="mt-1px mr-2">{item?.icon}</div>}
                    <span className="text-sm">{item.title}</span>
                </MenuItem>
            )
        })

    console.log(activeRecord)

    return (
        <div className="pt-6 pb-5 border-b first:pt-0 last:border-b-0">
            <span className="mb-4 block text-font-tertiary">{title}</span>
            {generateList(listConfig)}
        </div>
    )
}

export default Block
