// import { useState } from "react";
import User from "./User";
import { users } from "./data";



export default function Users() {
    // let [users, setUsers] = useState([]);



    return (
        <div>
            {users.map((user, index) => (<User item={user} key={index} />))}
        </div>
    )
}