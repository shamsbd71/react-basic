import 'bulma/css/bulma.min.css';
import 'font-awesome/css/font-awesome.min.css';

import React from 'react';
import { render } from 'react-dom';
import App from './Components/App';
import Js from './Js';

//render(<Js items={['Apple', 'Banana', 'Cranberry']} />, document.getElementById('content-wrapper'));
render(<App />, document.getElementById('content-wrapper'));
