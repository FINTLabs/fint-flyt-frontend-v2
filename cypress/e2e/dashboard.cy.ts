Cypress.on("uncaught:exception", (err) => {
    // Cypress and React Hydrating the document don't get along
    // for some unknown reason. Hopefully, we figure out why eventually
    // so we can remove this.
    // https://github.com/remix-run/remix/issues/4822#issuecomment-1679195650
    // https://github.com/cypress-io/cypress/issues/27204
    if (
        /hydrat/i.test(err.message) ||
        /Minified React error #418/.test(err.message) ||
        /Minified React error #423/.test(err.message)
    ) {
        return false
    }
});
describe('Components Page Tests', () => {
    before(() => {
        cy.viewport(1920, 1080);
    });

    beforeEach(() => {
        cy.visit('http://localhost:5174/');
        cy.viewport(1920, 1080);
    });

    it('passes', () => {
        cy.visit('http://localhost:5174/')
    })

    it('Check page layout', () => {
        cy.get('header').should('be.visible');
        cy.get('footer').should('be.visible');
    });

    it('Check for 4 dashboard cards', () => {
        for (let i = 0; i < 4; i++) {
            cy.get(`#dashboard-card-${i}`).should('exist');
        }
    });

    it('Check if support-information exists', () => {
        cy.get('#support-information').should('exist');
    });

    it('Check if support-faq exists', () => {
        cy.get('#support-faq').should('exist');
    });

    it('Check if support-faq expansion card opens and closes', () => {
        // Check if the expansion card is initially closed
        cy.get('#support-faq-header').next().should('not.be.visible');

        // Click the expansion card header to open the card
        cy.get('#support-faq-header').click();

        // Check if the expansion card content is now visible
        cy.get('#support-faq-header').next().should('be.visible');

        // Click the expansion card header again to close the card
        cy.get('#support-faq-header').click();

        // Check if the expansion card content is now hidden
        cy.get('#support-faq-header').next().should('not.be.visible');
    });

    it('Check if support-contact exists', () => {
        cy.get('#support-contact').should('exist');
    });

    it('Check if language changer works', () => {
        cy.get('#support-information').should('contain', 'Hva er FINT Flyt?');

        // Open the language dropdown
        cy.get('#language-dropdown-toggle').click();

        // Select the English language option
        cy.get('#language-en').click();

        // Check if the language has been changed to English
        cy.get('#support-information').should('contain', 'What is FINT Flyt?');
    });

})