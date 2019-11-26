'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pictures = function () {
	function Pictures(client) {
		_classCallCheck(this, Pictures);

		this.client = client;
		this.resourceUrl = '/pictures';
	}

	_createClass(Pictures, [{
		key: 'list',
		value: function list(filter) {
			return this.client.get(this.resourceUrl, filter);
		}
	}, {
		key: 'upload',
		value: function upload(formData) {
			return this.client.postFormData(this.resourceUrl, formData);
		}
	}, {
		key: 'delete',
		value: function _delete(pictureName) {
			return this.client.delete(this.resourceUrl + '/' + pictureName);
		}
	}]);

	return Pictures;
}();

exports.default = Pictures;