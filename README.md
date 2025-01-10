# Login Demo

This project demonstrates a simple login system using **session storage** to persist user data and dynamically load custom content across multiple pages. Login credentials and custom page content are stored in JSON files and fetched during runtime. The application is built with vanilla ES6 JavaScript (no frameworks).

---

## Features

### Login Workflow

#### Logging In

1. The user's name is displayed in the **header** after a successful login.
2. Custom, page-specific content is dynamically loaded and displayed in the **main** area.
3. Login state is preserved for the browser session using `sessionStorage`.

#### Logging Out

- The user is automatically logged out when the browser window or tab is closed, as the session data is not persisted beyond the session.

#### Invalid Login

- If invalid credentials are entered, a clear error message is displayed below the login form, and the form is reset for another attempt.

---

## Theme Toggling

The application includes a dark mode and light mode toggle:

- The current theme state is stored in **local storage** and applied automatically on page reload.
- Accessible buttons with appropriate ARIA attributes are used to improve usability.

---

## Technical Details

### JavaScript

- Built with **vanilla ES6 JavaScript**, focusing on modern syntax and browser APIs.
- The project does not use any JavaScript frameworks like React or Angular, keeping dependencies minimal.
- The theme management and login workflows have been split into separate modules, improving code modularity:
  - **Theme Module**: Handles theme toggling (light/dark mode) and local storage management.
  - **Login Module**: Manages user authentication and session storage handling.

### JSON Integration

1. **Login Data** (`logins.json`):

   - Stores an array of valid username-password pairs.
   - Used to validate login attempts.

2. **Custom Content** (`loggedInContent.json`):
   - Defines dynamic content for specific pages after login.
   - Includes separate content blocks for the "Home," "About," and "Contact" sections.

### Storage

- **Session Storage**:
  - Stores the authenticated user's data and associated page content for the duration of the browser session.
- **Local Storage**:
  - Saves the current theme preference (`dark mode` or `light mode`).

---

## Testing and Compatibility

The application has been tested on the following platforms and browsers:

- **Operating System**: Windows 10
- **Browsers**:
  - Google Chrome
  - Mozilla Firefox
  - Microsoft Edge

### Device View Testing

The layout and functionality have been verified in both browser and device simulation views to ensure responsiveness and usability.

---

## Future Improvements

Potential areas for enhancement include:

- Adding password hashing or encryption for enhanced security (e.g., using WebCrypto API).
- Enhancing error messages and user feedback with animations or icons for better UX.

---

## How to Run

1. Clone or download the repository to your local machine.
2. Open the project folder and start a simple HTTP server (e.g., using `Live Server` in VS Code or Python's `http.server` module).
3. Open the project in a modern browser (e.g., Chrome, Firefox, or Edge).
4. Use the provided login credentials in `logins.json` (or in the **Test Logins** table on the Home page) to log in and view dynamic content.

---

This project demonstrates the fundamentals of working with client-side storage, dynamic content loading, and creating a responsive and user-friendly login interface.
