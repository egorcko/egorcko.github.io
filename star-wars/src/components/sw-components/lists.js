import React from 'react';

import ItemList from '../ItemList';
import {withData, withChildren, withSwapiService} from '../HOC-helpers';

const ListWithChildren = withChildren(
   ItemList,
   ({name}) => <span>{name}</span>
)

const mapPersonMethodsToProps = (swapiService) => {
   return {
      getData: swapiService.getAllPeople
   }
}
const mapPlanetMethodsToProps = (swapiService) => {
   return {
      getData: swapiService.getAllPlanets
   }
}
const mapStarshipMethodsToProps = (swapiService) => {
   return {
      getData: swapiService.getAllStarships
   }
}

const PersonList = withSwapiService(
                     withData(ListWithChildren),
                     mapPersonMethodsToProps
                  );

const PlanetList = withSwapiService(
                     withData(ListWithChildren),
                     mapPlanetMethodsToProps
                  );

const StarshipList = withSwapiService(
                        withData(ListWithChildren),
                        mapStarshipMethodsToProps
                     );

export {
   PersonList,
   PlanetList,
   StarshipList
}