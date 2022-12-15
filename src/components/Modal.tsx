import React from "react";
import Backdrop from "./Backdrop";
import "../App.css"

export default function Modal (props: {closeModal: any }) {
const {closeModal} = props
    return (
        <Backdrop closeModal={closeModal} container={document.getElementById("portal") as HTMLElement}>
        <div className="modal" onClick={(e)=> e.stopPropagation()}>
            <h3>Modal</h3>
            <p>This is a test modal component with React Portal</p>
            <button style={{color: "white", background: "black", outline: "none"}} onClick={closeModal}>Close</button>
        </div>
        </Backdrop>
    )
}