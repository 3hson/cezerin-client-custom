"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PictureImages = function () {
	function PictureImages(client) {
		_classCallCheck(this, PictureImages);

		this.client = client;
	}

	_createClass(PictureImages, [{
		key: "list",
		value: function list(pictureId) {
			return this.client.get("/pictures/" + pictureId + "/images");
		}
	}, {
		key: "update",
		value: function update(pictureId, imageId, data) {
			return this.client.put("/pictures/" + pictureId + "/images/" + imageId, data);
		}
	}, {
		key: "upload",
		value: function upload(pictureId, formData) {
			return this.client.postFormData("/pictures/" + pictureId + "/images", formData);
		}
	}, {
		key: "delete",
		value: function _delete(pictureId, imageId) {
			return this.client.delete("/pictures/" + pictureId + "/images/" + imageId);
		}
	}]);

	return PictureImages;
}();

exports.default = PictureImages;