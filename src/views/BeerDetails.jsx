import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams, useNavigate} from 'react-router-dom';
import { getDefaultNormalizer } from "@testing-library/react";

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
                    <h2>{beer.name}</h2>
                    <p>You know you shouldn't <strong>{beer.targline}</strong></p>
                    <p>{beer.first_brewed}</p>
                    <p>{beer.attenuation_level}</p>
                    <p>{beer.description}</p>
                    <p>Contribution{beer.contributed_by}</p>

                </div>    
            )}

        </div>

    )

}