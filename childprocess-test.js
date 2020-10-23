//childprocess-test.js

var spawn = require('child_process').spawn;

var pwd = spawn('echo', ['%cd%'], {shell: true});

pwd.stdout.on('data', function(data){
    console.log('stdout: ' + data);
});

pwd.stderr.on('data',function(data){
    console.log('stderr: ' + data);
});

pwd.on('close',function(code){
    console.log('child process exited with code: ' + code);
});

console.log(process.pid);
 

