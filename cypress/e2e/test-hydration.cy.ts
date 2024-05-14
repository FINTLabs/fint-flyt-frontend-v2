// Cypress.on("uncaught:exception", (err) => {
//     // Cypress and React Hydrating the document don't get along
//     // for some unknown reason. Hopefully, we figure out why eventually
//     // so we can remove this.
//     // https://github.com/remix-run/remix/issues/4822#issuecomment-1679195650
//     // https://github.com/cypress-io/cypress/issues/27204
//     if (
//         /hydrat/i.test(err.message) ||
//         /Minified React error #418/.test(err.message) ||
//         /Minified React error #423/.test(err.message)
//     ) {
//         return false
//     }
// });
describe('Components Page Tests', () => {
    before(() => {
        cy.viewport(1920, 1080);
    });

    beforeEach(() => {
        cy.visit('http://localhost:3000/test');
        cy.viewport(1920, 1080);
    });

    it('Check page layout', () => {
        cy.get('header', { timeout: 10000 }).should('be.visible');
        cy.get('footer', { timeout: 10000 }).should('be.visible');
    });


})