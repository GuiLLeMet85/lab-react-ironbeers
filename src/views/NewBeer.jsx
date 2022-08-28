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
        attenuation_level: '',
        contributed_by: ''
        
    })

    const handleChange= (e) => {
        setNewBeer(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const newBeer = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer);
        navigate(`/projects/${newBeer.data.data._id}`)
        } catch (error) {
        console.error(error);
        }
    }

  return (
    <div>
         <h1>New Beer</h1>
        <form onSubmit={handleSubmit}>
        {/* <input type="text" name="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} /> */}
        <input type="text" name="title" placeholder="Title" value={newBeer.name} onChange={handleChange} />
        <input type="text" name="tagline" placeholder="Tagline" value={newBeer.tagline} onChange={handleChange} />
        <input type="text" name="description" placeholder="Description" value={newBeer.description} onChange={handleChange} />
        <input type="text" name="first_brewed" placeholder="First brewed" value={newBeer.first_brewed} onChange={handleChange} />
        <input type="text" name="brewers_tips" placeholder="Brewers tips" value={newBeer.brewers_tips} onChange={handleChange} />
        <input type="number" name="brewers_tips" placeholder="Attenuation level" value={newBeer.attenuation_level} onChange={handleChange} />
        <input type="text" name="contributed_by" placeholder="Contributed by" value={newBeer.contributed_by} onChange={handleChange} />


        <button type="submit">Save</button>
      </form>
    </div>
  )
}

