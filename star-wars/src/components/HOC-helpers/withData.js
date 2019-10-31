import React, { Component } from 'react';

import Spinner from '../Spinner';

const withData = (View) => {
   return class extends Component {
      state = {
         dataList: null
      }

      componentDidMount() {
         this.props.getData()
            .then(dataList => {
               this.setState({
                  dataList
               })
            })
      }

      render() {
         const {dataList} = this.state;

         if (!dataList) {
            return <Spinner/>;
         }

         return <View {...this.props} data={dataList} />
      }
   }
}

export default withData;