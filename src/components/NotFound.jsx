import React from 'react';
import { withRouter } from 'react-router-dom';


function NotFound() {

  return (
    <div className='container'>
      <h2>Unfortunately, there is no cocktail that matches your search.</h2>
      <h3>Please try again.</h3>
    </div>
  );
}

export default withRouter(NotFound);