class loginPage {
  // using properties
  username = cy.get('input[name="userName"]');
  password = cy.get('input[name="password"]');
  submit = cy.get('input[name="submit"]');

  // using getters
  get successText() {
    return cy.get("h3");
  }

  get errorText() {
    return cy.get("span");
  }
}

export default loginPage;
