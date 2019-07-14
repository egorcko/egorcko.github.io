import React, { Component } from 'react';

import {PersonDetails, PersonList} from '../sw-components';
import ErrorIndicator from '../ErrorIndicator';

import './PeoplePage.scss';

const Row = ({left, right}) => {
   return (
      <div className="row mb2">
         <div className="col-md-6">
            {left}
         </div>
         <div className="col-md-6">
            {right}
         </div>
      </div>
   )
}

export default class PeoplePage extends Component {
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

      const itemList = (
         <PersonList onItemSelected={this.onItemSelected} />
      )

      const itemDetails = (
         <PersonDetails itemId={this.state.selectedItem} />
      )

      return (
         <Row 
            left={itemList}
            right={itemDetails}
         />
      )
   }
}