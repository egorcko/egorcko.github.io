import React from 'react';

import AppHeader from '../AppHeader/AppHeader.jsx';
import SearchPanel from '../SearchPanel/SearchPanel.jsx';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter.jsx';
import TodoList from '../TodoList/TodoList.jsx';

const App = () => {

   const todoData = [
      {id: 1, label: 'label 1'},
      {id: 2, label: 'label 2'},
      {id: 3, label: 'label 3'},
   ];

   return (
      <div className="container">
         <AppHeader toDo={1} done={3}/>
         <div className="top-panel d-flex">
            <SearchPanel/>
            <ItemStatusFilter/>
         </div>
         
         <TodoList todos={todoData} />
      </div>
   )
};

export default App;