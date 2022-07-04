
import { useEffect, useState } from "react";
import "./App5.css"
import UserHeader from "./components/UserHeader";
import User from "./components/user";

export default function App5() {
    const [users, setUsers] = useState(() => {
        return []
    })
    const [filter, setFilter] = useState('')

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=100")
            .then((resp) => resp.json())
            .then((result) => setUsers(result.results))
    }, [])

    function filterState(event) {
        setFilter(event.target.value)
    }



    return (
        <div className="container">
            <form>
                <label> Serch users by name</label>
                <input value={filter} onChange={filterState} placeholder="input begining of user's name" />
                <button type="submit">Search</button>
            </form>
            {/* <UserHeader /> */}
            <div className="usersList" >

                {users.filter(user => {
                    return user.name.first.startsWith(filter)
                }).map((user) => (
                    <User user={user}
                        key={user.name.first + user.name.last} />
                ))}
            </div>
        </div>
    );
}

