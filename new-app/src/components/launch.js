export default function Launch(props) {
    let { post } = props;

    return (<div>


        <h3>{post.mission_name}</h3>
        <h3>{post.launch_year}</h3>
        <img src={post.links.mission_patch_small} />

    </div>)
}