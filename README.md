# Angular 16 Feature Demonstration App

This project is a comprehensive demonstration of **Angular 16** features integrated with **Google Firebase** as the backend. It covers various core and advanced concepts of Angular in a real-world context, ideal for learning or reference purposes.

---

## 🚀 Features Covered

### ✅ Angular 16 Highlights
- Standalone Components
- Signals (reactive primitives)
- Control Flow Syntax (`@if`, `@for`)
- Typed Reactive Forms
- HttpClient and Interceptors
- Dependency Injection and Providers
- Lazy Loading & Route Configuration
- State Management with Signals
- Unit Testing & Component Testing
- Material UI Integration

### 🔥 Firebase Integration
- Firebase Authentication (Email/Password, Google Sign-In)
- Firestore Realtime Database
- Firebase Hosting
- Firebase Functions (Optional)
- Cloud Storage
- Firebase Security Rules

---

## 📦 Tech Stack

- **Frontend**: Angular 16, TypeScript, Angular Material, RxJS
- **Backend**: Firebase (Auth, Firestore, Storage, Hosting)
- **Dev Tools**: Angular CLI, Prettier, ESLint

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher recommended)
- Angular CLI (`npm install -g @angular/cli`)
- Firebase CLI (`npm install -g firebase-tools`)

### Clone the Repository
```bash
git clone https://github.com/yourusername/angular16-demo-app.git
cd angular16-demo-app
```

## Install Dependencies
npm install

## Run Locally
npm start 
ng serve

## 🙌 Contributing
Contributions, issues and feature requests are welcome!
Feel free to check the issues page.

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🔗 API Endpoints & Firebase Usage

### Firebase Project
- **Project ID:** recipe-book-project-78350
- **Realtime Database URL:** https://recipe-book-project-78350-default-rtdb.firebaseio.com/

### Authentication
- **Signup Endpoint:**
  - `POST https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=YOUR_API_KEY`
- **Login Endpoint:**
  - `POST https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=YOUR_API_KEY`
- **Auth Payload:**
  ```json
  {
    "email": "user@example.com",
    "password": "yourpassword",
    "returnSecureToken": true
  }
  ```
- **Token Usage:**
  - After login/signup, use the returned `idToken` as a query param `?auth=ID_TOKEN` for all database requests.

### Recipes Data
- **Store Recipes (per user):**
  - `PUT https://recipe-book-project-78350-default-rtdb.firebaseio.com/recipes/{userId}.json?auth=ID_TOKEN`
- **Fetch Recipes (per user):**
  - `GET https://recipe-book-project-78350-default-rtdb.firebaseio.com/recipes/{userId}.json?auth=ID_TOKEN`
- Each user's recipes are stored under their unique user ID node in the database.

### Example Firebase Rules (Production)
```json
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}
```

---

## 📝 How to Use Firebase in This App
1. **Sign up or log in using the app's authentication form.**
2. **Add or edit recipes.**
3. **Click 'Manage' > 'Save Data' to store your recipes in Firebase.**
4. **Each user only sees and manages their own recipes.**
5. **All requests to the database require a valid Firebase ID token.**

---

