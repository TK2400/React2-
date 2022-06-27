import { useState } from "react";

export default function ShowInfo(props) {

    const [buttonClicked, setButtonClicked] = useState(false)

    function showMore() {
        if (!buttonClicked) {
            setButtonClicked(true)
        }
        else { setButtonClicked(false) }
    }

    return (
        <div>
            <h3> {props.fullName}</h3>
            <button onClick={() => showMore()}>
                {buttonClicked ? "show less" : "show more"}
            </button>
            {buttonClicked &&
                <div>
                    <p> {props.text}</p>
                </div>
            }
        </div>
    )
}
