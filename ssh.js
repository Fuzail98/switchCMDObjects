var SSH = require('simple-ssh');

var ssh = new SSH({
    host: '172.16.0.6',
    user: 'root',
    pass: 'opnsense'
});

ssh
    .exec('opnsense-version', {
        out: console.log.bind(console)
    })
    .start();

//For sudo commands
// ssh.exec('sudo apt update', {
//     pty: true,
//     out: console.log.bind(console)
// }).start();