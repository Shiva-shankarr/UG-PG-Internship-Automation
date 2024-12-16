const express = require('express');
const app = express();
const mongoClient = require('mongodb').MongoClient;
const path = require('path');
const studentApp = require('./API/student-api');
const facultyApp = require('./API/faculty-api');
const password = encodeURIComponent("Blohith@123");
const cors = require('cors');
app.use(cors());

// Middleware to serve static files
app.use(express.static(path.join(__dirname, '../client/build')));

// Middleware to parse JSON
app.use(express.json());

// API routes
app.use('/faculty_api', facultyApp);
app.use('/student_api', studentApp);

// MongoDB connection
mongoClient.connect(`mongodb+srv://lohithsatyavenkat:${password}@cluster1.x9t3f7j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`)
    .then(client => {
        const mydatabase = client.db('mydatabase');
        const studentDatabase = client.db('studentDatabase');
        const mycollection = mydatabase.collection('mycollection');
        const studentcollection = mydatabase.collection('studentcollection');
        const facultycollection = mydatabase.collection('facultycollection');
        const interncollection= studentDatabase.collection('internCollection')
        app.set('mycollection', mycollection);
        app.set('studentcollection', studentcollection);
        app.set('facultycollection', facultycollection);
        app.set('interncollection', interncollection);
        console.log("DB connected");
    })
    .catch(err => {
        console.log(err);
    });

// Fallback to serve index.html for client-side routing
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Start the server
app.listen(4000, () => {
    console.log("Server connected and running on port 4000");
});
