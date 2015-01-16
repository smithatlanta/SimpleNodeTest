var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 3000 });

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
});

server.route({
    method: 'GET',
    path: '/mu-1707e390-267b53c8-200dde69-02a711a8',
    handler: function (request, reply) {
        reply('42');
    }
});


server.start(function () {
    console.log('Server running at:', server.info.uri);
});