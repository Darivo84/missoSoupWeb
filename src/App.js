import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './keycloak';

import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import { ReactKeycloakProvider } from '@react-keycloak/web';
// import keycloak from './keycloak';

// Page Components
// import Home from './pages/Home';
// import Customers from './pages/Customers';
// import Business from './pages/Business';
// import Developers from './pages/Developers';
// import Documentation from './pages/Documentation';

// Protected Route
// import { PrivateRoute } from './utilities/PrivateRoute';
// import Dashboard from './pages/dashboard/Dashboard';
import { AppRouter } from './components/AppRouter';

function App() {
  // const [, initialized] = useKeycloak();
  // if (!initialized) {
  //   return <h3>Loading ... !!!</h3>;
  // }

  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <AppRouter />
      {/* <Router> */}
      {/* <Switch> */}
      {/* <Route exact path="/" component={Home} />
          <Route path="/customers" component={Customers} />
          <Route path="/business" component={Business} />
          <Route path="/developers" component={Developers} />
          <Route path="/docs" component={Documentation} />
          <Route path="/dashboard" component={Dashboard} /> */}
      {/* <PrivateRoute
          roles={['RealmAdmin']}
          path="/dashboard"
          component={Dashboard}
        /> */}
      {/* </Switch> */}
      {/* </Router> */}
    </ReactKeycloakProvider>
  );
}

export default App;
