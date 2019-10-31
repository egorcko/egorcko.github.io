import React, {Component} from 'react';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import People from "Pages/People";
import SwapiService from '../../services/swapi-service';
import {SwapiServiceProvider} from '../swapi-service-context';

import './App.scss';

export default class App extends Component {

   swapiService = new SwapiService();
   
   render() {
   	return (
         <SwapiServiceProvider value={this.swapiService}>
            <div className="container">
               <Header />
               <RandomPlanet />
               <People/>
            </div>
         </SwapiServiceProvider>
      )
   }
};