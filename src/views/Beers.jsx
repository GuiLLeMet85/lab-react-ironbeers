import React, {useState, useEffect} from 'react'
import axios from "axios";
import {Link, Navigate, Outlet, useNavigate, useParams} from "react-router-dom"


export default function Beers(){

    const [beers, setBeers]= useState([{}]);
    const navigate = useNavigate();

    const { id }  = useParams();

    useEffect(() => {
        const getData = async () => {
          try {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/`);
            setBeers(response.data);
          } catch (error) {
            console.error(error)
          }
        }
        getData();
      }, [id])


      const handleDelete = async () => {
        try {
          await axios.delete(`https://ih-beers-api2.herokuapp.com/beers/${id}`);
          navigate('/beers');
        } 
        catch (error) {
          console.error(error)
        }
      }


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
                                <button onClick= {handleDelete}>Delete</button>
                            </div>
                        
                            <Outlet />
                        </div>
                );   
            })} 
        </div>
    )
}