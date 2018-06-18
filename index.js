const express  = require('express');
const app = express();
const path = require('path');

app.use('/dist', express.static(path.resolve(__dirname, './dist')));
app.use('/public', express.static(path.resolve(__dirname, './dist/public')));

app.route('/*').get((req, res) => {
    res.sendFile(path.resolve(__dirname, './src/index.html'));
});

app.listen(process.env.PORT || 5000, () => { console.log('#### App Running ####') })