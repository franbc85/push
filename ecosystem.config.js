module.exports = {
  apps: [{
    name: 'push',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: '52.59.219.236',
      key: '~/.ssh/pelit.pem',
      ref: 'origin/master',
      repo: 'git@github.com:franbc85/push.git',
      path: '/home/ubuntu/push',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
