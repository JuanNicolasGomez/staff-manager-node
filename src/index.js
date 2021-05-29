const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const errorHandler = require('./helpers/errorHandler');

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

app.use('/api', require('./router'));

app.use(errorHandler);

const port = process.env.NODE_ENV === 'production' ? 80 : 3000;
app.listen(app.get('port'), () => {
    console.log(`Server on port ${port}`)
})