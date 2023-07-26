export default function User(props) {
    let { user } = props;

    return (<div>
        <h3>Name - {user.name}
            Username - {user.username}</h3>
        <h4>Email - {user.email}</h4>

        {/* <img src={user.photo} /> */}
    </div>)
}