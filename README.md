# Simple Calculator API

This Simple Calculator API is built using Node.js and Express.js. It provides a basic framework for a web service that can perform addition operations. The API listens for both GET and POST requests at the root (`/`) path.

## Features

- **GET `/addTwoNumbers`**: Accepts two numbers as query parameters and returns their sum.

- **GET `/subtractTwoNumbers`**: Accepts two numbers as query parameters and returns their difference.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Usage

To test the functionality of the API, you can use any API testing tool such as Postman or send requests using `curl` from the command line.

- **Testing GET `/addTwoNumbers`** (Replace `3000` with your application's port):

  ```sh
  curl http://localhost:3000/addTwoNumbers?num1=5&num2=3
  ```

- **Testing GET `/subtractTwoNumbers`** (Replace `3000` with your application's port):
  ```sh
  curl http://localhost:3000/subtractTwoNumbers?num1=5&num2=3
  ```
