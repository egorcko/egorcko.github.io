import React from 'react';

import {ItemDetails, ItemProp} from '../ItemDetails';
import {withSwapiService} from '../HOC-helpers';

const StarshipDetails = (props) => {
   return (
      <ItemDetails {...props}>
            <ItemProp field="model" label="Model"/>
            <ItemProp field="length" label="Length"/>
            <ItemProp field="costInCredits" label="Cost in credits"/>
      </ItemDetails>
   )
};

const mapMethodsToProps = (swapiService) => {
   return {
      getData: swapiService.getStarship,
      getImageUrl: swapiService.getStarshipImage
   }
}

export default withSwapiService(StarshipDetails, mapMethodsToProps);