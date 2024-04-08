import { useDrag } from "react-dnd"

//& Component Making Items Dragable And Dropable
const Elements = ({ item, dropable }) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'element',
        item: { name: item },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()
            if (item && dropResult) {
                let tempList = dropable;
                tempList.push(item.name)
            }
        },
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0 : 1,
            isDragging: !!monitor.getItem(),
        })
    }), [],)

    console.log(dropable)

    return (
        <>
            <li ref={drag} className="bg-slate-500 text-white p-1 rounded-lg">
                {
                    item.componentType
                }
            </li>
        </>
    )
}

export default Elements