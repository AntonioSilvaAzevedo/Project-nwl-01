import express from 'express';
import cors from 'cors'
import path from 'path'
import routes from './routes/routes';
import { errors } from 'celebrate'

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes)

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

console.log('Server UP on port 3333')

app.use(errors())
 
app.listen(3333);

