import React from 'react';

import ItemList from '../ItemList';
import {withData, withChildren} from '../HOC-helpers';
import SwapiService from '../../services/swapi-service';

const swapiService= new SwapiService();
const {
   getAllPeople,
   getAllPlanets,
   getAllStarships
} = swapiService;

const ListWithChildren = withChildren(
   ItemList,
   ({name}) => <span>{name}</span>
)

const PersonList = withData(ListWithChildren, getAllPeople);

const PlanetList = withData(ListWithChildren, getAllPlanets);

const StarshipList = withData(ListWithChildren, getAllStarships);

export {
   PersonList,
   PlanetList,
   StarshipList
}