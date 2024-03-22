import axios from "axios";
import React, { useEffect, useState } from "react";
import AOTCharacterCard from "./AOTCharacterCard";

function AOTCharacters() {
  const [name, setName] = useState('');
  const [characters, setCharacters] = useState([]);
  const [isUsed, setUsed] = useState(false);




  useEffect(() => {
    const url = `https://api.attackontitanapi.com/characters?name=${name}`
    axios.get(url).then((res) => {
      const filterData = res.data.results.map((character)=> ({
        id: character.id,
        name: character.name,
        age: character.age,
        img: character.img?.split(".png")[0] + ".png" || '',
        gender: character.gender,
        occupation: character.occupation
      }))
      setCharacters(filterData)
      console.log(filterData);
    })
  },[name])


  const userInput = (ev) => {
    // le tenemos que sacar el id y el valor a cualquier target que ejecute el evento, es decir, los input
  //  console.log(ev);
   
    const { value } = ev.target;
    //  cada vez que se ejecuta o mas bien que hay un cambio en un input, a traves del onchange de cada input estamos recogiendo su id y su valor para poder actualizar los campos
    if(value == 0){
      setUsed(false)
    }
    console.log(value);
    setName(value)
    // console.log("escuchar");
  };

  const submit = (ev) => {
    ev.preventDefault(); // Prevent default form submission behavior
    if(name.length == 0){
      setUsed(false)
      console.log(name.length);
    }
    else{
      setUsed(true); // Set the isUsed state to true to indicate a search has been performed
    }

  };
  
  return <><div>
  <div className="main">
    <form onSubmit={submit} className="search">
      
      <h1>Personajes de Attack on Titan</h1>
      <input
        type="text"
/*         onChange={(event) => {
           setName(event.target.value.toLowerCase())
          setUsed(true)  
          
        }} */
        onChange={userInput}
        //value={name.toLowerCase()}
        placeholder="Buscar por nombre"
      />
      <button type="submit">Buscar</button>
    </form>
    <div className="card-container">
        {!isUsed && <p>Busca a un personaje</p>}
        {(isUsed && characters.length !=0) && characters.map((character) => (<AOTCharacterCard  key = {character.id} data = {character}/>))}
    </div>
  </div>
  </div></>;
}

export default AOTCharacters;