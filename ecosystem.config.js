module.exports = {
    apps: [
      {
        name: 'Mister-Clean',
        script: 'app.js',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env: {
          ENV: 'development',
          DEBUG: 'knex:*'
        },
        env_production: {
          ENV: 'production',
        },
      }
    ],
  };