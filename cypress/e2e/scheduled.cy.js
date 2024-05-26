describe('Pruebas E2E schedules',  { 
    viewportHeight: 689.17,
    viewportWidth: 1030,},() => {
  it('Publish schedules ', () => {
    cy.visit('https://ghost-waki.onrender.com/ghost/#/signin')
    cy.wait(1000)
    cy.get('input[name="identification"]').type('h.sosa@uniandes.edu.co')
    cy.get('input[name="password"]').type('Colombia1*')
    cy.get('button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon js-login-button ember-view"]').click()
    cy.get('a[title="Scheduled"]').click()
    cy.wait(2000)    
    cy.get('a[class="ember-view gh-btn gh-btn-primary"]').click()
    cy.get('textarea[class="gh-editor-title  ember-text-area gh-input ember-view"]').type('Post Pruebas Automatizadas')
    cy.get('div[class="kg-prose"]').type('Esta es un prueba automatizada para la universidad de los andes')
    cy.contains('Publish').click()
    cy.get('button[class="gh-publish-setting-title "]').click()
    cy.get('div[class="gh-radio "]').click()
    cy.get('button[class="gh-btn gh-btn-black gh-btn-large"]').click()
    cy.get('button[data-test-button="confirm-publish"]').click()
    cy.get('button[class="gh-btn-editor gh-publish-back-button"]').click()
    cy.get('a[class="ember-view gh-btn-editor gh-editor-back-button"]').click()
    cy.get('h3[class="gh-content-entry-title"]').contains('Post Pruebas Automatizadas')
    })
})