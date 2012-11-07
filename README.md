# REST Client Registry

Keep order when you're working with a bunch of REST services.

### Registering Services

Register backend services with a call to **register()**.  There are a few ways to invoke the call.

#### register(name, options)

Register a service a with a `name`, and `options` to be passed to `rest-client`.

```javascript
var services = require('rest-services-registry');

services.register('github', {
	host: 'api.github.com',
	timeout: 5000
});
```

#### register(name, base)

Register a service a with a `name`, and url `base` to be passed to `rest-client`.

```javascript
services.register('github', 'api.github.com');

```

#### register(services)

Register in bulk by sending `services`, an object with names as keys and options or base urls to be passed to `rest-client`.

```javascript
services.register({
	github: 'api.github.com',
	metacpan: 'api.metacpan.org'
});
```

### Consuming Services from the Registry

From elsewhere, load in the registry and interact with services by name.  Services in the registry are instances of [rest-service]:

```javascript
var services = require('rest-services-registry');

services.github.get(...);
services.metacpan.get(...);
```
