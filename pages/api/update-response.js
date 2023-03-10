// create the handler to update the response in the database

import { supabase } from '../../utils/supabaseClient';

export default async function handler(req, res) {
	const { column, branch, response, user } = req.body;

	const { data, error } = await supabase
		.from(`${branch}`)
		.update({ [column]: response })
		.eq('id', user.id);

	if (error) console.log(error);

	if (data) res.status(200).json({ data });
}
