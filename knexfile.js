module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'auth-testing-sprint',
      user: 'postgres',
      password: 'password',
      host: '127.0.0.1'
    },
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './database/seeds' },
  },
  testing: {
    client: 'pg',
    connection: {
      database: 'sprint-testing',
      user: 'postgres',
      password: 'password',
      host: '127.0.0.1'
    },
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations',
    },
  },
};
