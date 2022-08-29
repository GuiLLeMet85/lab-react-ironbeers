import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams, useNavigate} from 'react-router-dom';

export default function BeerDetails() {

    const {id} = useParams();
    const navigate = useNavigate();
    const [beer, setBeer] = useState(null);


    useEffect(() => {
        const getData = async () => {
        try {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            console.log(response)
            setBeer(response.data)
        } catch (error) {
            console.error(error);
        }
    }
    getData();
    }, [id]);

    
    return (
        <div>
            <h1> Beer details </h1>
            {beer && (
                <div className="beer-details-card">
                    <img src={beer.image_url} alt="{beer.name}"></img>
                    <p className="title-beer">{beer.name}</p>
                    <p className="tagline-beer">You know you shouldn't <strong>{beer.targline}</strong></p>
                    <p className="brewed-beer">{beer.first_brewed}</p>
                    <p className="attenuation-beer">Attenuation Beer:<br></br>{beer.attenuation_level}</p>
                    <p className="description-beer">{beer.description}</p>
                    <p className="created-beer">Created by: <br></br><span className="name-creater">{beer.name}</span></p>

                </div>    
            )}

        </div>

    )

}