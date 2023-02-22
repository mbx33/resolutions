export default function handler(req, res) {
	console.log(req.body);
	res.send('Hello');

	// Update the response in the database and get the updated data
	// const updatedData = await updateResponseInDatabase(key, user);
	// Send the updated data back as the response
	// res.status(200).json(updatedData);
}
