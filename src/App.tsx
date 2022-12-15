import { useState } from 'react'
import Modal from "./components/Modal"
import './App.css'

function App() {
  const [modalOpen, setModalOpen] = useState(false)

const handleModal = () => setModalOpen(!modalOpen);

  return (
    <div className="App">
      <h1>Modal Tutorial with React Portal</h1>
      <button onClick={handleModal} style={{color: "white", background: "black", outline: "none"}}>Open Modal </button>
      {modalOpen && <Modal closeModal={()=> setModalOpen(false)}></Modal>}
    </div>
  )
}

export default App
