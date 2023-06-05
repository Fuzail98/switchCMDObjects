const {NodeSSH} = require('node-ssh')

const ssh = new NodeSSH()

ssh.connect({
  host: '192.168.148.156',
//   algorithms: 'diffie-hellman-group1-sha1',
  username: 'fuzail',
//   password: 'fuzail'
  privateKeyPath: 'E:/SSH/test.txt'
// privateKey: ''

})
.then(function() {
      // Command
  ssh.execCommand('echo "It works!!!"') //, { cwd:'/var/www' })
    // .execCommand('show switch')
    .then(function(result) {
    console.log('STDOUT: ' + result.stdout)
    console.log('STDERR: ' + result.stderr)
  })
})