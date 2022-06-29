import Profile from './components/Profile';
import { useEffect, useState } from "react";

export default function App3() {
    const [users, setUsers] = useState(() => {
        return []
    })

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=5")
            .then((resp) => resp.json())
            .then((result) => setUsers(result.results))
    }, [])




    return (
        <div className="App" style={
            { backgroundColor: 'lightblue' ,
            padding: "30px", 
            marginBottom: "50px", 
            width: "300px",
            marginLeft: "auto",
            marginRight: "auto",
            height: "auto",
            border: "black",
            borderWidth:"5px"}}>
            <section>
                {users.map((user) => (
                    <Profile
                    key={user.name.first}
                    state={false}
                    name={`${user.name.title} ${user.name.first} ${user.name.last}`}
                    location = {`${user.location.city} ${user.location.country}`}
                    image = {user.picture.large}
                />
                ))}
                  </section>   
        </div>
    );
}