import React from 'react';

import {ItemDetails, ItemProp} from '../ItemDetails';
import {SwapiServiceConsumer} from '../swapi-service-context';

const PersonDetails = ({itemId}) => {
   return (
      <SwapiServiceConsumer>
         {
            ({getPerson, getPersonImage}) => {
               return (
                  <ItemDetails 
                     itemId={itemId}
                     getData={getPerson}
                     getImageUrl={getPersonImage} >
                        <ItemProp field="gender" label="Gender"/>
                        <ItemProp field="eyeColor" label="Eye color"/>
                  </ItemDetails>
               )
            }
         }
      </SwapiServiceConsumer>
   )
};

export default PersonDetails;