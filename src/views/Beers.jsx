import React, {useState, useEffect} from 'react'
import axios from "axios";
import {Link, Outlet} from "react-router-dom"


export default function Beers(){

    const [beers, setBeers]= useState([{}]);

    useEffect(() => {
        const getData = async () => {
          try {
            const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
            setBeers(response.data);
          } catch (error) {
            console.error(error)
          }
        }
        getData();
      }, [])


    return (
        <div className="sect-beers"> 
            <h1>Beers</h1> 
             {!beers && <p>Loading page</p>}  
             {beers && beers.map(beer => {  

                return (
                         <div className="beer-card" key={beer._id}>
                            <div className="beer-img">
                                <Link to={`/beers/${beer._id}`}>
                                    <img src={beer.image_url} alt="{beer.name}"></img>
                                </Link>
                            </div>
                            <div className="beer-info">
                                <p className="title-beer">{beer.name}</p>
                                <p className="tagline-beer">{beer.tagline}</p>
                                <p className="created-beer">Created by: <br></br><span className="name-creater">{beer.name}</span></p>
                            </div>
                            <Outlet />
                        </div>
                );   
            })} 
        </div>
    )
}