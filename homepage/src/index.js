import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BasicExample from './BasicExample';
import registerServiceWorker from './registerServiceWorker';
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


