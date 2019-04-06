import React, { Fragment } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronCircleLeft,
  faChevronCircleRight,
  faThermometerQuarter,
  faSun,
  faTint,
} from '@fortawesome/free-solid-svg-icons';
import GlobalStyle from './styles/global';
import Routes from './routes';

library.add(faChevronCircleLeft);
library.add(faChevronCircleRight);

library.add(faThermometerQuarter);
library.add(faSun);
library.add(faTint);

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Routes />
  </Fragment>
);

export default App;
