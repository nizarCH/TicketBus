import React from 'react';
import loaderGif from '../images/loading.gif'
const Loading = () => {
  return (
    <div className="loading-container">
        <div className="loader">
              <img src={loaderGif}/>
              <h1>Loading...</h1>
        </div>
    </div>
  );
};

export default Loading;
