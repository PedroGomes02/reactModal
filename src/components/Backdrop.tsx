import React from "react";
import ReactDOM from "react-dom";
import "../App.css"

interface PortalProps {
    children: any,
    container: HTMLElement,
    closeModal: any
}

export default function Backdrop (props: PortalProps) {
const {children, container, closeModal} = props
    return ReactDOM.createPortal(
        <div className="backdrop" onClick={closeModal}>{children}</div>,
        container
    )
}