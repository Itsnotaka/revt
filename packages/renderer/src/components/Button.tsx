import React, { useState } from 'react';

export default function Button() {
	const [count, setCount] = useState<number>(0);
	return (
		<button
			onClick={() => {
				setCount(count + 1);
			}}
		>
			Count: {count}
		</button>
	);
}
