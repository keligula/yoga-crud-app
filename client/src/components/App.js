import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import NavBar from './NavBar';
import CreatePractice from './CreatePractice';
import ViewPractices from './ViewPractices';
import Calculate from './Calculate';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={NavBar} />
          <Route path="/practice/add" component={CreatePractice} />
          <Route path="/practice/list" component={ViewPractices} />
          <Route path="/practice/calculate" component={Calculate} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
