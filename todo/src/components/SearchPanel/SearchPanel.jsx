import React, {Component} from 'react';

export default class SearchPanel extends Component {
   state = {
      searchQuery: ''
   }
   onSearchInput = ({target}) => {
      const query = target.value;
      this.setState({searchQuery: query})
      this.props.onSearch(query);
   }
   render() {
      return <input 
               type="text"
               placeholder="Search"
               className="form-control"
               onChange={ this.onSearchInput }
               value={this.state.searchQuery}/>
   }
};
