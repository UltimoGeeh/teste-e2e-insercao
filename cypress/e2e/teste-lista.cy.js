describe('lista de tarefas', () => {
  it('Deve adicionar uma nova tarefa', () => {
    cy.visit('https://kaiquecovo.github.io/pagina-html-inserir-tabela-teste-e2e/')

    cy.get('#input-item').type('Conquistar dignidade')

    cy.get('button[type="submit"]').click()

    cy.get('#lista-itens li').should('contain', 'Conquistar dignidade')

  })

  it('Não deve adicionar tarefa sem nome', () => {
     cy.visit('https://kaiquecovo.github.io/pagina-html-inserir-tabela-teste-e2e/')

    cy.get('button').click()

    cy.get('li').should('not.exist')

    cy.get('li').should('have.length', 0)

  })

})