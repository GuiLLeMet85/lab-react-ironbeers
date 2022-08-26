import React, {useEffect, useState} from "react";
import beersPicture from "../assets/beers.png";
import NewBeerPicture from "../assets/new-beer.png";
import RandomBeerPicture from "../assets/random-beer.png";
import { Link, Outlet } from "react-router-dom";

export default function Home() {
    return (
        <div className="home-section">

            <div className="sections">
                <img src={beersPicture} alt="beers-bottles" />
                <div className="info-section">
                <Link to="/beers"> <h2>All Beers</h2></Link> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum ut mauris id eleifend. Ut ac hendrerit turpis, a facilisis magna. Donec eget malesuada nibh, sit amet fringilla </p>
                </div>
          

            </div>
            <div className="sections">
                <img src={NewBeerPicture} alt="beers-bottles" />
                <div className="info-section">
                      <Link to="/random-beer"><h2>Random Beer</h2></Link>
                    <p>lacinia. Nunc eleifend lobortis egestas. Morbi fringilla cursus turpis in rutrum. Ut ultrices ultrices magna et consequat. Quisque at tincidunt dolor. Sed at lectus dapibusd</p>
                </div>

            </div>
            <div className="sections">
                <img src={RandomBeerPicture} alt="beers-bottles" />
                <div className="info-section">
                <Link to="/new-beer"><h2>New Beer</h2></Link>
                    <p>Sed dictum non sem vitae bibendum. Donec venenatis metus vitae odio efficitur, vitae dictum lacus fringilla. Integer ut dui id metus tempor tempus finibus at augue. </p>
                </div>
            </div>

        </div>
    )
}

