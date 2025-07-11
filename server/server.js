import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/db.js';
import router from './routes/urlRouter.js';


const app = express();
const port = 3000;

await connectDB()

app.use(express.json())
app.use(
  cors({
    origin: "http://localhost:5173", // عنوان الفرونت
    methods: ["GET", "POST", "PUT", "DELETE"], // الطرق المسموحة
  })
);


app.get('/', (req, res) => res.send('Server is live'))
app.use('/', router);  

app.listen(port , ()=> console.log('Server listening '))