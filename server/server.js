const express = require('express');
const app = express();
const router=require("./router/auth-router");
const connectDb=require("./utils/db");
require("dotenv").config();


app.use(express.json());//isks matlab hai aap json used kar sakte ho
app.use("/api/auth",router); //ab me router use kar raha hu niche dhyan mat dijiye 
//localhost:5000/api/auth  hame router ke liye yahi run karna hai 
// app.get("/", (req, res) => {
//     res.status(200).send("welcome to best mern series bye thapa technical ");
// });
// app.get("/register", (req, res) => {
//     res.status(200).send("Welcome to register page a");
// });

const PORT=5000;
connectDb().then(()=>{
    app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
});
});








