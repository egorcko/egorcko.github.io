import React from 'react';

import {ItemDetails, ItemProp} from '../ItemDetails';
import {withSwapiService} from '../HOC-helpers';

const PlanetDetails = (props) => {
   return (
      <ItemDetails {...props}>
            <ItemProp field="population" label="Population"/>
            <ItemProp field="rotationPeriod" label="Rotation period"/>
            <ItemProp field="diameter" label="Diameter"/>
      </ItemDetails>
   )
};

const mapMethodsToProps = (swapiService) => {
   return {
      getData: swapiService.getPlanet,
      getImageUrl: swapiService.getPlanetImage
   }
}

export default withSwapiService(PlanetDetails, mapMethodsToProps);