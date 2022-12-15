import React from "react";
import ReactDOM from "react-dom";
import "../App.css"

export default function Backdrop (props: { children: any; closeModal: any }) {
const {children, closeModal} = props
    return ReactDOM.createPortal(
        <div className="backdrop" onClick={closeModal}>{children}</div>,
        document.getElementById("portal"), null
    )
}