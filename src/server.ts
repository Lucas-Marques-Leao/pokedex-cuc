import app from './app';
import 'dotenv/config';
import './database';

app.listen(3333, () => {
    console.log('App Started')
})