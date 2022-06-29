import { useState } from "react";
import './profile.css'

export default function Profile(props) {

    const [buttonClicked, setButtonClicked] = useState(props.state)

    function showMore() {
        if (!buttonClicked) {
            setButtonClicked(true)
        }
        else { setButtonClicked(false) }
    }

    return (
        <div className="profile">
            <h3> {props.name}</h3>
            <button onClick={() => showMore()}>
                {buttonClicked ? "show less" : "show more"}
            </button>
            {buttonClicked && <p> {props.location} </p>}
            {buttonClicked && <img src={props.image} alt ="#"/> }

        </div>)
}



