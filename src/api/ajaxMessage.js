export default class AjaxMessage {
	constructor(client) {
		this.client = client;
	}
	
	retrieve(data) {
		return this.client.post(`/message`, data);
	}
}
