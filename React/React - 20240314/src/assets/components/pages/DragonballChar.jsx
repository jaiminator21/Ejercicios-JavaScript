import React, {useState, useEffect} from 'react'
import DBZCard from '../layout/DBZChard';

function DragonballChar(props) {
    /*Hacemos fetch a la api*/ 
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);
    const baseURL = 'https://www.dragonball-api.com/api'
    const itemCharacters = '/characters'
    const itemPlanets = '/planets'

    useEffect(() => {
        fetch("https://dragonball-api.com/api/characters")
          .then((res) => res.json())
          .then(
            (data) => {
              setItems(data.items);
              console.log(items);
            },
            (error) => {
              setError(error);
            }
          );
      }, []);


  return (
    <div className='container-row'>
      {items.map((item) => (
        <DBZCard data={item}/>
      ))}
    </div>
  )
}

export default DragonballChar