import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Layout from './@scaffold/layouts/Layout';
import HomeComponent from './components/HomeComponent';
import TodosComponent from './components/TodosComponent';
import UsersComponent from './components/UsersComponent';

function App() {
  return (
    <div className="App">
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={HomeComponent} />
            <Route exact path="/todos" component={TodosComponent} />
            <Route exact path="/users" component={UsersComponent} />
            <Route exact path="/user/:id" component={UsersComponent} />
          </Switch>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
