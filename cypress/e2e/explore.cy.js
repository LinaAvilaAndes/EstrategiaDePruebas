describe('Pruebas exploración de blogs ghost',  { 
    viewportHeight: 689.17,
    viewportWidth: 1030,},() => {
  it('login', () => {
    cy.visit('https://ghost-waki.onrender.com/ghost/#/signin')
    cy.wait(1000)
    cy.get('input[name="identification"]').type('h.sosa@uniandes.edu.co')
    cy.get('input[name="password"]').type('Colombia1*')
    cy.get('button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon js-login-button ember-view"]').click()
    cy.url().should('include', '/dashboard')
    cy.get('a[data-test-nav="explore"]').click()
    cy.wait(1000)
    cy.url().should('include', '/explore')  
    cy.get('button[class="gh-nav-btn-search"]').click()
    cy.get('input[class="gh-input-with-select-input"]').type('pruebas')
    cy.get('li[class="ember-power-select-option"]').contains('Post Pruebas Automatizadas')
  })
})