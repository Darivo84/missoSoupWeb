import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// import Keycloak from 'keycloak-js';

//Get the keycloak configuration
// let keycloak = Keycloak('./resources/keycloak.json');

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//Initialization of the keycloak instance
// keycloak
//   .init({ onLoad: 'login-required' })
//   .success((authenticated) => {
//     if (!authenticated) {
//       window.location.reload();
//     } else {
//       console.info('Authenticated');
//     }

//React Render on authentication
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//store authentication tokens in sessionStorage for usage in app
// sessionStorage.setItem('authentication', keycloak.token);
// sessionStorage.setItem('refreshToken', keycloak.refreshToken);

//to regenerate token on expiry
//   setTimeout(() => {
//     keycloak
//       .updateToken(70)
//       .success((refreshed) => {
//         if (refreshed) {
//           console.debug('Token refreshed' + refreshed);
//         } else {
//           console.warn(
//             'Token not refreshed, valid for ' +
//               Math.round(
//                 keycloak.tokenParsed.exp +
//                   keycloak.timeSkew -
//                   new Date().getTime() / 1000
//               ) +
//               ' seconds'
//           );
//         }
//       })
//       .error(() => {
//         console.error('Failed to refresh token');
//       });
//   }, 60000);
// })
// .error(() => {
//   console.error('Authenticated Failed');
// });
