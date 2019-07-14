import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

import './RandomPlanet.scss';

export default class RandomPlanet extends Component {

   swapiService = new SwapiService();

   state = {
      planet: {},
      loading: true
   };

   componentDidMount() {
      this.updatePlanet();
      this.interval = setInterval(this.updatePlanet, 10000);
   }

   componentWillUnmount() {
      clearInterval(this.interval)
   }

   onPlanetLoaded = (planet) => {
      this.setState({
         planet,
         loading: false,
         error: false
      });
   };

   onError = () => {
      this.setState({
         error: true,
         loading: false
      })
   } 

   updatePlanet = () => {
      const id = Math.round(Math.random() * 25) + 2;
      this.swapiService
         .getPlanet(id)
         .then(this.onPlanetLoaded)
         .catch(this.onError);
   }

   render() {
      const {planet, loading, error} = this.state;
      let content = loading ? <Spinner/> : <PlanetView planet={planet}/>;
      if (error) content = <ErrorIndicator/>

      return (
         <div className="random-planet jumbotron rounded">
            { content }
         </div>
      );
   }
}

const PlanetView = ({planet}) => {
   const {
      id, 
      name, 
      population,
      rotationPeriod, 
      diameter 
   } = planet;
   return (
      <React.Fragment>
         <img className="planet-image"
               src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
               alt="img"/>
         <div>
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
               <li className="list-group-item">
                  <span className="term">Population</span>
                  <span>{population}</span>
               </li>
               <li className="list-group-item">
                  <span className="term">Rotation Period</span>
                  <span>{rotationPeriod}</span>
               </li>
               <li className="list-group-item">
                  <span className="term">Diameter</span>
                  <span>{diameter}</span>
               </li>
            </ul>
         </div>
      </React.Fragment>
   )
}


