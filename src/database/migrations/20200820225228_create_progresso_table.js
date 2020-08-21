
//ação de update
exports.up = knex => knex.schema.createTable('progresso', table => {
    table.increments('id')
    table.text('tempo_meditacao')
    
    table.integer('user_id').references('users.id')
    .notNullable()
    //CASCADE faz deletar todos os projetos do usuário quando houver ação de delete
    .onDelete('CASCADE')

    //mostra a data de atualização do campo
    table.timestamp(true, true)
  });

//é ação de rollback
exports.down = knex => knex.schema.dropTable('progresso');
