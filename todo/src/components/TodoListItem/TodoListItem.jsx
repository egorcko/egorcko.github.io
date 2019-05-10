import React, {Component} from 'react';

import './TodoListItem.scss';

export default class TodoListItem extends Component {

   state = {
      done: false,
      important: false
   }

   onLabelClick = () => {
      this.setState(state => {
         return {done: !state.done}
      })
   }

   onMarkImportant = () => {
      this.setState(state => {
         return {important: !state.important}
      });
   }

   render() {
      const {label} = this.props;
      const { done, important } = this.state;

      let classNames = 'todo-list-item';
      let btnClassNames = 'btn btn-outline-success todo-list-item__btn';

      if (done) classNames += ' done';
      if (important) {
         classNames += ' important';
         btnClassNames += ' active'
      }
      
      return (
         <span className={classNames}>
            <span 
               className="todo-list-item__label"
               onClick={this.onLabelClick}>
               {label}
            </span>
            <span>
               <button 
                  className="btn btn-outline-danger todo-list-item__btn"
                  type="button">
                  <i className="fa fa-trash"/>
               </button>
               <button 
                  className={btnClassNames}
                  type="button"
                  onClick={this.onMarkImportant}>
                  <i className="fa fa-exclamation"/>
               </button>
            </span>
         </span>
      );
   }
};