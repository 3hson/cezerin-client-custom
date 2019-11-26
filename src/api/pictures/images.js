export default class PictureImages {
	constructor(client) {
		this.client = client;
	}

	list(pictureId) {
		return this.client.get(`/pictures/${pictureId}/images`);
	}

	update(pictureId, imageId, data) {
		return this.client.put(`/pictures/${pictureId}/images/${imageId}`, data);
	}

	upload(pictureId, formData) {
		return this.client.postFormData(`/pictures/${pictureId}/images`, formData);
	}

	delete(pictureId, imageId) {
		return this.client.delete(`/pictures/${pictureId}/images/${imageId}`);
	}
}
