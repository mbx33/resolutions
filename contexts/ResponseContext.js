// create a new context to hold the responses from the user inputs
import React, { useContext, useState, useEffect } from 'react';

const ResponseContext = React.createContext();

export function useResponse() {
	return useContext(ResponseContext);
}

export function ResponseProvider({ children }) {
	if (ResponseContext === undefined) {
		throw new Error('useResponse() must be used inside a ResponseProvider');
	}

	const [userResponses, setUserResponses] = useState({
		list: '',
		family: '',
		material: '',
		friends: '',
		intellectual: '',
		financial: '',
		workStudy: '',
		vacationHobby: '',
		healthSport: '',
		emotional: '',
		achievements: '',
		smartest: '',
		biggest: '',
		risk: '',
		surprise: '',
		others: '',
		completed: '',
		proud: '',
		influencedYou: '',
		youInfluenced: '',
		unable: '',
		discovered: '',
		grateful: '',
		bestMoments: '',
		biggestAch: '',
		how: '',
		who: '',
		challenges: '',
		overcame: '',
		learned: '',
		forgiveness: '',
		release: '',
		wordOne: '',
		wordTwo: '',
		wordThree: '',
		movieTitle: '',
		goodbye: '',
	});

	const handleChange = (e) => {
		e.preventDefault();
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
