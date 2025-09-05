describe('lista de tarefas', () => {
  /*it('Deve adicionar uma nova tarefa', () => {
    cy.visit('https://kaiquecovo.github.io/pagina-html-inserir-tabela-teste-e2e/')

    cy.get('#input-item').type('Conquistar dignidade')

    cy.get('button[type="submit"]').click()

    cy.get('#lista-itens li').should('contain', 'Conquistar dignidade')

  })*/

  it('Criar conta no Pinterest', () => {
     cy.visit('https://br.pinterest.com/')

    cy.contains('Log in').click()

    cy.contains('Email').click()

    cy.get('input[id="email"]').type('88db904f9b@webxios.pro')

    cy.contains('Password').click()

    cy.get('input[id="password"]').type('pastel123')

    cy.get('button[type="submit"]').click()

  })

})