# MERN Estate

A full-stack real estate application built with the MERN (MongoDB, Express, React, Node.js) stack.

## Features

- User authentication (Sign up, Sign in, Sign out)
- Property listings (Create, Read, Update, Delete)
- Search properties with filters
- User profile management
- Image upload functionality
- Responsive design

## Tech Stack

### Frontend
- React.js
- Redux Toolkit for state management
- Tailwind CSS for styling
- React Router for navigation
- Vite as build tool

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Cookie-parser for cookie management

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18 or higher)
- MongoDB
- Git

## Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/mern-estate.git
cd mern-estate
```

2. Install dependencies for backend
```bash
cd api
npm install
```

3. Install dependencies for frontend
```bash
cd ../client
npm install
```

4. Set up environment variables
Create a `.env` file in the root directory and add:
```env
MONGO=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## Running the Application

1. Start the backend server
```bash
cd api
npm start
```

2. Start the frontend development server
```bash
cd client
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:3001

## Docker Support

To run the application using Docker:

1. Build the Docker image
```bash
docker build -t mern-estate-dev .
```

2. Run the container
```bash
docker run -it -p 5173:5173 -p 3001:3001 --env-file .env mern-estate-dev
```

## Deployment

The application can be deployed using various platforms:

### Render.com (Recommended)
1. Fork this repository
2. Create a new Web Service on Render
3. Connect your GitHub repository
4. Add environment variables
5. Deploy

Configuration is already set up in `render.yaml`

### Alternative Deployment Options
- Railway.app
- DigitalOcean
- Heroku

## Project Structure

```
mern-estate/
├── api/                # Backend directory
│   ├── controllers/    # Route controllers
│   ├── models/        # MongoDB models
│   ├── routes/        # API routes
│   ├── utils/         # Utility functions
│   └── index.js       # Entry point
├── client/            # Frontend directory
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   └── App.jsx
│   └── index.html             
├── .gitignore
├── docker-compose.yml
├── Dockerfile
└── README.md
```

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the ISC License.

## Contact

Your Name - your.email@example.com
Project Link: https://github.com/your-username/mern-estate
