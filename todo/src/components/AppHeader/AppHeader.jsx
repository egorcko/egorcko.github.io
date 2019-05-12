import React from 'react';

import './AppHeader.scss';

const AppHeader = (props) => {
   return (
      <div className="app-header">
         <h1>My Todo List</h1>
         <span>{props.toDo} more to do, {props.done} done!</span>
      </div>
   )
};

export default AppHeader;