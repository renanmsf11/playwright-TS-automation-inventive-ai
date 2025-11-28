
# 💻 Automated Testing Project with Playwright - Inventive AI
---


## 💡 Test Plan file 

tests/
│
├── documents/ QA CHALLENGE - Inventive AI.pdf

- 

## 🧱 Project Structure

```
tests/
│
├── documents/              # files to upload in project creation feature
│
│
├── e2e/                     # UI end-to-end tests]
│   ├── login.spec.js
├── pages/                   # Page Object Model (POM)
│   ├── loginPage.ts
│   ├── projectPage.ts
│  
```

---

## 🎯 Key Practices and Patterns

### 📌 POM - Page Object Model
- The files in the `pages/` folder represent pages of the application.
- All selectors, actions, and interactions are encapsulated in their corresponding classes.
- **Goal:** Separate interaction logic from test logic, making maintenance and method reuse easier.

---

### 📌 DDT - Simple Data-Driven Testing
- Input data like email, password, name, etc. are dynamically generated inside the POMs.
- Avoids data duplication and tight coupling with the `.spec` tests.


---

## 💡 Best Practices Applied

| Practice  | Description |
|----------|-------------|
| **DRY** (Don't Repeat Yourself) | Reusable code in POM classes, avoiding duplication. |
| **KISS** (Keep It Simple, Stupid) | Short, objective, and intuitive methods. |
| **YAGNI** (You Aren’t Gonna Need It) | Only the necessary was implemented. Nothing extra. |
| **Single Responsibility** | Each file/test has a clear and unique purpose (e.g. `login.spec.js` only tests login). |

---

## 🚀 Running the Tests


01 - Clone or download ZIP of this REPO;
02 - Open in a code editor (Vscode for example);
03 - Run commands bellow


```bash
# Install dependencies
npm install
npx playwright install

# Run all tests
npx playwright test

# Run tests from a specific folder
npx playwright test tests/e2e

# Generate HTML report
npx playwright show-report


# Run all test only in chromium browser
npx playwright test --project=chromium


# Run tests in UI mode
npx playwright test --ui

```

---

## 🔧 Tools Used

- **Playwright**
- **TypeScript** (used in POMs and configs)
- **Jest-like assertions** (`expect`)



