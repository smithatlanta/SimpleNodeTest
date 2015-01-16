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
    path: '/mu-954e3ec6-2d27a124-7dfb567b-0fa9a02c',
    handler: function (request, reply) {
        reply('42');
    }
});


server.start(function () {
    console.log('Server running at:', server.info.uri);
});