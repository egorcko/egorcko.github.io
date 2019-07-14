import React from 'react';

import {ItemDetails, ItemProp} from '../ItemDetails';
import {SwapiServiceConsumer} from '../swapi-service-context';

const PlanetDetails = ({itemId}) => {
   return (
      <SwapiServiceConsumer>
         {
            ({getPlanet, getPlanetImage}) => {
               return (
                  <ItemDetails 
                     itemId={itemId}
                     getData={getPlanet}
                     getImageUrl={getPlanetImage} >
                        <ItemProp field="population" label="Population"/>
                        <ItemProp field="rotationPeriod" label="Rotation period"/>
                        <ItemProp field="diameter" label="Diameter"/>
                  </ItemDetails>
               )
            }
         }
      </SwapiServiceConsumer>
   )
};

export default PlanetDetails;