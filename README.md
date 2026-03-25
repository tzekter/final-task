# Final task
## Task Description
### UC-1 Form Validation(Negative Testing)
- Attempt to login with empty Username and Password. Verify error: "Username is required".
- Attempt to login with Username only. Verify error: "Password is required.
- Login with 'standard_user', go to Checkout, and attemp to continue without filling the postal code. Verify error message.
### UC-2 Handling Latency:
- Login using perfomance_glitch_user(This user has a built-in delay)/
- Ensure the framework handles page load delays gracefully without hard-coded pause() or sleep() commands.
- Reset the App State via the Burger Menu.
- Logout.

### Technical Requirements:
- Tool: WebdriverIO.
- Browsers: FireFox, Chrome(Run in parallel).
- Pattern: Page Object Model.
- Locators: CSS Selectors.
- Assertions: Specific framework assertions(e.g., expect(elem).toBeExisting()).

## How to run tests
1. install dependencies:
```bash
npm install
```

2.Execute tests :
```bash
npm test
```

## How to generate the report
run the following command:
```bash
npm run report
```