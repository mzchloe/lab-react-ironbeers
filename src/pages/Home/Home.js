import React from "react";
import { Link } from "react-router-dom";
import beers from "../../assets/beers.png";
import newBeer from "../../assets/new-beer.png";
import randomBeer from "../../assets/random-beer.png";
//import './Home.css';

export function Home() {
  return (
    <div className="container">

      <div className="card" style={{ width: "18rem" }}>
        <img src={beers} className="card-img-top" alt={beers} />
        <div className="card-body">
          <h5 class="card-title">All Beers</h5>
          <p className="card-text">Want to know what beers we have in store for you?</p>
          <Link to={"/all-beers"} className="btn btn-primary">
            Yes, take me there!
          </Link>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img src={randomBeer} className="card-img-top" alt={randomBeer} />
        <div className="card-body">
          <h5 class="card-title">Random Beer</h5>
          <p className="card-text">Feeling playful today? Let us surprise you with a random beer!</p>
          <Link to={"/all-beers"} className="btn btn-primary">
            I'm ready!
          </Link>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img src={newBeer} className="card-img-top" alt={newBeer} />
        <div className="card-body">
          <h5 class="card-title">New Beer</h5>
          <p className="card-text">Are you thirsty but cannot find the beer your like?
          Then why not create your own?</p>
          <Link to={"/new-beers"} className="btn btn-primary">
            Let's create one!
          </Link>
        </div>
      </div>
    </div>
  );
}
