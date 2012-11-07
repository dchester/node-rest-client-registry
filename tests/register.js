var Client = require('rest-client');

var reload = function(module) {
	delete require.cache[ require.resolve(module) ];
	return require(module);
}

exports.register = function(test) {

	var services = require("../lib/registry");
	test.equal(services.github, undefined, "registry starts empty");

	services.register('github', 'api.github.com');

	test.ok(services.github instanceof Client, "github client is a rest-client");
	test.equal(services.github.host, 'api.github.com');

	test.done();
};

exports.bulk = function(test) {

	var services = reload('../lib/registry');
	test.equal(services.github, undefined, "registry starts empty");

	services.register({
		"github": "api.github.com",
		"metacpan": "api.metacpan.org"
	});

	test.equal(services.github.host, 'api.github.com');
	test.equal(services.metacpan.host, 'api.metacpan.org');

	test.done();
};
