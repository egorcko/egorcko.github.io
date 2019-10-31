import React, { Component } from 'react';

import {PersonDetails, PersonList} from 'Components/sw-components';
import { Row } from 'Containers';
import ErrorIndicator from 'Components/ErrorIndicator';

export default class People extends Component {
   state = {
      selectedItem: null,
      hasError: false
   }

   componentDidCatch() {
      this.setState({
         hasError: true
      })
   }

   onItemSelected = (id) => {
      this.setState({
         selectedItem: id
      })
   }

   render() {
      if (this.state.hasError) {
         return <ErrorIndicator/>
      }

      return (
         <Row 
            left={
               <PersonList onItemSelected={this.onItemSelected} />
            }
            right={
               <PersonDetails itemId={this.state.selectedItem} />
            }
         />
      )
   }
}