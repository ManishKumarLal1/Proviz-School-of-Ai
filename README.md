
# Proviz School of Ai

This project is a full-stack web application for the Proviz School of AI, an educational platform. It includes a landing page, a dynamic application form, and an admin panel to view form submissions. The backend stores application data in MongoDB and allows for easy data retrieval through an admin interface.


## Table of Content
 [Project Overview](#project-overview)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Frontend Setup](#frontend-setup)
- [Backend Setup](#backend-setup)
- [License](#license)

## Project Overview
The Proviz School of AI platform provides users with an interactive way to learn more about courses offered by the institute. Users can submit an application form, and the admin panel allows viewing these submissions. 
## Features
- **Landing Page**: Modern, responsive UI with sections for about, features, testimonials, and contact.
- **Application Form**: Popup form that allows users to apply for courses, with data stored in MongoDB.
- **Admin Panel**: A secure interface for viewing submitted applications.

---
## Technologies
- **Frontend**: React, Tailwind CSS, Axios
- **Backend**: Node.js, Express, MongoDB (Mongoose)
- **Database**: MongoDB
- **API Testing**: Postman (optional)


---
## Getting Started
## Prerequisites
- Node.js and npm installed
- MongoDB installed and running locally or using MongoDB Atlas

---
## Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd Frrontend
2. Install Dependencies:
    ```bash
   npm install
3. Run the frontend application:
    ```bash
   npm run dev

4. Open http://localhost:3000 to view it in the browser.

## Backend Setup
1. Navigate to the backend director:
    ```bash
   cd Backend

2. Install dependencies:
    ```bash
   npm install

3. Update MongoDB connection:
In server.js, update mongoose.connect('mongodb://127.0.0.1:27017/your_database_name') with your MongoDB URI.

4. Run the backend server:
    ```bash
   npm server.js

5. The server will run on http://localhost:5000.

## License

[MIT](https://choosealicense.com/licenses/mit/)

This `README.md` provides clear, organized information to help users set up and navigate your project. Adjust any specifics that fit your project better, and you’ll be good to go!