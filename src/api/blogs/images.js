export default class BlogImages {
	constructor(client) {
		this.client = client;
	}

	list(blogId) {
		return this.client.get(`/blogs/${blogId}/images`);
	}

	update(blogId, imageId, data) {
		return this.client.put(`/blogs/${blogId}/images/${imageId}`, data);
	}

	upload(blogId, formData) {
		return this.client.postFormData(`/blogs/${blogId}/images`, formData);
	}

	delete(blogId, imageId) {
		return this.client.delete(`/blogs/${blogId}/images/${imageId}`);
	}
}
