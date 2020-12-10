import React, { useEffect } from 'react';
import Auth from './auth/Auth'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import Layout from './@scaffold/layouts/Layout';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import TodosComponent from './components/TodosComponent';
import UsersComponent from './components/UsersComponent';
import LifeCycleComponent from './components/LifeCycle';

import firebase from 'firebase/app'
import '@firebase/messaging'

function App() {

  useEffect(() => {
    if (!firebase.apps.length) {
      return;
    }

    const messaging = firebase.messaging()
    messaging.requestPermission()
      .then(() => {
        return messaging.getToken()
      })
      .then((token) => {
        console.log("Firebase token: ", token)
      })
      .catch((error) => {
        console.log("Firebase token error: ", error)
      })

    navigator.serviceWorker.addEventListener("message", (message) => console.log(message));

    messaging.onMessage((payload) => {
      console.log("OnMessage: ", payload)
    })

  }, [])

  return (
    <div className="App">
      <h2>Welcome to my App</h2>
      <a href="">learn react</a>
      <Provider store={store}>
        <Auth>
          <Layout>
            <Router>
              <Switch>
                <Route exact path="/" component={HomeComponent} />
                <Route exact path="/about" component={AboutComponent} />
                <Route exact path="/todos" component={TodosComponent} />
                <Route exact path="/users" component={UsersComponent} />
                <Route exact path="/lifecycle" component={LifeCycleComponent} />
                <Route exact path="/user/:id" component={UsersComponent} />
              </Switch>
            </Router>
          </Layout>
        </Auth>
      </Provider>
    </div>
  );
}

export default App;
