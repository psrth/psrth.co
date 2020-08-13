import fetch from "node-fetch";
import encoding from "encoding";

const API_ENDPOINT =
	"https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=psrth&api_key=4448fa2fbe054ba65d586767315e49d2&format=json";

exports.handler = async (event, context) => {
	return fetch(API_ENDPOINT)
		.then((response) => response.json())
		.then((data) => ({
			statusCode: 200,
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "*",
				"Access-Control-Allow-Headers": "*",
				"Cache-Control": "public,max-age=60",
			},
			body: JSON.stringify(data),
		}))
		.catch((error) => ({
			statusCode: 422,
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "*",
				"Access-Control-Allow-Headers": "*",
				"Cache-Control": "public,max-age=60",
			},
			body: String(error),
		}));
};
