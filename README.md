# Remote-Team-Collaboration-Tool

A web application that combines project management, real-time chat, and file sharing to enhance remote team collaboration. Built with Node.js, Express, MongoDB, and EJS, this app supports user authentication and integrates real-time features using WebSockets.

## Features

- **Project Management:** Manage tasks and projects effectively.
- **Real-Time Chat:** Communicate with team members in real-time.
- **File Sharing:** Upload and share files securely.
- **User Authentication:** Secure login and registration using Passport.js.

## Technologies Used

- **Frontend:**
  - HTML, CSS, JavaScript
  - EJS (Embedded JavaScript templates)

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (via Mongoose)
  - Passport.js for authentication
  - WebSockets for real-time features

## Prerequisites

- Node.js (>= 16.x.x)
- MongoDB (local or Atlas)
- npm (Node package manager)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Agent-coder48/remote-team-collaboration.git
   cd remote-team-collaboration
Install dependencies:

bash:
npm install
Create a .env file in the root directory and add your MongoDB URI and session secret:

.env
MONGO_URI=your_mongo_connection_string
SESSION_SECRET=your_session_secret
Start the application:

bash
npm start
The application will run on http://localhost:3000.

Project Structure
remote-team-collaboration/
├── models/
│   └── User.js           # User model
├── routes/
│   ├── auth.js           # Authentication routes
│   └── index.js          # Main routes
├── config/
│   └── passport.js       # Passport configuration
├── views/
│   ├── index.ejs         # Home page
│   ├── login.ejs         # Login page
│   ├── register.ejs      # Register page
│   └── dashboard.ejs     # Dashboard page
├── app.js                # Main server file
├── package.json          # npm configuration file
└── .env                  # Environment variables
Usage
Home Page: Navigate to http://localhost:3000 to view the home page.
Register: Create a new account by going to http://localhost:3000/register.
Login: Log in with an existing account by going to http://localhost:3000/login.
Dashboard: Access the project management, chat, and file sharing features after logging in.

Contributing
Contributions are welcome! Please follow these steps to contribute:
Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature-branch).
Open a pull request.
