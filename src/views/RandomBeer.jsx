

import { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';

export default function RandomBeerPage() {
  const [randomBeer, setRandomBeer] = useState(null);
  
  const {id} = useParams();

  const getRamdomBeer = async () => {
    try {
      const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random');
      console.log(response)
      setRandomBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRamdomBeer();
  }, [id]);
    
        return (
            <div className="sect-beers">
                <h1>Random Beer</h1> 
                 {!randomBeer && <p>Loading page</p>}  
                 {randomBeer && (
                <div className="beer-details-card">
                    <img src={randomBeer.image_url} alt="{randomBeer.name}"></img>
                    <h2>{randomBeer.name}</h2>
                    <p><strong>{randomBeer.targline}</strong></p>
                    <p>{randomBeer.first_brewed}</p>
                    <p>{randomBeer.attenuation_level}</p>
                    <p>{randomBeer.description}</p>
                    <p>{randomBeer.contributed_by}</p>

                </div>    
            )}
            </div>
         )

        }