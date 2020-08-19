import React from 'react';
import Auth from './auth/Auth'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './@scaffold/layouts/Layout';
import HomeComponent from './components/HomeComponent';
import TodosComponent from './components/TodosComponent';
import UsersComponent from './components/UsersComponent';
import LifeCycleComponent from './components/LifeCycle';

function App() {
  return (
    <div className="App">
      <Auth>
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={HomeComponent} />
              <Route exact path="/todos" component={TodosComponent} />
              <Route exact path="/users" component={UsersComponent} />
              <Route exact path="/lifecycle" component={LifeCycleComponent} />
              <Route exact path="/user/:id" component={UsersComponent} />
            </Switch>
          </Router>
        </Layout>
      </Auth>
    </div>
  );
}

export default App;
