import Elements from './Elements';

//& Component For Displaying Side Component
const SideBar = ({ drag, dropable }) => {

    return (
        <aside className="w-1/3 px-8 py-16 border-2 border-stone-600 bg-stone-50 md:w-72 rounded-xl text-center">
            <h2
                className="mb-8 font-bold uppercase md:text-xl font-sans">
                Components
            </h2>
            <ul className='flex flex-col gap-2'>
                {
                    drag.map((item) =>
                        // * Passing Items To Element Component For Making Them 
                        <Elements
                            key={item.id}
                            item={item}
                            dropable={dropable}
                        />)
                }
            </ul>
        </aside>
    )
}

export default SideBar
