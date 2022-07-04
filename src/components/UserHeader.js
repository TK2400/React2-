// import { useState } from "react";
import './userHeader.css'

export default function UserHeader() {

    return (
        <div className="userHeader" >
            <ul>
                <li> Users </li>
                <li> photos</li>
            </ul>
            <form>
                <label> Serch users by name</label>
                <input placeholder="input begining of user's name" />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}