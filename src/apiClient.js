import fetch from 'cross-fetch';
import RestClient from './restClient';

export default class ApiClient extends RestClient {
	static authorize = (baseUrl, email, language) => {
		const config = {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
				'Accept-Language': language
			},
			body: JSON.stringify({ email })
		};
		return fetch(`${baseUrl}/authorize`, config).then(
			RestClient.returnStatusAndJson
		);
	};
}
