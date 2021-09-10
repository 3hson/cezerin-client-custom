export default class AjaxUserRequest {
	constructor(client) {
		this.client = client;
	}
	
	retrieve(data) {
		return this.client.post(`/user-request`, data);
	}
}
