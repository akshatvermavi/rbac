# RBAC (Role-Based Access Control)

## Key Features

### React + Vite:
- Utilizes **Vite** for faster development and builds.
- React integration ensures a smooth front-end development experience.

### TypeScript:
- Ensures **type safety** and better development workflows.

### ESLint Setup:
- Includes configuration options for **code linting**.
- Supports both Babel and SWC for **hot module replacement (HMR)** via plugins.

### Website hosted Link:
You can access the live application here: [Website Link](https://rbacwebapp--pr3-amandeva-legend-adde-ggg7cdeg.web.app/signin)

---

## Purpose
This repository provides a minimal yet extensible template for setting up a **React + TypeScript** project using Vite, with a focus on ESLint rules and HMR for efficient development.

---

## File Structure

- Describes the setup and configuration details for the project.
- Provides guidance on expanding ESLint configurations for production use.

### Core Configuration Files:
- **`tsconfig.app.json` & `tsconfig.node.json`:**  
  TypeScript configuration files for app and node environments.
- **`eslint.config.js`:**  
  Configuration for ESLint, including React and stylistic rules.

### Source Code:
- Primarily written in **TypeScript (88.4%)** with supporting **JavaScript, HTML, and CSS**.

---

## Setup Instructions

### Clone the Repository
```bash
git clone https://github.com/akshatvermavi/rbac.git
cd rbac

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
