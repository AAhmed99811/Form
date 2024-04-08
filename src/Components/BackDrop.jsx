import { forwardRef } from 'react'
import { useDrop } from 'react-dnd'
//? Component For Making A Dropable Area For Dragable Items
const BackDrop = forwardRef(({ dropable, attributes }, ref) => {

    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: 'element',
        drop: () => (ref.current.open()),
        // hover: (item, monitor) => {
        //     console.log(item)
        // },
        collect: (monitor) => (
            {
                isOver: !!monitor.isOver(),
                canDrop: !!monitor.canDrop(),
            }
        )
    }))

    const calsses = 'border-2 border-black rounded-lg p-1 ';


    return (
        <>
            <div className=" text-center w-10/12 rounded-xl px-8 py-16 bg-stone-400 border-stone-600 border-2 overflow-scroll no-scrollbar" ref={drop}>
                <h2 className='mb-8 font-bold uppercase md:text-xl font-sans'>
                    From
                </h2>
                {dropable.length == 0 ? <p className=" mb-4 text-3xl">Drag An Element To Get Started<sup className='text-red-600 text-3xl'>*</sup></p> : ""}
                <form>
                    <ul className='flex flex-col gap-2 items-center'>
                        {dropable.map((item, i) => (
                            <ul key={i} className=' inline-flex '>
                                {<label className='whitespace-pre text-xl font-semibold capitalize text-slate-900'>
                                    {attributes.label[i]}{"  "}
                                </label>}
                                {
                                    item.componentType === "input" ? <input className={calsses} placeholder={attributes.placeholder[i]} /> :
                                        item.componentType === "button" ? <button className='bg-blue-500 rounded-lg py-2 px-6 font-bold capitalize'>{attributes.placeholder[i]}</button> :
                                            item.componentType === "textarea" ? <textarea className={calsses} placeholder={attributes.placeholder[i]}></textarea> : ""
                                }
                            </ul>
                        ))
                        }
                    </ul>
                </form>
            </div>
        </>

    )
})

export default BackDrop