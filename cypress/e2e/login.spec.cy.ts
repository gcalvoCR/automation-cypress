import loginPage from "cypress/pages/login.page";
import loginPage2 from "cypress/pages/login.page.2";

describe("POM Test", () => {
  beforeEach(function () {
    // executes prior each test within it block
    cy.visit("https://demo.guru99.com/test/newtours/login.php");
  });

  it("Verify Login successful", () => {
    const loginObj = new loginPage();
    loginObj.enterUsername("selenium@qa");
    loginObj.enterPassword("qa@12345");
    loginObj.clickSubmit();
    loginObj.elements.successTxt().should("have.text", "Login Successfully");
  });

  it("Verify Login unsuccessful for invalid username/password", () => {
    const loginObj = new loginPage();
    loginObj.enterUsername("selenium");
    loginObj.enterPassword("qa@123");
    loginObj.clickSubmit();
    loginObj.elements
      .errorTxt()
      .should("contain", "Enter your userName and password correct");
  });
});

describe("POM Test", () => {
  beforeEach(function () {
    // executes prior each test within it block
    cy.visit("https://demo.guru99.com/test/newtours/login.php");
  });

  it("Verify Login successfu 2", () => {
    const loginObj = new loginPage2();
    loginObj.username.type("selenium@qa");
    loginObj.password.type("qa@12345");
    loginObj.submit.click();
    loginObj.successText.should("have.text", "Login Successfully");
  });
});
