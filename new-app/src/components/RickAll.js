import { useState } from "react";
import RickOne from "./RickOne";



export default function RickAll() {
    let [characters, setCharacters] = useState([]);


    fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())
        .then(value => {
            setCharacters(value.results);
        });



    return (
        <div>
            {characters.map((character, index) => (<RickOne item={character} key={index} />))}
        </div>
    )
}