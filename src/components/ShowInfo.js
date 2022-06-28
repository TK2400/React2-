import { useEffect, useState } from "react";


export default function ShowInfo(props) {
    const [users, setUsers] = useState(() => {
        return []
    })
    const [buttonClicked, setButtonClicked] = useState(props.state)

    function showMore() {
        if (!buttonClicked) {
            setButtonClicked(true)
        }
        else { setButtonClicked(false) }
    }

    useEffect(() => {
    //    fetch("http://127.0.0.1:9000/users")
        fetch("https://randomuser.me/api/?results=10%22")
            .then((resp) => resp.json())
            .then((result) => setUsers(result.results))
    }, [])



    return (
        <header>
            <div>
                {users.map((user) => (
                    <div key={user.name.first}> {user.name.first} {user.name.last}</div>))}
            </div>
            <button onClick={() => showMore()}>
                {buttonClicked ? "show less" : "show more"}
            </button>
            {buttonClicked &&
                users.map((user) => (
                    <div key={user.location.city}> {user.location.city}, {user.location.country}</div>))
            }


        </header>
    )
}


