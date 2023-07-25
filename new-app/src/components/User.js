export default function User(props) {
    let { item: user } = props;

    return (
        <div>
            <h2>Name - {user.name} <br></br>Surname - {user.surname}</h2>

            <h4>Age - {user.age} </h4><p></p>{user.info}
            <img src={user.photo} />
        </div>
    )
}