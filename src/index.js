import React from 'react';
import { render } from 'react-dom'
import App from './App';
import About from './Components/Pages/About'
import Links from './Components/Pages/Links'
import Home from './Components/Pages/Home'
import Photos from './Components/Pages/Photos'
import './index.css';

import { Router, Route, browserHistory, IndexRoute } from 'react-router'

render(
  	<Router history={browserHistory}>
    	<Route path="/" component={App}>
    		<IndexRoute component={Home} />
    		<Route path="About" component={About} />
    		<Route path="Links" component={Links} />
    		<Route path="Photos" component={Photos} />
    	</Route>
  	</Router>
	,document.getElementById('root'))
