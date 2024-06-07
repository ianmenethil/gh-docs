// F:\ZenDocs\docusaurus-2\src\CoreLogic.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PaymentPlugin from './pages/PaymentPlugin';

import './css/base.css';
import './css/components.css';
import './css/layout.css';

function App() {
	return (
		<Router>
			<div>
				<Switch>
					<Route path="/" component={PaymentPlugin} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
