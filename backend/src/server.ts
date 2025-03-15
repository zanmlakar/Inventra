import express from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./utils/auth";
 
const app = express();
const PORT = process.env.PORT;
 
app.all("/api/auth/*", toNodeHandler(auth));

app.use(express.json());
 
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});