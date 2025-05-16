const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/app', (req, res) => {
    res.sendFile('https://jibonhossen.pages.dev/');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
