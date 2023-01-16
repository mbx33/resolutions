// create a new context to hold the responses from the user inputs
import React, { useContext, useState, useEffect } from 'react';

const ResponseContext = React.createContext();

export function useResponse() {
	return useContext(ResponseContext);
}

export function ResponseProvider({ children }) {
	const [userResponses, setUserResponses] = useState({
		list: '',
		family: '',
		material: '',
		friends: '',
		intellectual: '',
		financial: '',
		work_study: '',
		vacation_hobby: '',
		health_sport: '',
		emotional: '',
		achievements: '',
		smartest: '',
		biggest: '',
		risk: '',
		surprise: '',
		others: '',
		completed: '',
		proud: '',
		influenced_you: '',
		you_influenced: '',
		unable: '',
		discovered: '',
		grateful: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserResponses({ ...userResponses, [name]: value });
		console.log(userResponses);
	};

	const value = {
		userResponses,
		handleChange,
	};

	return <ResponseContext.Provider value={value}>{children}</ResponseContext.Provider>;
}
