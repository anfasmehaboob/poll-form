# Poll Form - Vertical Multi-Step Polling

A vertical multi-step poll form for collecting user responses to a series of questions.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Testing](#testing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Demo

Include a link or gif demonstrating the functionality of your poll form.

## Features

- Vertical multi-step form for a smooth user experience.
- Dynamic rendering of questions based on the current step.
- Responsive design for various screen sizes.
- Form validation for ensuring accurate responses.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/anfasmehaboob/poll-form.git

## Usage

2. **Navigate to the project directory:**

    ```bash
    cd poll-form
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Start the development server:**

    ```bash
    npm start
    ```

5. Open your browser and visit [http://localhost:3000](http://localhost:3000) to see the poll form in action.

## Customization

You can customize the poll form by modifying the configuration files, styles, and components as needed.

### Configuration

- Update the questions and options in the `src/config/questions.js` file to match your poll.

### Styling

- Customize the appearance of the poll form by modifying the styles in the `src/styles` directory.

### Components

- Extend or modify React components in the `src/components` directory for additional features or changes.

## Testing

1. Run tests:

    ```bash
    npm test
    ```

2. View test results and coverage.


## Build

1. **Build the project:**

    ```bash
    npm run build
    ```

2. The built project will be available in the `build` directory.

## Serving Locally

If you have not installed `serve` globally, you can do so by running:

```bash
npm install -g serve
```
Then, serve the built project locally:

```bash
serve -s build
```

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Special thanks to contributors who have helped improve this project.
