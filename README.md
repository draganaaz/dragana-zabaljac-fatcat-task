# Homework Task

## Project Overview

This project involves transitioning an existing React project to TypeScript, implementing a scalable and reusable List Component, a Form Generator Component, and a Page Generator Component. The project is built using modern React practices, TypeScript, Zod for validation, and React Query for data fetching and mutations.

## Clone the repository

```bash
git clone https://github.com/draganaaz/dragana-zabaljac-fatcat-task.git
```

## Installation

Install project dependencies:

1. Open your terminal or command prompt.

2. Navigate to the project directory (homework-task).

3. Run either of the following commands:

-   Using npm:

```bash
npm install
```

-   Using yarn:

```bash
yarn install
```

This command installs all necessary dependencies listed in package.json.

## Running the Project

After installing dependencies, run the following command to start the development server:

```bash
npm run dev
```

or

```bash
yarn dev
```

## Implemented features:

-   List component - generic component that accepts `apiUrl` endpoint and `renderItem` method that will render list using custom render function.
-   Form Generator - creates generic form using React Hook Form and Zod schemas for validation. Uses React Query for handling API calls. Uses custom `Toast` component for displaying success message.
-   Page Generator - dinamically generates different page layouts based on object provided. It maps section and component types to React components and renders them. Appearance can be customized via props.
-   Pre-commit hook (husky) is integrated and ensures code quality by enforcing Typescript an ESLint checks before commits. Prevents commits if any TypeScript or linting errors are detected, maintaining a clean codebase. Enhances team collaboration by maintaining consistent code standards across the project.
