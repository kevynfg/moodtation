// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: "moodtation",
      user: "postgres",
      password: "ke452366"
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
    },
    pool: {
      afterCreate: function(connection, callback) {
        connection.query('SET timezone = "UTC";', function(err){
          callback(err, connection);
        });
      }
    }
  },
  //uma trigger que recebe a tabela
  onUpdateTrigger: table => `
  CREATE TRIGGER ${table}_updated_at
  BEFORE UPDATE ON ${table}
  FOR EACH ROW
  EXECUTE PROCEDURE on_update_timestamp();
  `
};
