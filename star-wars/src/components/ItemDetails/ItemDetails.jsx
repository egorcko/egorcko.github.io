import React, { Component } from 'react';

import Spinner from '../Spinner'

import './ItemDetails.scss';

const ItemProp = ({item, field, label}) => {
   return (
      <li className="list-group-item">
         <span className="term">{label}</span>
         <span>{item[field]}</span>
      </li>
   )
}

export {
   ItemProp
}

export default class ItemDetails extends Component {

   state = {
      item: null,
      loading: false,
      image: null
   }

   componentDidMount() {
      this.updateItem()
   }

   componentDidUpdate(prevProps) {
      if (this.props.itemId !== prevProps.itemId) {
         this.updateItem()
      }
   }

   updateItem() {
      const {itemId, getData, getImageUrl} = this.props;
      if (!itemId) return;
      this.setState({
         loading: true
      })
      getData(itemId)
         .then(item => {
            this.setState({
               item,
               loading: false,
               image: getImageUrl(item)
            })
         })
   }

   render() {
      const {item, image} = this.state;
      let content = item ? 
         <ItemDetailsView 
            item={item} 
            image={image} >
               {this.props.children}
         </ItemDetailsView> 
         : <span>Select item from list</span>
      
      if (this.state.loading) {
         content = <Spinner/>
      }
      
      return (
         <div className="item-details card">
            {content}
         </div>
      )
   }
}

const ItemDetailsView = (props) => {
   const {item, image, children} = props;
   return (
      <React.Fragment>
         <img className="item-image"
            src={image}
            alt="img" />

         <div className="card-body">
            <h4>{item.name}</h4>
            <ul className="list-group list-group-flush">
               {
                  React.Children.map(children, child => {
                     return React.cloneElement(child, { item } )
                  })
               }
            </ul>
         </div>
      </React.Fragment>
   )
}