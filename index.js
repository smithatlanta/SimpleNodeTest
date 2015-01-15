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
    path: '/mu-72fcecc7-1bef7e08-f1954f58-f7bdb21c',
    handler: function (request, reply) {
        reply('42');
    }
});


server.start(function () {
    console.log('Server running at:', server.info.uri);
});