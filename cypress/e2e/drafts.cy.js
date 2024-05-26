describe('Pruebas exploración de blogs ghost',  { 
  viewportHeight: 689.17,
  viewportWidth: 1030,},() => {
it('delete drafts', () => {
  cy.visit('https://ghost-waki.onrender.com/ghost/#/signin')
  cy.wait(1000)
  cy.get('input[name="identification"]').type('h.sosa@uniandes.edu.co')
  cy.get('input[name="password"]').type('Colombia1*')
  cy.get('button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon js-login-button ember-view"]').click()
  cy.get('a[title="Drafts"]').click()
  cy.wait(2000)
  cy.get('span.gh-post-list-cta.edit').first().click()
  cy.get('button[ title="Settings"]').click()
  cy.get('button[class="gh-btn gh-btn-outline gh-btn-icon gh-btn-fullwidth"]').type('{downarrow}')
  cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click()
  })
})