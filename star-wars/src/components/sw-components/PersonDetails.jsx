import React from 'react';

import {ItemDetails, ItemProp} from '../ItemDetails';
import {withSwapiService} from '../HOC-helpers';

const PersonDetails = (props) => {
   return (
      <ItemDetails {...props}>
            <ItemProp field="gender" label="Gender"/>
            <ItemProp field="eyeColor" label="Eye color"/>
      </ItemDetails>
   )
};

const mapMethodsToProps = (swapiService) => {
   return {
      getData: swapiService.getPerson,
      getImageUrl: swapiService.getPersonImage
   }
}

export default withSwapiService(PersonDetails, mapMethodsToProps);