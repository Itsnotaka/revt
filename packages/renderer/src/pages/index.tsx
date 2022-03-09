import React from 'react';
import Button from '../components/Button';

const Home = () => {
	return (
		<>
			<p className="font-bold">hello from react</p>
			<p>Version: {window.revt.version}</p>
			<span>Click Me!</span>
			<Button />
		</>
	);
};

export default Home;
