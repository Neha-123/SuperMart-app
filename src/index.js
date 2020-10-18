const app = require('./app');

const port = 3001;

app.listen(port, () => {
    console.log('App is up and running on port', port)
})