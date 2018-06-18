const express  = require('express');
const app = express();
const path = require('path');

app.use('/js', express.static(path.resolve(__dirname, './webpack/dist')));

app.route('/*').get((req, res) => {
    res.sendFile(path.resolve(__dirname, './src/index.html'));
});

app.listen(process.env.PORT || 5000, () => { console.log('#### App Running ####') })