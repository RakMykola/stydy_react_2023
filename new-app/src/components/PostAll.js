import { useEffect, useState } from "react";
import Post from "./Post";
import { getUsersPosts } from "../services/api.services";





export default function PostAll() {
    let [posts, setPosts] = useState([]);
    let [post, setPost] = useState(null);

    const liftDetails = (obj) => {
        setPost(obj);
    }

    useEffect(() => {
        // getUsers().then(value => setUsers(value));
        // getUsersAxios().then(value => setUsers(value.data))
        getUsersPosts().then(value => setPosts(value.data))
    }, []);





    return (
        <div>
            <hr /><h3>Id - {post?.id}</h3>
            <h3>Title - {post?.title}</h3>
            <h3>Body:</h3><p> {post?.body}</p>
            <hr />
            {
                posts.map((post, index) => (<Post post={post} key={index} liftDetails={liftDetails} />))
            }

        </div>
    )

}