import React, {Component} from 'react';

import './NewItemInput.scss';

export default class NewItemInput extends Component {
   state = {
      newItemLabel: ''
   }
   onLabelChange = ({target}) => {
      this.setState({
         newItemLabel: target.value
      });
   }
   onSubmit = e => {
      e.preventDefault();
      this.props.onAddItem(this.state.newItemLabel);
      this.setState({
         newItemLabel: ''
      })
   }
   render() {
      return(
         <form 
            className="new-item-input"
            onSubmit={this.onSubmit}>
            <input 
               type="text" 
               className="form-control" 
               placeholder="New item" 
               onChange={ this.onLabelChange }
               value={this.state.newItemLabel}/>
            <button 
               type="submit"
               className="btn btn-outline-primary new-item-input__btn">
               <i className="fa fa-plus"></i>
            </button>
         </form>
      )
   }
};