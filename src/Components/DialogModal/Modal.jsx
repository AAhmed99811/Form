import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";
const Modal = forwardRef(({ children, btnCaption, handleSave }, ref) => {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })
    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md w-2/5">
            {children}
            <form method="dialog" className="mt-4 text-right">
                <button onClick={handleSave} className="bg-blue-400 rounded-md shadow-lg shadow-rose-200 flex justify-between mx-4 p-4 w-1/4">
                    {btnCaption}
                </button>
            </form>
        </dialog>,
        document.getElementById("modal-root")
    );
})

export default Modal;