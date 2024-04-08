import { forwardRef } from 'react'

const InputPlaceHolder = forwardRef(({ }, ref) => {
    const inputFieldClass = "border-[0.2rem] rounded-md border-sky-100 h-12 shadow-lg shadow-rose-200 px-2 w-[20rem] text-stone-600 focus:outline-none focus:border-yellow-400";

    return (
        <>
            <p className="flex m-4 flex-col w-2/3 gap-4">
                <input
                    id='id2'
                    ref={ref}
                    className={inputFieldClass}
                    type="text"
                    placeholder="Enter The Place Holder"
                />
            </p>
        </>
    );
})

export default InputPlaceHolder