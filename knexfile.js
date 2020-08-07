// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: "moodtation",
      user: "postgres",
      password: "m@ry"
    },
    migrations: {
      tableName: 'knex_migrations',
      //define o diretório onde o database vai ser instalado
      //com __dirname (variavel global) que é a pasta src no caso usado
      //instalando com npx knex migrate:make create_table_users
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: { 
    directory: `${__dirname}/src/database/seeds`
    }
  }
};
