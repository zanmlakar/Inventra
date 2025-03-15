import express from 'express';
import env from 'dotenv';

const app = express();
env.config();
const PORT = process.env.PORT;
app.listen(8080,()=>{
    console.log(`listening on port ${PORT}`);
})