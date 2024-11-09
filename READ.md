# GetUserInfo Project

This project demonstrates how to fetch user data from an external API using Node.js and JavaScript, handling promises and errors with `async/await`.

## Project Structure

- **`withPromise.js`**: The main script file containing the function to fetch user data from the API.
- **`README.md`**: This file explaining the project, setup, and usage.

## Dependencies

This project uses **Node.js** to run the script. The `fetch` API is used to make HTTP requests to external APIs.

## API Used

The project uses the free JSONPlaceholder API for fetching user data. The JSONPlaceholder API is a fake online REST API for testing and prototyping.

- **Base URL**: `https://jsonplaceholder.typicode.com`
- **Users Endpoint**: `/users/{userId}`

## Installation

### 1. Install Node.js
Make sure you have Node.js installed on your machine. You can download it from the official website: [Node.js](https://nodejs.org/).

### 2. Initialize the Project

If you're starting from scratch, you can initialize a new Node.js project by running:

```bash
npm init -y
