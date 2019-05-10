import React from 'react';

import TodoListItem from '../TodoListItem/TodoListItem.jsx';

import './TodoList.scss';

const TodoList = (props) => {
   const elements = props.todos.map(item => {
      const {id, ...itemProps} = item;
      return (
         <li key={id} className="list-group-item todo-list__item">
            <TodoListItem {...itemProps}/>
         </li>
      )
   });
   return (
      <ul className="list-group todo-list">
         {elements}
      </ul>
   )
};

export default TodoList;
