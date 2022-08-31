const net = require('net');
const connect = function() {

 
  console.log("Connecting....");
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });


  conn.on('connect', () => {
    console.log('Connected to server')
    conn.write('Name: JWG')
  });


  

  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect };
