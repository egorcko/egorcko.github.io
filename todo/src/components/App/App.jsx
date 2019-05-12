import React, {Component} from 'react';

import AppHeader from '../AppHeader/AppHeader.jsx';
import SearchPanel from '../SearchPanel/SearchPanel.jsx';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter.jsx';
import TodoList from '../TodoList/TodoList.jsx';
import NewItemInput from '../NewItemInput/NewItemInput.jsx';

import './App.scss';

export default class App extends Component {
   maxId = 100;
   state = {
      todoData: [
         this.createTodoItem('label 1'),
         this.createTodoItem('label 2'),
         this.createTodoItem('label 3'),
      ],
      searchQuery: '',
      filter: 'all'
   }

   getItemById(list, id) {
      return list.find(el => el.id === id);
   }

   createTodoItem(label) {
      return {
         id: this.maxId++,
         label,
         done: false,
         important: false
      }
   }

   deleteItem = id => {
      this.setState(({todoData}) => {
         const deletedEl = this.getItemById(todoData, id);
         const newArray = todoData.filter(el => el.id !== deletedEl.id);

         return {todoData: newArray}
      });
   }

   addNewItem = text => {
      const newItem = this.createTodoItem(text);
      this.setState(({todoData}) => {
         const newArray = [...todoData, newItem];

         return {todoData: newArray}
      });
   }

   toggleProperty(arr, id, propName) {
      let oldItem = this.getItemById(arr, id);
      oldItem[propName] = !oldItem[propName];

      return arr
   }

   onToggleImportant = id => {
      this.setState(({todoData}) => {
         const newArray = this.toggleProperty([...todoData], id, 'important');
         return {todoData: newArray}
      })
   }

   onToggleDone = id => {
      this.setState(({todoData}) => {
         const newArray = this.toggleProperty([...todoData], id, 'done');
         return {todoData: newArray}
      })
   }

   searchInList(array, query) {
      if (!query.length) return array;

      return array.filter(el => el.label.toLowerCase().search(query.toLowerCase()) > -1);
   }

   onSearch = query => {
      this.setState({
         searchQuery: query
      })
   }

   filterArray(array, filter) {
      switch(filter) {
         case 'active':
            return array.filter(el => !el.done);
         case 'done':
            return array.filter(el => el.done);
         default:
            return array;
      }
   }

   onToggleFilter = filter => {
      this.setState({filter})
   }

   render() {
      const { todoData, searchQuery, filter } = this.state;
      const visibleItems = this.filterArray(this.searchInList(todoData, searchQuery), filter);
      const doneCount = todoData.filter(el => el.done).length;
      const todoCount = todoData.length - doneCount;
      
      return (
         <div className="container">
            <AppHeader toDo={todoCount} done={doneCount}/>
            <div className="top-panel">
               <SearchPanel onSearch={ this.onSearch }/>
               <ItemStatusFilter onToggleFilter={ this.onToggleFilter } activeFilter={this.state.filter}/>
            </div>
            
            <TodoList 
               todos={visibleItems} 
               onDeleted={ this.deleteItem }
               onToggleImportant={ this.onToggleImportant }
               onToggleDone={ this.onToggleDone }
            />
            
            <NewItemInput onAddItem={ this.addNewItem } />
         </div>
      )
   }
};