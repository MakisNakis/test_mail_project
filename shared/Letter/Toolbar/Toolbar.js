import { Unwatched, Out, Clock, Delete, List, Label } from './icons'

const Block = ({ children }) => {
    return (
        <div className="h-45px w-45px flex justify-center items-center rounded-full border border-border-primary transform hover:scale-105 cursor-pointer">
            {children}
        </div>
    )
}

const Toolbar = () => {
    return (
        <div className="flex space-x-2 ">
            <Block>
                <Unwatched />
            </Block>

            <Block>
                <Out />
            </Block>

            <Block>
                <Clock />
            </Block>

            <Block>
                <List />
            </Block>

            <Block>
                <Label />
            </Block>

            <Block>
                <Delete />
            </Block>
        </div>
    )
}

export default Toolbar
