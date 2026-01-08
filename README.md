# KiarX Login Project

This project is a simple Angular application demonstrating a login page with form validation, success state handling, and a clean UI.

> Live Demo --->  kiar-x-login-page.vercel.app

## Login Logic

The core logic resides in `src/app/login/login.component.ts`.

1.  **Form Validation**:
    - Uses Angular `ReactiveFormsModule`.
    - Validates that `email` and `password` are required.
    - Ensures `email` is in a valid format and `password` has at least 6 characters.

2.  **Authentication**:
    - The `onSubmit()` method checks the form validity.
    - It simulates an API call with `setTimeout`.
    - **Hardcoded Credentials**:
        - Email: `nikhil@gmail.com`
        - Password: `nikhil123`
    - If credentials match, `isLoggedIn` is set to `true`, switching the UI to the success view.
    - If they fail, an alert shows "User not found".

## Folder Structure

The main feature is contained within the `login` folder:

```
src/app/login/
├── login.component.ts   # Logic (Class, Form definition, methods)
├── login.component.html # Template (HTML structure, View)
└── login.component.css  # Styles (CSS specific to this component)
```

## How Files Connect

### 1. Logic → Template (`.ts` to `.html`)
- **Data Binding**: The `login.component.html` binds to the `loginForm` created in `login.component.ts` using `[formGroup]="loginForm"`.
- **Event Binding**: The form submission triggers `(ngSubmit)="onSubmit()"`, calling the function defined in the TypeScript file.
- **Structural Directives**: `*ngIf="!isLoggedIn"` and `*ngIf="isLoggedIn"` in the HTML listen to the `isLoggedIn` property in the TS file to toggle between the form and the success message.

### 2. Styles → Template (`.css` to `.html`)
- `login.component.css` define styles like `.login-container`, `.submit-btn`, and `.success-container`.
- These styles are **encapsulated**, meaning they only apply to the HTML elements within `login.component.html`.

### 3. Routing (`app.routes.ts` to Component)
- `src/app/app.routes.ts` defines the connection between the URL and the component.
- The default path `{ path: '', component: LoginComponent }` ensures that when the app loads, the `LoginComponent` is displayed.
