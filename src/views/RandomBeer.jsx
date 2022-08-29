

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
                    <p className="title-beer">{randomBeer.name}</p>
                    <p className="tagline-beer">{randomBeer.targline}</p>
                    <p className="brewed-beer">{randomBeer.first_brewed}</p>
                    <p className="attenuation-beer">Attenuation Beer:<br></br>{randomBeer.attenuation_level}</p>
                    <p className="description-beer">{randomBeer.description}</p>
                    <p className="created-beer">{randomBeer.contributed_by}</p>

                </div>    
            )}
            </div>
         )

        }