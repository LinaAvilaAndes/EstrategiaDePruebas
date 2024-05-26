describe('Pruebas E2E para aplicativo ghost', function() {
    it('Ingreso a ghost con usuario admin y resgistro de un post en la seccion Published', function() {
        cy.visit('https://ghost-waki.onrender.com/ghost/#/signin')
        cy.wait(1000)
        cy.get('input[name="identification"]').type('h.sosa@uniandes.edu.co')
        cy.get('input[name="password"]').type('Colombia1*')
        cy.get('button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon js-login-button ember-view"]').click()
        cy.url().should('include', '/dashboard')
        cy.wait(2000);
        cy.get('a[title="Published"]').click();
        cy.wait(2000);
        cy.get('a[class="ember-view gh-btn gh-btn-primary view-actions-top-row"]').click();
        cy.wait(2000);
        cy.get('textarea[placeholder="Post title"]').type("Tittle Post");
        cy.wait(2000);
        cy.get('div[class="koenig-editor__editor __mobiledoc-editor __has-no-content"]').type("Description of post test");
        cy.wait(2000);
        cy.get('button[class="gh-btn gh-btn-editor darkgrey gh-publish-trigger"]').click();
        cy.wait(2000);
        cy.get('button[class="gh-btn gh-btn-black gh-btn-large"]').click();
        cy.wait(2000);
        cy.get('button[class="gh-btn gh-btn-large gh-btn-pulse ember-view"]').click();
        cy.wait(2000);
        cy.get('span[class="green"]').should('be.visible');
        cy.wait(2000);

    })
})