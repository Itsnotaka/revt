import React from 'react';
import ReactDOM from 'react-dom';
import Home from '.';

ReactDOM.render(
	<>
		<head>
			<title>Revt</title>
		</head>
		<React.StrictMode>
			<Home />
		</React.StrictMode>
	</>,

	document.getElementById('app'),
);
