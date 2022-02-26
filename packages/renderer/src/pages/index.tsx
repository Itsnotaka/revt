import React from 'react';
import Button from '../components/Button';

const Home = () => {
	return (
		<>
			<p>hello from react</p>
			<p>Version: {window.revt.version}</p>
			<p>
				Typesafe Version:
				{window.nodeCrypto.sha256sum(window.yerba.version.toString())}
			</p>
			<span>Click Me!</span>
			<Button />
		</>
	);
};

export default Home;
