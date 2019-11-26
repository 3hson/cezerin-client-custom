export default class Pictures {
	constructor(client) {
		this.client = client;
		this.resourceUrl = '/pictures';
	}

	list(filter) {
		return this.client.get(this.resourceUrl, filter);
	}

	retrieve(id, filter) {
		return this.client.get(`${this.resourceUrl}/${id}`, filter);
	}

	create(data) {
		return this.client.post(this.resourceUrl, data);
	}

	update(id, data) {
		return this.client.put(`${this.resourceUrl}/${id}`, data);
	}

	delete(id) {
		return this.client.delete(`${this.resourceUrl}/${id}`);
	}

	slugExists(pictureId, slug) {
		return this.client.get(`${this.resourceUrl}/${pictureId}/slug`, { slug });
	}
}
