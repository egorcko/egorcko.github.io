import React, { Component } from 'react';

import './ItemStatusFilter.scss';

export default class ItemStatusFilter extends Component {
   buttons = [
      {name: 'all', label: 'All'},
      {name: 'done', label: 'Done'},
      {name: 'active', label: 'Active'}
   ]
   render() {
      const renderedButtons = this.buttons.map(({name, label}) => {
         const isActive = this.props.activeFilter === name;
         const className = isActive ? 'btn-info' : 'btn-outline-secondary';

         return (
            <button
               type="button"
               className={`btn ${className}`}
               onClick={ () => this.props.onToggleFilter(name) }
               key={name}>
               {label}
            </button>
         )
      });
      return(
         <div className="btn-group filter-buttons">
            {renderedButtons}
         </div>
      )
   }
};