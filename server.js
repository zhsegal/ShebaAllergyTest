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
    age: String,
    gender: String,
    diagnosis: String,
    allergen1: String,
    allergen1_value: String,
    allergen2: String,
    allergen2_value: String,
    allergen3: String,
    allergen3_value: String,
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
        age:req.body.age,
        gender:req.body.gender,
        diagnosis:req.body.diagnosis,
        allergen1:req.body.allergen1,
        allergen1_value:req.body.allergen1_value,
        allergen2:req.body.allergen2,
        allergen2_value:req.body.allergen2_value,
        allergen3:req.body.allergen3,
        allergen3_value:req.body.allergen3_value,
    })
    patient.save()
    console.log(req.body)
    res.redirect('/')
});

app.listen(port, () => console.log(`Listening on port ${port}...`));