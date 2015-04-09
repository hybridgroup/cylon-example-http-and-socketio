"use strict";

var Cylon = require('cylon');

Cylon.robot({
  name: "SocketBot",

  connections: {
    loopback: { adaptor: 'loopback' }
  },

  devices: {
    ping: { driver: 'ping' }
  },

  work: function(my) { }
});

Cylon.api("http", {
  ssl: false,
  port: '3000',
  serveDir: __dirname
});

Cylon.api("socketio", {
  host: '0.0.0.0',
  port: '4000'
});

Cylon.start();
