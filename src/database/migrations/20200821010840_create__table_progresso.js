exports.up = knex => knex.schema.createTable('progresso', table => {
    table.increments('id')
    table.text('tempo_meditacao').notNullable()
    
    table.integer('user_id').references('users.id')
    .notNullable()
    //CASCADE faz deletar todos os projetos do usuário quando houver ação de delete
    .onDelete('CASCADE')

    table.timestamp('created_at').defaultTo(knex.fn.now())
    //mostra a data de atualização do campo
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  });

//é ação de rollback
exports.down = knex => knex.schema.dropTable('progresso');