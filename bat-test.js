//childprocess-test.js

var pwd = require('child_process').spawn('echo', ['%cd%'], {shell: true});

pwd.stdout.on('data', function(data){
    console.log('stdout: ' + data);
    console.log('pid= ' + process.pid +' ppid= '+ process.ppid);
});

pwd.stderr.on('data',function(data){
    console.log('stderr: ' + data);
});

pwd.on('close',function(code){
    console.log('pid= ' + process.pid +' ppid= '+ process.ppid);
    console.log('child process exited with code: ' + code);
});

console.log('pid= ' + process.pid +' ppid= '+ process.ppid);
 

