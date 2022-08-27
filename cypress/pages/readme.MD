# Page objects have two main benefits:

- They keep all page element selectors in one place
- They standardize how tests interact with the page

```
public void testLogin() {
  LoginPage login = new LoginPage(driver);
  login.typeUsername('username')
  login.typePassword('username')
  login.submitLogin()
}
```

-----------------
Tests
-----------------
Page Objects
~ ~ ~ ~ ~ ~ ~ ~ ~
HTML UI
-----------------
Application code
-----------------