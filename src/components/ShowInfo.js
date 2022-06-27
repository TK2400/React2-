import { useState } from "react";

export default function ShowInfo(props) {
       const [buttonClicked, setButtonClicked] = useState(props.state)

    function showMore() {
        if (!buttonClicked) {
            setButtonClicked(true)
        }
        else { setButtonClicked(false) }
    }

    return (
        <div style={{
            display: "flex",
            alignIitems: "center",
        }}>
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


// function Avatar(props) {
//     const [user, setUser] = React.useState({...props.user});
  
//     React.useEffect(() => {
//         setUser(props.user);
//     }, [props.user])
  