import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function NewBeer() {

    const navigate = useNavigate();
    const [newBeer, setNewBeer] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        contributed_by: ''
    })

    const [attenuationLevel, setAttenuationLevel] = useState(0);

    const handleChange= (e) => {
        setNewBeer(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleAttenLevel = (e) => {
      setAttenuationLevel(prev => {
          return {
              ...prev,
              attenuation_level: parseInt(e.target.value)
          }
      })
    }
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newBeerData = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer);
                //console.log(newBeerData)
                // navigate(`/beers/`)
                navigate(`/${newBeerData.data.data.id}`);
        } 
            catch (error) {
                console.error(error);
        }
    }

  return (
    <div>
         <h1>New Beer</h1>
        <form className="add-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Title" value={newBeer.name} onChange={handleChange} />
            <input type="text" name="tagline" placeholder="Tagline" value={newBeer.tagline} onChange={handleChange} />
            <input type="text" name="description" placeholder="Description" className= "description-input" value={newBeer.description} onChange={handleChange} />
            <input type="text" name="first_brewed" placeholder="First brewed" value={newBeer.first_brewed} onChange={handleChange} />
            <input type="text" name="brewers_tips" placeholder="Brewers tips" value={newBeer.brewers_tips} onChange={handleChange} />
            <input type="number" name="Attenuation_level" placeholder="Attenuation level" value={newBeer.attenuation_level} onChange={handleAttenLevel} />
            <input type="text" name="contributed_by" placeholder="Contributed by" value={newBeer.contributed_by} onChange={handleChange} />
            <button type="submit">Save</button>
      </form>
    </div>
  )
}


