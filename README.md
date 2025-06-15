# 🚗 Buggy Cars Rating - Automation Project

This project automates tests for [Buggy Cars Rating](https://buggy.justtestit.org) using **Playwright** with a hybrid approach that includes **UI + API testing**.

---

## ✅ Summary

1. Run a guest test to create a user and save the token.
2. Use the token (`auth.json`) to run authenticated UI/API tests.
3. Enjoy stable, automated coverage for both flows.

---

## 🧪 Test Coverage Summary

| Category | File                            | Description                                      |
|----------|----------------------------------|--------------------------------------------------|
| API - Authenticated | `tests/api/auth.spec.ts`       | - Validate user profile  
|          |                                  | - Match user token to user data  
|          |                                  | - Fetch model list  
|          |                                  | - Vote for a model  
|          |                                  | - Get model details by ID  
| API - Guest        | `tests/api/guest.spec.ts`      | - Register user  
|          |                                  | - Login and save token to `auth.json`  
| UI - Guest         | `tests/ui/guest.spec.ts`       | - Register user via UI  
|          |                                  | - Login via UI and save token  
| UI - Authenticated | `tests/ui/auth.spec.ts`        | - Show profile page  
|          |                                  | - Vote for a car  
|          |                                  | - Navigate to model page  
|          |                                  | - Navigate to make page  
|          |                                  | - Update profile info  
|          |                                  | - Logout to homepage  
| Hybrid             | `tests/hybrid/auth.spec.ts`    | - Update gender via API  
|          |                                  | - Verify updated gender in UI  

---

## 📁 Project Structure

```
qa-automation-task/
├── api/ # API endpoint definitions
│ └── endpoints.ts
├── fixtures/ # Custom Playwright fixtures
│ └── ui-fixture.ts
├── helpers/ # Utility functions (e.g. wait for loader)
│ └── waitLoaderFinish.ts
├── pages/ # Page Object Models for UI components
│ ├── HeaderSection.ts
│ ├── HomePage.ts
│ ├── MakePage.ts
│ ├── ModelPage.ts
│ ├── OverallPage.ts
│ ├── ProfilePage.ts
│ └── RegistrationPage.ts
├── services/ # Business logic & data (e.g. user, auth)
│ ├── auth.service.ts
│ ├── model.service.ts
│ └── user.service.ts
├── storage/ # Auth token for logged-in sessions
│ └── auth.json
├── tests/ # All test specs
│ ├── api/ # API-only tests
│ │ ├── auth.spec.ts
│ │ └── guest.spec.ts
│ ├── hybrid/ # Combined API + UI tests
│ │ └── auth.spec.ts
│ └── ui/ # UI-only tests
│ ├── auth.spec.ts
│ └── guest.spec.ts
├── .env # Environment variables (optional)
├── package.json # Project dependencies & scripts
└── playwright.config.ts # Playwright configuration
```

---

## 🚀 Getting Started

### Step 1: Install dependencies

```
npm install
```

### ✅ Step 2: Register a User and Generate Token

Before running any authenticated tests, you **must** register a user and save the session token to `storage/auth.json`.

You can generate it via:

- UI test:

```
  npx playwright test tests/ui/guest.spec.ts
```

- or API test:
```
  npx playwright test tests/api/guest.spec.ts
```

## 🧪 Running Authenticated API Tests

Run API tests that require authentication:

```
npx playwright test tests/api/auth.spec.ts
```

## 🧪 Running Authenticated UI Tests

Run UI tests that require authentication:

```
npx playwright test tests/ui/auth.spec.ts
```

> ⚠️ **Important:** Make sure the file `storage/auth.json` exists before running these tests.  
> This file is generated after registration and is used as `storageState` for logged-in sessions.

---

## 📊 Test Report

After running the tests, you can also **view a visual test report** using Playwright's built-in reporter.

To open the report, run:

```
npx playwright show-report
```
