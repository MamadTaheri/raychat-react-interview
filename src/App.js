import React from 'react';
import Statistic from './components/Statistic';

// components
import Topbar from './components/Topbar' 

const App = () => {
  return (
    <div className="container-fluid px-md-5"> 
        <Topbar />

        <Statistic />

    </div>
  );
};

export default App;