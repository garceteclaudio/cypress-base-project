describe('Titulo de mis pruebas', () => {
  beforeEach(() => {

    cy.visit('https://www.saucedemo.com/')
  })

  it('Visitar la pagina y validar el titulo Swag Labs', () => {
    console.log("Test pagina");
    //cy.contains('Your Store').should('have.text', 'Your Store');
    cy.get(".login_logo").should('have.text', 'Swag Labs');
  })

    it('Hacer login', () => {
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="title"]').should('have.text', 'Products');
  })
})
