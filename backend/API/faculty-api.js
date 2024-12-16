const express=require('express')
const facultyApp=express.Router()
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken')
const expressAsyncHandler=require('express-async-handler')
facultyApp.use((req,res,next)=>{
    // authorcollection=req.app.get('authorcollection')
    // articlescollection=req.app.get('articlescollection')
    mycollection=req.app.get('mycollection')
    facultycollection=req.app.get('facultycollection')    
    interncollection=req.app.get('interncollection')
    next()  
})
//test one
facultyApp.get('/testit',expressAsyncHandler(async(req,res)=>{
    res.send({message:"successfully requested"})
}))


facultyApp.post('/register', async (req, res) => {
    let faculty = req.body;
    
    // Check for existing username
    const newfaculty = await facultycollection.findOne({ username: faculty.username });
    console.log(newfaculty);
    
    if (newfaculty != null) {
      res.send({ message: "User Exist" });
    } else {
      // Hash password
      const hashspass = await bcryptjs.hash(faculty.password, 10);
      faculty.password = hashspass;
      await facultycollection.insertOne(faculty);
      res.send({ message: "Faculty created" });
    }
  });

//student login
facultyApp.post('/login', expressAsyncHandler(async (req, res) => {
    const facultyCred = req.body;
    console.log('faculty login ',req.body)
    const faculty = await facultycollection.findOne({ username: facultyCred.username });
    if (faculty === null) {
        res.send({ message: "not a valid username" });
    } else {
        const status = await bcryptjs.compare(facultyCred.password, faculty.password);
        if (status === false) {
            res.send({ message: "Invalid password" });
        } else {
            const signedToken = jwt.sign({ username: faculty.username }, "secretkey", { expiresIn: '1h' });
            res.send({ message: "login successful", token: signedToken, user: faculty });
        }
    }
}));
//get internships
facultyApp.get('/internships', async (req, res) => {
    try {
      const internships = await db.collection('internships').find({}).toArray();
      res.json(internships);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  facultyApp.post('/internships', async (req, res) => {
    try {
      const filter = {};
  
      if (req.body.name) {
        filter.Name = { $regex: new RegExp(req.body.name, 'i') }; // Case-insensitive regex
      }
      if (req.body.company) {
        filter['Internship Offered Company Name'] = { $regex: new RegExp(req.body.company, 'i') };
      }
      if (req.body.stipend) {
        filter['Monthly Stipend'] = { $eq: parseInt(req.body.stipend) };
      }
      if (req.body.branch) {
        filter.Branch = req.body.branch;
      }
      if (req.body.year) {
        filter.Year = req.body.year;
      }
      if (req.body.section) {
        filter.Section = req.body.section;
      }
      if (req.body.location) {
        filter['Internship Offered Company Address'] = { $regex: new RegExp(req.body.location, 'i') };
      }
  
      const internships = await interncollection.find(filter).toArray();
      res.json(internships);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
module.exports=facultyApp