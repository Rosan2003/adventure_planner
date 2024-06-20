const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
const trekRouter = require('./routes/trekRouter');
const userRouter = require('./routes/userRouter');

mongoose.connect("mongodb+srv://rosanmgr1996:hirosanishere123@cluster0.k1iarvv.mongodb.net/Trek")
.then(()=>console.log("db connected"))
.catch((err)=>console.log(err.message));

app.use('/api/treks',trekRouter);
app.use('/api/users/',userRouter);

app.listen(5000,()=>console.log("server is up!!"));