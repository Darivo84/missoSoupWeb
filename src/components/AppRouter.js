import { useKeycloak } from '@react-keycloak/web';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Page Components
import Home from '../pages/Home';
import Customers from '../pages/Customers';
import Business from '../pages/Business';
import Developers from '../pages/Developers';
import Documentation from '../pages/Documentation';
import { PrivateRoute } from '../utilities/PrivateRoute';
import Dashboard from '../pages/dashboard/Dashboard';

export const AppRouter = () => {
  const [, initialized] = useKeycloak();
  if (!initialized) {
    return <h3>Loading ... !!!</h3>;
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/customers" component={Customers} />
        <Route path="/business" component={Business} />
        <Route path="/developers" component={Developers} />
        <Route path="/docs" component={Documentation} />
        <PrivateRoute
          roles={['RealmAdmin']}
          path="/dashboard"
          component={Dashboard}
        />
      </Switch>
    </Router>
  );
};
