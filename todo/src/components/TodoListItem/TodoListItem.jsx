import React, {Component} from 'react';

import './TodoListItem.scss';

export default class TodoListItem extends Component {

   render() {
      const {
         label, 
         onDeleted, 
         onToggleImportant, 
         onToggleDone, 
         important, 
         done
      } = this.props;

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
               onClick={ onToggleDone }>
               {label}
            </span>
            <span>
               <button 
                  className="btn btn-outline-danger todo-list-item__btn"
                  type="button"
                  onClick={onDeleted}>
                  <i className="fa fa-trash"/>
               </button>
               <button 
                  className={btnClassNames}
                  type="button"
                  onClick={ onToggleImportant }>
                  <i className="fa fa-exclamation"/>
               </button>
            </span>
         </span>
      );
   }
};