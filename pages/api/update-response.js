// create the handler to update the response in the database

import { supabase } from '../../utils/supabase';

export default async function handler(req, res) {
	// const { table, column, response, user } = req.body;

	// console.log({
	// 	table,
	// 	column,
	// 	response,
	// 	user,
	// });

	// try {
	// 	const { data, error } = await supabase.from(table).select('*').eq('id', user.id);
	// 	console.log(data);
	// 	res.status(200).json({ message: 'success' });
	// } catch (error) {
	// 	console.log(error);
	// 	res.status(500).json({ message: 'error' });
	// }
	res.status(200).json({ message: 'success' });
}
