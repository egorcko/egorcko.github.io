import React from 'react';

import {ItemDetails, ItemProp} from '../ItemDetails';
import {SwapiServiceConsumer} from '../swapi-service-context';

const StarshipDetails = ({itemId}) => {
   return (
      <SwapiServiceConsumer>
         {
            ({getStarship, getStarshipImage}) => {
               return (
                  <ItemDetails 
                     itemId={itemId}
                     getData={getStarship}
                     getImageUrl={getStarshipImage} >
                        <ItemProp field="model" label="Model"/>
                        <ItemProp field="length" label="Length"/>
                        <ItemProp field="costInCredits" label="Cost in credits"/>
                  </ItemDetails>
               )
            }
         }
      </SwapiServiceConsumer>
   )
};

export default StarshipDetails;