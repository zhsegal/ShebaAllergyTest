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
    standard_0:String,
    standard_1:String,
    standard_2:String,
    standard_3:String,
    perishable_0:String,
    perishable_1:String,
    perishable_2:String,
    perishable_3:String,
    cosmetics_0:String,
    cosmetics_1:String,
    cosmetics_2:String,
    cosmetics_3:String,
    lotions_0:String,
    lotions_1:String,
    lotions_2:String,
    lotions_3:String,
    plants_0:String,
    plants_1:String,
    plants_2:String,
    plants_3:String,
    steroids_0:String,
    steroids_1:String,
    steroids_2:String,
    steroids_3:String,
    textile_0:String,
    textile_1:String,
    textile_2:String,
    textile_3:String,
    baking_0:String,
    baking_1:String,
    baking_2:String,
    baking_3:String,
    perfumes_0:String,
    perfumes_1:String,
    perfumes_2:String,
    perfumes_3:String,
    shoes_0:String,
    shoes_1:String,
    shoes_2:String,
    shoes_3:String,
    rubber_0:String,
    rubber_1:String,
    rubber_2:String,
    rubber_3:String,
    acrylic_0:String,
    acrylic_1:String,
    acrylic_2:String,
    acrylic_3:String,
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
        acrylic: req.body.acrylic,
        standard_0:req.body.standard_0,
        standard_1:req.body.standard_1,
        standard_2:req.body.standard_2,
        standard_3:req.body.standard_3,
        perishable_0:req.body.perishable_0,
        perishable_1:req.body.perishable_1,
        perishable_2:req.body.perishable_2,
        perishable_3:req.body.perishable_3,
        cosmetics_0:req.body.cosmetics_0,
        cosmetics_1:req.body.cosmetics_1,
        cosmetics_2:req.body.cosmetics_2,
        cosmetics_3:req.body.cosmetics_3,
        lotions_0:req.body.lotions_0,
        lotions_1:req.body.lotions_1,
        lotions_2:req.body.lotions_2,
        lotions_3:req.body.lotions_3,
        plants_0:req.body.plants_0,
        plants_1:req.body.plants_1,
        plants_2:req.body.plants_2,
        plants_3:req.body.plants_3,
        steroids_0:req.body.steroids_0,
        steroids_1:req.body.steroids_1,
        steroids_2:req.body.steroids_2,
        steroids_3:req.body.steroids_3,
        textile_0:req.body.textile_0,
        textile_1:req.body.textile_1,
        textile_2:req.body.textile_2,
        textile_3:req.body.textile_3,
        baking_0:req.body.baking_0,
        baking_1:req.body.baking_1,
        baking_2:req.body.baking_2,
        baking_3:req.body.baking_3,
        perfumes_0:req.body.perfumes_0,
        perfumes_1:req.body.perfumes_1,
        perfumes_2:req.body.perfumes_2,
        perfumes_3:req.body.perfumes_3,
        shoes_0:req.body.shoes_0,
        shoes_1:req.body.shoes_1,
        shoes_2:req.body.shoes_2,
        shoes_3:req.body.shoes_3,
        rubber_0:req.body.rubber_0,
        rubber_1:req.body.rubber_1,
        rubber_2:req.body.rubber_2,
        rubber_3:req.body.rubber_3,
        acrylic_0:req.body.acrylic_0,
        acrylic_1:req.body.acrylic_1,
        acrylic_2:req.body.acrylic_2,
        acrylic_3:req.body.acrylic_3
        
    })
    patient.save()
    console.log(patient)
    res.redirect('/')
});

app.listen(port, () => console.log(`Listening on port ${port}...`));