export default function Post(props) {
    let { post, liftDetails } = props;

    return (<div>

        <h3>{post.id}</h3>
        <h3>{post.title}</h3>

        {/* <img src={user.photo} /> */}

        <button onClick={() => {
            liftDetails(post)
        }}>Details</button>
    </div>)
}