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
  cy.get('#ember19').click()
  cy.wait(1000)
  cy.get('#ember20').click()
  cy.wait(1000)
  cy.get('textarea[class="gh-editor-title  ember-text-area gh-input ember-view"]').type('Post Pruebas Automatizadas')
  cy.get('div[class="kg-prose"]').type('Esta es un prueba automatizada para la universidad de los andes')
  cy.get('button[class="gh-editor-feature-image-unsplash"]').click()
  cy.wait(2000)
  cy.get('svg[class="w4 stroke-midlightgrey-l2"]').click()
  cy.wait(2000)
  cy.contains('Preview').click()
  cy.wait(1000)
  cy.get('button[class="gh-btn-editor gh-editor-back-button"]').click()
  cy.contains('Publish').click()
  cy.get('button[class="gh-btn gh-btn-black gh-btn-large"]').click()
  cy.get('button[data-test-button="confirm-publish"]').click()
  cy.get('div[class="gh-post-bookmark-title"]').contains('Post Pruebas Automatizadas')
  })
})