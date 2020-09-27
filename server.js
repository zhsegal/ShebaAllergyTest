const express = require('express')




const app = express()
const port = process.env.PORT || 3000;



app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile('public/index.html', { root: __dirname })
});


app.listen(port, () => console.log(`Listening on port ${port}...`));