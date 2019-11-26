"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BlogImages = function () {
	function BlogImages(client) {
		_classCallCheck(this, BlogImages);

		this.client = client;
	}

	_createClass(BlogImages, [{
		key: "list",
		value: function list(blogId) {
			return this.client.get("/blogs/" + blogId + "/images");
		}
	}, {
		key: "update",
		value: function update(blogId, imageId, data) {
			return this.client.put("/blogs/" + blogId + "/images/" + imageId, data);
		}
	}, {
		key: "upload",
		value: function upload(blogId, formData) {
			return this.client.postFormData("/blogs/" + blogId + "/images", formData);
		}
	}, {
		key: "delete",
		value: function _delete(blogId, imageId) {
			return this.client.delete("/blogs/" + blogId + "/images/" + imageId);
		}
	}]);

	return BlogImages;
}();

exports.default = BlogImages;