# UG-PG Internship Automation System

A full-stack web application for automating the internship management process for undergraduate and postgraduate students.

## 🚀 Features

- Student internship application management
- Faculty dashboard for internship oversight
- Real-time status tracking
- Secure authentication system
- Automated workflow management
- Document submission and tracking

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- REST APIs

### Frontend
- React 18
- React Router v6
- Bootstrap 5
- Axios

## 📋 Prerequisites

Before running this project, make sure you have the following installed:
- Node.js (v14 or higher)
- npm (Node Package Manager)
- MongoDB Atlas account
- Git

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shiva-shankarr/UG-PG-Internship-Automation.git
   cd UG-PG-Internship-Automation
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```
   Create a `.env` file in the backend directory with your MongoDB connection string:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=4000
   ```

3. **Frontend Setup**
   ```bash
   cd ../client
   npm install
   ```

## 🚀 Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm start
   ```
   The server will run on http://localhost:4000

2. **Start the Frontend Development Server**
   ```bash
   cd client
   npm start
   ```
   The application will open in your default browser at http://localhost:3000

## 📁 Project Structure

```
UG-PG-Internship-Automation/
├── backend/
│   ├── API/           # API routes
│   ├── request/       # Request handlers
│   ├── server.js      # Main server file
│   └── package.json   # Backend dependencies
├── client/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── App.js      # Main React component
│   │   └── RootLayout.js
│   └── package.json   # Frontend dependencies
└── request.http       # API testing file
```

## 🔑 API Endpoints

### Student API
- `POST /student_api/register` - Register new student
- `POST /student_api/login` - Student login
- `GET /student_api/profile` - Get student profile
- `POST /student_api/apply` - Submit internship application

### Faculty API
- `POST /faculty_api/login` - Faculty login
- `GET /faculty_api/applications` - View internship applications
- `PUT /faculty_api/review` - Review student applications

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Authors

- B.Shiva Shankar

## 🙏 Acknowledgments

- MongoDB Atlas for database hosting
- React team for the amazing frontend library
- Express.js team for the backend framework
- All contributors who have helped with the project

