export default class Blogs {
	constructor(client) {
		this.client = client;
		this.resourceUrl = '/blogs';
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

	slugExists(blogId, slug) {
		return this.client.get(`${this.resourceUrl}/${blogId}/slug`, { slug });
	}
}
