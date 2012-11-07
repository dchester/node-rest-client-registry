var Client = require('rest-client');

var registry = {

	_register: function(name, service) {

		if (!name) {
			throw new Error("please specify a name for the REST client");
		}

		if (name === 'register' || name === 'initialize') {
			throw new Error("can't register service with reserved name: " + name);
		}

		registry[name] = new Client(service);
	},

	_register_bulk: function(services) {
		for (name in services) {
			this._register(name, services[name]);
		}
	},

	register: function() {
		arguments.length == 2 && this._register.apply(this, arguments);
		arguments.length == 1 && this._register_bulk.apply(this, arguments);
	}
};

module.exports = registry;

