import { useState } from "react";

export default function Header2(props) {
    const { title, onButtonClick } = props
    const [count, setCount] = useState(0)
    // sitas parasymas yra tas pats kas eilute auksciau
    // const arr = useState (0)
    // const count = arr[0]
    // const setCount = arr[1]

    const [buttonPressed, setButtonPressed] = useState(0)
    // console.log("Header2 rerendered", count)

    return (
        <div style={{ backgroundColor: "grey", padding: "30px", marginBottom: "50px", width: "300px"}} >
            <h3> {title}</h3>
            <button
                onClick={() => {
                    setCount(count - 1)
                    setButtonPressed(buttonPressed + 1)
                    onButtonClick()
                }}
            >
                -
            </button>

            <button
                onClick={() => {
                    setCount(count + 1)
                    setButtonPressed(buttonPressed + 1)
                    onButtonClick()
                }}
            >
                +
            </button>

            <h3> {title} </h3>
            <h4> {count} </h4>
            <b> Total button pressed : {buttonPressed}</b>
        </ div>
            )
}