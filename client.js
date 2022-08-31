const net = require('net');
const { IP, PORT } = require("./constants");
const connect = function() {

 
  console.log("Connecting....");
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

 //refactored with Gary to write name UPON connection to server
  conn.on('connect', () => {
    console.log('Connected to server');
    conn.write('Name: JWG');
    // conn.write('Move: down');
    // setTimeout(() => {conn.write('Move: left')}, 150)
    
  });

  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect };
