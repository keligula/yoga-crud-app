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
      <div className="container">
        <NavBar />
        <Route exact path="/" component={Landing} />
        <Route path="/practice/add" component={CreatePractice} />
        <Route path="/practice/list" component={ViewPractices} />
        <Route path="/practice/calculate" component={Calculate} />
      </div>
    </BrowserRouter>
  );
};

export default App;
