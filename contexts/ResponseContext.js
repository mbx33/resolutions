// create a new context to hold the responses from the user inputs
import React, { useContext, useState, useEffect } from 'react';
import { useUser, useSupabaseClient, useSession } from '@supabase/auth-helpers-react';

const ResponseContext = React.createContext();

export function useResponse() {
	return useContext(ResponseContext);
}

export function ResponseProvider({ children }) {
	if (ResponseContext === undefined) {
		throw new Error('useResponse() must be used inside a ResponseProvider');
	}
	const supabase = useSupabaseClient();
	const user = useUser();

	// State for last year responses
	const [userResponses, setUserResponses] = useState({
		// ly_branch_one
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
		// ly_branch_two
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
		// ly_branch_three
		bestMoments: '',
		biggestAch: '',
		how: '',
		who: '',
		challenges: '',
		overcame: '',
		learned: '',
		// ly_branch_four
		forgiveness: '',
		release: '',
		wordOne: '',
		wordTwo: '',
		wordThree: '',
		movieTitle: '',
		goodbye: '',
	});

	// State for new year responses
	const [newYearResponses, setNewYearResponses] = useState({
		// ny_branch_one
		dreams: '',
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

		// ny_branch_two
		love: '',
		letGo: '',
		achieve: '',
		support: '',
		try: '',
		sayNo: '',
		comfort: '',
		morning: '',
		indulge: '',
		visit: '',
		relationships: '',
		gifts: '',

		// ny_branch_three
		procrastinate: '',
		energy: '',
		bravest: '',
		sayYes: '',
		advise: '',
		special: '',
		nyWord: '',
		secretWish: '',
		signature: '',
		date: '',
	});

	// handle change for last year responses
	const handleChange = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setUserResponses({ ...userResponses, [name]: value });
	};

	// handle change for new year responses
	const handleNyChange = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setNewYearResponses({ ...newYearResponses, [name]: value });
	};

	function uploadLastYear(e) {
		e.preventDefault();
		uploadBranchOne();
		uploadBranchTwo();
		uploadBranchThree();
		uploadBranchFour();
	}

	function uploadNewYear(e) {
		e.preventDefault();
		uploadNyBranchOne();
		uploadNyBranchTwo();
		uploadNyBranchThree();
	}

	function uploadAll(e) {
		e.preventDefault();
		uploadBranchOne();
		uploadBranchTwo();
		uploadBranchThree();
		uploadBranchFour();
		uploadNyBranchOne();
		uploadNyBranchTwo();
		uploadNyBranchThree();
	}

	//upload user responses to database
	async function uploadBranchOne() {
		const { data: response, error } = await supabase.from('ly_branch_one').insert([
			{
				id: user.id,
				list: userResponses.list,
				family: userResponses.family,
				material: userResponses.material,
				friends: userResponses.friends,
				intellectual: userResponses.intellectual,
				financial: userResponses.financial,
				work_study: userResponses.workStudy,
				vacation_hobby: userResponses.vacationHobby,
				health_sport: userResponses.healthSport,
				emotional: userResponses.emotional,
				achievements: userResponses.achievements,
			},
		]);
		console.log(response);
		console.log(error);
	}

	async function uploadBranchTwo() {
		const { data: response, error } = await supabase.from('ly_branch_two').insert([
			{
				id: user.id,
				smartest: userResponses.smartest,
				biggest: userResponses.biggest,
				risk: userResponses.risk,
				surprise: userResponses.surprise,
				others: userResponses.others,
				completed: userResponses.completed,
				proud: userResponses.proud,
				influenced_you: userResponses.influencedYou,
				you_influenced: userResponses.youInfluenced,
				unable: userResponses.unable,
				discovered: userResponses.discovered,
				grateful: userResponses.grateful,
			},
		]);
		console.log(response);
		console.log(error);
	}

	async function uploadBranchThree() {
		const { data: response, error } = await supabase.from('ly_branch_three').insert([
			{
				id: user.id,
				best_moments: userResponses.bestMoments,
				biggest_ach: userResponses.biggestAch,
				how: userResponses.how,
				who: userResponses.who,
				challenges: userResponses.challenges,
				overcame: userResponses.overcame,
				learned: userResponses.learned,
			},
		]);
		console.log(response);
		console.log(error);
	}

	async function uploadBranchFour() {
		const { data: response, error } = await supabase.from('ly_branch_four').insert([
			{
				id: user.id,
				forgiveness: userResponses.forgiveness,
				release: userResponses.release,
				word_one: userResponses.wordOne,
				word_two: userResponses.wordTwo,
				word_three: userResponses.wordThree,
				movie_title: userResponses.movieTitle,
				goodbye: userResponses.goodbye,
			},
		]);
		console.log(response);
		console.log(error);
	}

	//upload user New Year responses to database
	async function uploadNyBranchOne() {
		const { data: response, error } = await supabase.from('ny_branch_one').insert([
			{
				id: user.id,
				dreams: newYearResponses.dreams,
				family: newYearResponses.family,
				material: newYearResponses.material,
				friends: newYearResponses.friends,
				intellectual: newYearResponses.intellectual,
				financial: newYearResponses.financial,
				work_study: newYearResponses.workStudy,
				vacation_hobby: newYearResponses.vacationHobby,
				health_sport: newYearResponses.healthSport,
				emotional: newYearResponses.emotional,
				achievements: newYearResponses.achievements,
			},
		]);
		console.log(response);
		console.log(error);
	}

	async function uploadNyBranchTwo() {
		const { data: response, error } = await supabase.from('ny_branch_two').insert([
			{
				id: user.id,
				love: newYearResponses.love,
				let_go: newYearResponses.letGo,
				achieve: newYearResponses.achieve,
				support: newYearResponses.support,
				try: newYearResponses.try,
				say_no: newYearResponses.sayNo,
				comfort: newYearResponses.comfort,
				morning: newYearResponses.morning,
				indulge: newYearResponses.indulge,
				visit: newYearResponses.visit,
				relationships: newYearResponses.relationships,
				gifts: newYearResponses.gifts,
			},
		]);
		console.log(response);
		console.log(error);
	}

	async function uploadNyBranchThree() {
		const { data: response, error } = await supabase.from('ny_branch_three').insert([
			{
				id: user.id,
				procrastinate: newYearResponses.procrastinate,
				energy: newYearResponses.energy,
				bravest: newYearResponses.bravest,
				say_yes: newYearResponses.sayYes,
				advise: newYearResponses.advise,
				special: newYearResponses.special,
				ny_word: newYearResponses.nyWord,
				secret_wish: newYearResponses.secretWish,
				signature: newYearResponses.signature,
				date: newYearResponses.date,
			},
		]);
		console.log(response);
		console.log(error);
	}

	const value = {
		userResponses,
		newYearResponses,
		handleNyChange,
		handleChange,
		uploadAll,
		uploadLastYear,
		uploadNewYear,
	};

	return <ResponseContext.Provider value={value}>{children}</ResponseContext.Provider>;
}
