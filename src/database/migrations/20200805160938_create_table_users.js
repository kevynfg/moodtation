
//ação de update
exports.up = knex => knex.schema.createTable('users', table => {
    table.increments('id')
    table.text('username').unique().notNullable();

    //defaultTo é para setar valor padrão
    //knext.fn.now é para o knex rodar uma função de NOW (data criada o registro)
    table.timestamp('created_at').defaultTo(knex.fn.now())
    //mostra a data de atualização do campo
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  });

//é ação de rollback
exports.down = knex => knex.schema.dropTable('users');
