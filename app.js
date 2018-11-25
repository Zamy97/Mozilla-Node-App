const express = require('express');
const app = express()


app.get('/', (req, res) => {
    res.send("This is an app built using Mozilla's tutorial")
});

app.listen(7000, () => {
    console.log("App listening on port 700");
})
