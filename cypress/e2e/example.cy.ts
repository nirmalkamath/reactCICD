describe('Login Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173'); // Adjust based on your app's route
  });

  it('shows error message when inputs are empty', () => {
    cy.get('button[type="submit"]').click();
    cy.contains('Email and Password are required!').should('be.visible');
  });

  it('logs in when valid inputs are provided', () => {
    cy.get('input[type="email"]').type('test@example.com');
    cy.get('input[type="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Logged in!');
    });
  });
});
