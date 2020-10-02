const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')




const app = express()
const port = process.env.PORT || 3000;

const mongoURIlocal = "mongodb://localhost:27017/ShebaAllergyDB";
const mongoURI = "mongodb+srv://admin-zvika:5293612aA!@cluster0.w9hbu.mongodb.net/ShebaAllergyDB";


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
const patientSchema = new mongoose.Schema({
    PatientID: String,
    month: String,
    year: String,
    age: String,
    gender: String,
    relevance: String,
    duration: String,
    family_history: String,
    prothesis: String,
    occupation: String,
    hobbies: String,
    body_parts: [{}],
    standard: String,
    perishable: String,
    cosmetics: String,
    lotions: String,
    plants: String,
    steroids: String,
    textile: String,
    baking: String,
    perfumes: String,
    shoes: String,
    rubber: String,
    acrylic: String,
   
})

const Patient = mongoose.model("Patient", patientSchema)

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.sendFile('public/index.html', { root: __dirname })
});

app.post('/send', (req, res) => {
    var patient=new Patient({
        PatientID:req.body.PatientID,
        month: req.body.month,
        year: req.body.year,
        age: req.body.age,
        gender: req.body.gender,
        relevance: req.body.relevance,
        duration: req.body.duration,
        family_history: req.body.family_history,
        prothesis: req.body.prothesis,
        occupation: req.body.occupation,
        hobbies: req.body.hobbies,
        body_parts: req.body.body_parts,
        standard: req.body.standard,
        perishable: req.body.perishable,
        cosmetics: req.body.cosmetics,
        lotions: req.body.lotions,
        plants: req.body.plants,
        steroids: req.body.steroids,
        textile: req.body.textile,
        baking: req.body.baking,
        perfumes: req.body.perfumes,
        shoes: req.body.shoes,
        rubber: req.body.rubber,
        acrylic: req.body.acrylic
    })
    patient.save()
    console.log(patient)
    res.redirect('/')
});

app.listen(port, () => console.log(`Listening on port ${port}...`));