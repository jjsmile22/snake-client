const { connect } = require('./client');
const conn = connect();

const handleUserInput = function(key) {
 
  if (key === '\u0003') {
    process.exit();
  } else if (key == 'w') {
    conn.write("Move: up");
  } else if (key == 's') {
    conn.write("Move: down");
  } else if (key == 'a') {
    conn.write("Move: left");
  } else if (key == 'd') {
    conn.write("Move: right");
  } else if (key == 'g') {
    conn.write("Say: Good Work!");
  }

};

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
  
};

module.exports = {setupInput};
