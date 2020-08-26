const { onUpdateTrigger } = require('../../../knexfile')
//ação de update
exports.up = async knex => knex.schema.createTable('users', table => {
    table.increments('id');
    table.text('username').unique().notNullable();
    // table.password('password').notNullable();
    // table.email('email').notNullable();
    //defaultTo é para setar valor padrão
    //knext.fn.now é para o knex rodar uma função de NOW (data criada o registro)
    table.timestamp('created_at').defaultTo(knex.fn.now());
    //mostra a data de atualização do campo
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  }).then(() => knex.raw(onUpdateTrigger('users')))

//é ação de rollback
exports.down = async knex => knex.schema.dropTable('users');
