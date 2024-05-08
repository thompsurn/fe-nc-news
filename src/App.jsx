// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Route exact path="/" component={ArticleList} />
        <Route path="/articles/:id" component={ArticleDetail} />
      </div>
    </Router>
  );
};

export default App;