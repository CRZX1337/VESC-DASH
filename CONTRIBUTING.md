# Contribution Guidelines for VESC Dash

Thank you for your interest in contributing to VESC Dash! We appreciate your help in making this app better for everyone.

This document outlines the guidelines for contributing to the VESC Dash project. Following these guidelines helps maintain consistency and makes the review process smoother.

## How to Contribute

There are several ways you can contribute:

*   **Reporting Bugs:** If you find a bug, please open an issue on GitHub. Be sure to include as much detail as possible, including:
    *   Steps to reproduce the bug
    *   Expected behavior
    *   Actual behavior
    *   Device information (model, OS version if applicable)
    *   Relevant logs (if available)

*   **Suggesting Enhancements:** If you have an idea for a new feature or improvement, please open an issue on GitHub. Clearly describe your suggestion and why you think it would be beneficial.

*   **Contributing Code:** If you want to contribute code, please follow these steps:

    1.  **Fork the repository.**
    2.  **Create a new branch** for your changes (e.g., `feature/new-feature` or `bugfix/fix-issue-123`).
    3.  **Make your changes.** Adhere to the coding style and conventions used in the project (see below).
    4.  **Write tests** for your changes if applicable.
    5.  **Commit your changes** with clear and concise commit messages. Use the present tense and follow the conventional commit format (e.g., `feat: Add new feature`, `fix: Fix bug in calculation`).
    6.  **Push your branch** to your forked repository.
    7.  **Open a Pull Request (PR)** against the `main` branch of the main repository.

## Coding Style and Conventions

*   **Languages:** TypeScript, JavaScript, CSS
*   **Framework/Library (if applicable):** (Specify if you use React, Vue, Angular, etc.)
*   **Code Formatting:**
    *   **TypeScript/JavaScript:** Use a consistent style guide like Airbnb, Standard, or Google. Enforce this with a linter like ESLint and a formatter like Prettier.
    *   **CSS:** Use a consistent naming convention (e.g., BEM, SMACSS) and a CSS-in-JS solution (like styled-components, Emotion) or a preprocessor (like Sass, Less) if applicable. Use a linter like Stylelint.
*   **Comments:** Write clear and concise comments to explain complex logic or non-obvious code. JSDoc is recommended for documenting functions and classes.
*   **Naming Conventions:** Use descriptive and consistent naming for variables, functions, classes, and CSS selectors.
*   **Testing:** Write unit and/or integration tests for new features and bug fixes. Use a testing framework like Jest, Mocha, or Cypress.
*   **Dependencies:** If you introduce new dependencies, please justify their use and ensure they are compatible with the project's license.

## Commit Message Guidelines

*   Use the present tense ("Add feature" not "Added feature").
*   Use the imperative mood ("Fix bug" not "Fixes bug").
*   Limit the first line to 72 characters or less.
*   Reference related issues in the commit message (e.g., `Fixes #123`).

