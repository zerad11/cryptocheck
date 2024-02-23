// start-server.js

const { exec } = require('child_process');

const serverProcess = exec('node server.js');

serverProcess.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

serverProcess.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

serverProcess.on('close', (code) => {
  console.log(`Server process exited with code ${code}`);
});
