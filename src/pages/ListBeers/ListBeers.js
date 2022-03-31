import React from 'react';
import { useState, useEffect, Link } from 'react';
import { Navbar } from '../../components/Navbar';
import axios from 'axios';

export function ListBeers() {
    //variable to hold the beers for us
    const [allBeer, setAllBeers] = useState([])
    
    //useEffect to do an API call
    useEffect(() => {
        //making a request with axios
        axios.get('https://ih-beers-api2.herokuapp.com/beers').then((result) => {
       // console.log(result.data)    
        setAllBeers(result.data)
        })

    })
    return(
        <div className="container">
             <Navbar />

             
             <div className="card" style={{ width: "18rem" }}>
        <img src={} className="card-img-top" alt={} />
        <div className="card-body">
          <h5 class="card-title">Name</h5>
          <p className="card-text">Tagline</p>
          <p className="card-text">Contribution</p>
          <Link to={"/beers"} className="btn btn-primary">
            Yes, take me there!
          </Link>
        </div>
      </div>
        </div>
    ) 
}