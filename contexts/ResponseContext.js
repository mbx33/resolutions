// create a new context to hold the responses from the user inputs
import React, { useContext, useState, useEffect, useCallback } from 'react';
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
	const session = useSession();
	const [isLastSaved, setIsLastSaved] = useState(false);
	const [isNewSaved, setIsNewSaved] = useState(false);

	// State for last year responses
	const [userResponses, setUserResponses] = useState({
		// ly_branch_one
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
		// ly_branch_two
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
		// ly_branch_three
		best_moments: '',
		biggest_ach: '',
		how: '',
		who: '',
		challenges: '',
		overcame: '',
		learned: '',
		// ly_branch_four
		forgiveness: '',
		release: '',
		word_one: '',
		word_two: '',
		word_three: '',
		movie_title: '',
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
		work_study: '',
		vacation_hobby: '',
		health_sport: '',
		emotional: '',
		achievements: '',

		// ny_branch_two
		love: '',
		let_go: '',
		achieve: '',
		support: '',
		try: '',
		say_no: '',
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
		say_yes: '',
		advise: '',
		special: '',
		ny_word: '',
		secret_wish: '',
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

	async function uploadLastYear(e) {
		e.preventDefault();

		try {
			uploadBranchOne();
			uploadBranchTwo();
			uploadBranchThree();
			uploadBranchFour();
			setIsLastSaved(true);
		} catch (error) {
			console.log(error, 'error saving last year responses');
		}
	}

	async function uploadNewYear(e) {
		e.stopPropagation();
		e.preventDefault();
		try {
			uploadNyBranchOne();
			uploadNyBranchTwo();
			uploadNyBranchThree();
			setIsNewSaved(true);
		} catch (error) {
			console.log(error, 'error saving new year responses');
		}
	}

	// update user responses in database
	async function updateResponses(e, table, column, response) {
		e.preventDefault();
		console.log(table, column, response);

		const { data, error } = await supabase
			.from(table)
			//update the column with the response
			.update({
				[column]: response,
			})
			.eq('id', user.id)
			//where the id matches the user id
			.select();

		if (error) {
			console.log(error);
		}
		if (data) {
			console.log(data);
		}
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
				work_study: userResponses.work_study,
				vacation_hobby: userResponses.vacation_hobby,
				health_sport: userResponses.health_sport,
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
				influenced_you: userResponses.influenced_you,
				you_influenced: userResponses.you_influenced,
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
				best_moments: userResponses.best_moments,
				biggest_ach: userResponses.biggest_ach,
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
				word_one: userResponses.word_one,
				word_two: userResponses.word_two,
				word_three: userResponses.word_three,
				movie_title: userResponses.movie_title,
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
				work_study: newYearResponses.work_study,
				vacation_hobby: newYearResponses.vacation_hobby,
				health_sport: newYearResponses.health_sport,
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
				let_go: newYearResponses.let_go,
				achieve: newYearResponses.achieve,
				support: newYearResponses.support,
				try: newYearResponses.try,
				say_no: newYearResponses.say_no,
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
				say_yes: newYearResponses.say_yes,
				advise: newYearResponses.advise,
				special: newYearResponses.special,
				ny_word: newYearResponses.ny_word,
				secret_wish: newYearResponses.secret_wish,
				signature: newYearResponses.signature,
				date: newYearResponses.date,
			},
		]);
		console.log(response);
		console.log(error);
	}

	//if user is logged in, fetch all responses from the database
	const getAllResponses = useCallback(async () => {
		async function fetchAllResponses(user) {
			const { data: response, error } = await supabase
				.from('ly_branch_one')
				.select('*')
				.eq('id', user.id);
			const { data: responseTwo, errorTwo } = await supabase
				.from('ly_branch_two')
				.select('*')
				.eq('id', user.id);
			const { data: responseThree, errorThree } = await supabase
				.from('ly_branch_three')
				.select('*')
				.eq('id', user.id);
			const { data: responseFour, errorFour } = await supabase
				.from('ly_branch_four')
				.select('*')
				.eq('id', user.id);
			const { data: responseNyOne, errorNyOne } = await supabase
				.from('ny_branch_one')
				.select('*')
				.eq('id', user.id);
			const { data: responseNyTwo, errorNyTwo } = await supabase
				.from('ny_branch_two')
				.select('*')
				.eq('id', user.id);
			const { data: responseNyThree, errorNyThree } = await supabase
				.from('ny_branch_three')
				.select('*')
				.eq('id', user.id);

			setUserResponses((prevState) => ({
				...prevState,
				...response[0],
				...responseTwo[0],
				...responseThree[0],
				...responseFour[0],
			}));

			setNewYearResponses((prevState) => ({
				...prevState,
				...responseNyOne[0],
				...responseNyTwo[0],
				...responseNyThree[0],
			}));

			console.log('Fetched all responses');
		}
		if (user) {
			fetchAllResponses(user);
		}
	}, [user, supabase]);

	//Need to figure out why responses are being

	useEffect(() => {
		getAllResponses();
	}, [user, getAllResponses]);

	const resetResponses = () => {
		setUserResponses({
			// Reset values for ly_branch_one
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
			// Reset values for ly_branch_two
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
			// Reset values for ly_branch_three
			best_moments: '',
			biggest_ach: '',
			how: '',
			who: '',
			challenges: '',
			overcame: '',
			learned: '',
			// Reset values for ly_branch_four
			forgiveness: '',
			release: '',
			word_one: '',
			word_two: '',
			word_three: '',
			movie_title: '',
			goodbye: '',
		});
		setNewYearResponses({
			// Reset values for ny_branch_one
			dreams: '',
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
			// Reset values for ny_branch_two
			love: '',
			let_go: '',
			achieve: '',
			support: '',
			try: '',
			say_no: '',
			comfort: '',
			morning: '',
			indulge: '',
			visit: '',
			relationships: '',
			gifts: '',
			// Reset values for ny_branch_three
			procrastinate: '',
			energy: '',
			bravest: '',
			say_yes: '',
			advise: '',
			special: '',
			ny_word: '',
			secret_wish: '',
			signature: '',
			date: '',
		});
	};

	const value = {
		user,
		userResponses,
		newYearResponses,
		isLastSaved,
		isNewSaved,
		handleNyChange,
		handleChange,
		uploadLastYear,
		uploadNewYear,
		getAllResponses,
		resetResponses,
		updateResponses,
	};

	return <ResponseContext.Provider value={value}>{children}</ResponseContext.Provider>;
}
