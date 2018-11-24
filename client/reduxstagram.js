import React from 'react';
import { render } from 'react-dom';

// Import css
import './styles/style.styl';

// Import components
import Main from './components/Main';

render(<Main />, document.querySelector('[data-js="app"]'));
