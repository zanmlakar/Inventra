import express from "express";
 
const app = express();
const PORT = process.env.PORT;


app.use(express.json());
 
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});