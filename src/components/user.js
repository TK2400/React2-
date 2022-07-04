import { useState } from "react";

export default function User(props) {
    const [divPressed, setDivPressed] = useState(false)
    // console.log("Header2 rerendered", count)

    const { user } = props

    function showMore() {
        if (!divPressed) {
            setDivPressed(true)
        }
        else { setDivPressed(false) }
    }

    return (
        <div
            className="userFoto"

            style={{ backgroundImage: `url(${user.picture.large})` }}>
            <div
                onClick={() => showMore()}
                className={`nameLine ${divPressed && "stretch"}`}>
                {user.name.first}
                {divPressed &&
                    <div
                        className="detailedInfo">
                        {user.location.city}, {user.location.country},
                    </div>}


            </div>
        </div>
    )
}