import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useState, useEffect} from 'react';
import { Navbar } from '../../components/Navbar';

import './ListBeers.css';

export function ListBeers() {
    //variable to hold the beers for us
    const [allBeers, setAllBeers] = useState([])
    
    //useEffect to do an API call
    useEffect(() => {
      
        const getAllBeers = async () => {
        const beersFromAPI = await axios.get('https://ih-beers-api2.herokuapp.com/beers');   
          setAllBeers(beersFromAPI.data)
          };
      getAllBeers();

    }, []);

    return(
        <div className="beers-container">
             <Navbar />
    {allBeers.map((beer) => {
      return (
        <div key={beer._id} lassName="card mb-3 beers-card" style={{maxwidth: '540px'}}>
  <div className="row g-0">
    <div className="col-md-4">
    <Link to={`/beers/${beer._id}`} className="beer-details-link">
     <img src={beer.image_url} 
      alt={beer.name} 
      className="img-fluid rounded-start beer-img" 
      style={{minwidth: '20vw', height: '25vh'}}/>
      </Link>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h1 className="card-title">
        <Link to={`/beers/${beer._id}`} className="beer-details-link">
        {beer.name}</Link></h1>
        <h3 className="card-text">{beer.tagline}</h3>
        <p className="card-text"><b>Created by: {beer.contributed_by}{" "}</b></p>
      </div>
    </div>
  </div>
</div>
      )
    })}
        </div>
    ) 
}