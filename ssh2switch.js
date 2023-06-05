const { NodeSSH } = require('node-ssh')

const ssh = new NodeSSH()

ssh.connect({
  host: '10.0.0.2',
  port: 22,
  algorithms: {
    kex: [
      "diffie-hellman-group1-sha1"
    ]
  },
  username: 'admin',
  password: 'admin',
  // debug: console.log
})
  .then(function () {
    console.log("Connected")
    const command = 'ls /home/lighttpd/'
    console.log(`${command}`)
    ssh.execCommand(command)
      .then(function (result) {
        console.log('STDOUT: ' + result.stdout)
        console.log('STDERR: ' + result.stderr)
      })
  })





