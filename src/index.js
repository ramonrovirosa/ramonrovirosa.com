import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//Import Redux Store
import store from './js/Redux/store';

//Import react router
import router from './router';

//Import css
import './css/index.css';

ReactDOM.render(
    <Provider store={store}>{router}</Provider>,
    document.getElementById('root')
);
