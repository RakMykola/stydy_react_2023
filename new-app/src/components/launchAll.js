import { getUsersAxios } from "../services/api.services";
import { useEffect, useState } from "react";
import Launch from "./launch";


export default function LaunchAll() {
    let [posts, setPosts] = useState([]);



    useEffect(() => {
        // getUsers().then(value => setUsers(value));
        // getUsersAxios().then(value => setUsers(value.data))
        getUsersAxios().then(value => setPosts(value.data.filter(data => data.launch_year != 2018)))
    }, []);





    return (
        <div>
            {
                posts.map((post, index) => (<Launch post={post} key={index} />))
            }

        </div>
    )

}