import React from 'react';

const withChildren = (Wrapped, fn) => {
   return (props) => {
      return (
         <Wrapped {...props}>
            {fn}
         </Wrapped>
      )
   }
}

export default withChildren;