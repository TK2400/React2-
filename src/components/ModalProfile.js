// import { useState } from "react";
import './modal.css'

export default function Modal(props) {


    return (
        <div className="modal">
            <h3> {props.name}</h3>
            <p> {props.location}</p>
            <div> <img src={props.image} alt="#" /> </div>
        </div>)
}

