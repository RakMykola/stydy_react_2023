export default function RickOne(props) {
    let { item: character } = props;

    return (
        <div>
            <h2>Name - {character.name} <br></br>Status - {character.status}</h2>

            <h4>Species - {character.species} </h4><h3>Gender - {character.gender}</h3>
            <img src={character.image} />
        </div>
    )
}