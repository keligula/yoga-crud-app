import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import NavBar from './NavBar';
import Landing from './Landing';
import CreatePractice from './CreatePractice';
import ViewPractices from './ViewPractices';
import Calculate from './Calculate';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Route exact path="/" component={Landing} />
        <Route path="/practices/add" component={CreatePractice} />
        <Route path="/practices" component={ViewPractices} />
        <Route path="/calculate" component={Calculate} />
      </div>
    </BrowserRouter>
  );
};

export default App;
