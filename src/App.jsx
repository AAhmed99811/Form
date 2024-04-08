import { useState, useEffect, useRef } from "react";
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

import BackDrop from "./Components/BackDrop"
import SideBar from "./Components/SideBar";

// import items from "./Components/Dragable";
import { v4 as uuidv4 } from "uuid"

import Modal from "./Components/DialogModal/Modal";
import InputLabel from "./Components/InformationComponent/InputLabel";
import InputPlaceHolder from "./Components/InformationComponent/InputPlaceHolder";

function App() {

  //* Defining States

  const [drag, setDrag] = useState([
    {
      componentType: "input",
      componentLabel: "label",
      placeholder: "Placeholder",
      id: uuidv4(),
    },
    {
      componentType: "textarea",
      componentLabel: "label",
      placeholder: "Placeholder",
      id: uuidv4(),
    },
    {
      componentType: "button",
      componentLabel: "label",
      placeholder: "button",
      id: uuidv4(),
    }
  ])

  //? State For Dropping Object
  const [dropable, setDropable] = useState([])

  //? State For Attributes
  const [attributes, setAttributes] = useState({
    label: [],
    placeholder: [],
  })

  console.log(drag)
  console.log(dropable)

  //~ Defining Reference 
  const modal = useRef()
  const warningModal = useRef()
  const userLabel = useRef();
  const userPlaceHolder = useRef();

  //~ Defining Functions

  //~ Function For Saving UserLabel And UserPlaceHolder
  const handleSave = () => {
    const enteredLabel = userLabel.current.value
    const enteredPlaceHolder = userPlaceHolder.current.value

    document.getElementById("id").value = '';
    document.getElementById("id2").value = '';

    // //? Validating the user input Data
    if (enteredLabel.trim() === '' && enteredPlaceHolder.trim() === '') {
      warningModal.current.open();
      return;
    }

    setAttributes(
      prevState => {
        return {
          ...prevState,
          placeholder: [...prevState.placeholder, enteredPlaceHolder],
          label: [...prevState.label, enteredLabel],
        }
      }
    )
  }


  return (
    <DndProvider backend={HTML5Backend}>
      <main className="h-screen p-6 flex gap-4 mx-1 min-w-[650px]">
        <SideBar drag={drag} dropable={dropable} />
        <BackDrop dropable={dropable} ref={modal} attributes = {attributes}/>
      </main>
      <Modal ref={warningModal} btnCaption="Close" handleSave={handleSave}>
        <h2 className="text-xl font-bold text-red-700 my-4">Invalid Input</h2>
        <p className="">Please enter valid input</p>
      </Modal>
      <Modal ref={modal} btnCaption="Save" handleSave={handleSave}>
        <h2 className="text-xl font-bold text-red-700 my-4">INFO</h2>
        <ul>
          <InputLabel ref={userLabel} />
          <p className="text-red-500 m-5">For Button You Can Left Label Field</p>
          <InputPlaceHolder ref={userPlaceHolder} />
        </ul>
      </Modal>
    </DndProvider>
  )
}

export default App