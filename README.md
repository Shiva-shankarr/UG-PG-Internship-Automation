# UG-PG Internship Automation System

A full-stack web application for automating the internship management process for undergraduate and postgraduate students. This system streamlines the entire workflow from application submission to status tracking, enabling efficient communication between students and faculty.

---

## Features

- Student internship application management
- Faculty dashboard for internship oversight
- Real-time status tracking and notifications
- Secure authentication system with role-based access
- Automated workflow management
- Document submission and tracking
- Comprehensive profile management

---

## Tech Stack

### Backend
- Node.js - Server runtime environment
- Express.js - Web framework
- MongoDB Atlas - Cloud database
- REST APIs - API architecture

### Frontend
- React 18 - UI library
- React Router v6 - Client-side routing
- Bootstrap 5 - CSS framework
- Axios - HTTP client

---

## Prerequisites

Before running this project, ensure you have the following installed:

- Node.js (v14 or higher)
- npm (Node Package Manager)
- MongoDB Atlas account (for database)
- Git (for version control)

---

## Installation and Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/Shiva-shankarr/UG-PG-Internship-Automation.git
cd UG-PG-Internship-Automation
```

### Step 2: Backend Setup

Navigate to the backend directory:
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory with the following environment variables:
```env
MONGODB_URI=your_mongodb_connection_string
PORT=4000
NODE_ENV=development
```

### Step 3: Frontend Setup

Navigate to the frontend directory:
```bash
cd ../client
npm install
```

---

## Running the Application

### Start the Backend Server

Open a terminal and run:
```bash
cd backend
npm start
```

The backend server will run on `http://localhost:4000`

### Start the Frontend Development Server

Open another terminal and run:
```bash
cd client
npm start
```

The frontend application will open in your default browser at `http://localhost:3000`

---

## Project Structure

```
UG-PG-Internship-Automation/
├── backend/
│   ├── API/              # API route definitions
│   ├── request/          # Request handlers and logic
│   ├── models/           # Database models
│   ├── server.js         # Main server configuration
│   ├── .env              # Environment variables
│   └── package.json      # Backend dependencies
├── client/
│   ├── public/           # Public assets
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── App.js        # Main React application
│   │   ├── RootLayout.js # Root layout component
│   │   └── index.js      # Entry point
│   └── package.json      # Frontend dependencies
├── request.http          # API endpoint testing file
└── README.md             # Project documentation
```

---

## API Endpoints

### Student Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/student_api/register` | Register a new student account |
| POST | `/student_api/login` | Student login authentication |
| GET | `/student_api/profile` | Retrieve student profile information |
| POST | `/student_api/apply` | Submit internship application |
| GET | `/student_api/applications` | View application status and history |
| PUT | `/student_api/update` | Update student profile |

### Faculty Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/faculty_api/login` | Faculty login authentication |
| GET | `/faculty_api/applications` | View all student applications |
| PUT | `/faculty_api/review` | Review and respond to applications |
| GET | `/faculty_api/dashboard` | Access faculty dashboard |
| PUT | `/faculty_api/status` | Update application status |

---

## Environment Variables

Create a `.env` file in the backend directory with the following:

```env
# Database Configuration
MONGODB_URI=mongodburl

# Server Configuration
PORT=4000
NODE_ENV=development

# JWT Configuration (if applicable)
JWT_SECRET=your_jwt_secret_key

# Email Configuration (optional)
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_password
```

---

## Available NPM Scripts

### Backend Scripts
```bash
npm start           # Start the backend server
npm run dev        # Start with nodemon for development
npm test           # Run tests
```

### Frontend Scripts
```bash
npm start           # Start the development server
npm run build       # Build for production
npm run test        # Run tests
```

---

## Deployment

### Backend Deployment

Deploy the backend on platforms like Render, Heroku, or Railway:

1. Push your code to GitHub
2. Connect your repository to the deployment platform
3. Set environment variables in the platform dashboard
4. Deploy the application

### Frontend Deployment

Deploy the frontend on platforms like Vercel or Netlify:

1. Build the production version:
   ```bash
   npm run build
   ```
2. Connect your repository to Vercel/Netlify
3. Configure build settings and deploy

---

## Database Schema

### Student Collection
- Student ID
- Full Name
- Email
- Password (hashed)
- Department
- Semester
- Phone Number
- Applied Internships
- Application Status
- Created Date

### Faculty Collection
- Faculty ID
- Full Name
- Email
- Password (hashed)
- Department
- Designation
- Created Date

### Application Collection
- Application ID
- Student ID
- Internship Details
- Status (Pending, Approved, Rejected)
- Faculty Comments
- Submission Date
- Review Date

---

## Security Features

- Password hashing using bcryptjs
- JWT-based authentication (if implemented)
- Input validation and sanitization
- CORS protection
- Secure environment variable management
- MongoDB connection with authentication

---

## Troubleshooting

### MongoDB Connection Issues
- Verify your MongoDB Atlas connection string
- Ensure your IP address is whitelisted in MongoDB Atlas
- Check your network connectivity

### Port Already in Use
- Change the PORT in `.env` file
- Or kill the process using the port:
  ```bash
  # Windows
  netstat -ano | findstr :4000
  taskkill /PID <PID> /F
  
  # Mac/Linux
  lsof -ti:4000 | xargs kill -9
  ```

### Module Not Found Errors
- Delete `node_modules` folder and package-lock.json
- Run `npm install` again

---

## Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository
2. Create your feature branch:
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

---

## License

This project is open source and available under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

## Authors

B. Shiva Shankar

- GitHub: [@Shiva-shankarr](https://github.com/Shiva-shankarr)
- Email: badavathshivshankar08@gmail.com

---

## Acknowledgments

- MongoDB Atlas for providing cloud database hosting
- React community for the excellent frontend library
- Express.js team for the robust backend framework
- Bootstrap team for the responsive CSS framework
- All contributors and supporters of this project

---

## Support

If you have any questions or need assistance, feel free to open an issue on GitHub or contact the project maintainers.
