import { useEffect, useState } from "react";
import './components/profile.css'
import ModalProfile from './components/ModalProfile';
import "./App.css"


export default function App3() {
    const [users, setUsers] = useState(() => {
        return []
    })

    const [showModal, setShowModal] = useState(false)
    const [userToShow, setUserToShow] = useState({})

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=10")
            .then((resp) => resp.json())
            .then((result) => setUsers(result.results))
    }, [])


    return (
        <div className="app">
            <section>
                {users.map((user) => (
                    <div
                        onClick={() => {
                            setShowModal(true);
                            setUserToShow(user);
                        }}
                        key={user.name.first}>
                        {user.name.title}. {user.name.first}
                        <br></br>
                    </div>

                ))}
                {showModal && <div /*onClick={() => modalShow(false)}*/>
                    <ModalProfile
                        click={() => setShowModal(false)}
                        name={`${userToShow.name.title}. ${userToShow.name.first} ${userToShow.name.last}`}
                        location={`${userToShow.location.city} ${userToShow.location.country}`}
                        street={`${userToShow.location.street.name}, ${userToShow.location.street.number}`}
                        image={userToShow.picture.large}

                    />

                </div>}
            </section>
        </div>
    );
}

