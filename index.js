const express = require ("express");
const app = express();

require("dotenv").config();

// koneksi ke database 
const mongoose = require ("mongoose")
mongoose.connect(process.env.MONGODB_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// cek koneksi databse 
const cekDB = mongoose.connection;
cekDB.on("error", (error) => {
    console.log(error);
});

cekDB.once("open", () => {
    console.log("Database Connected!")
});

app.use(express.json());
app.use(express.urlencoded({extended: true }));


// ? user router 
const userRouter = require("./routes/userRoute");
app.use(userRouter);


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server ini berjalan di http://localhost:${PORT}`);
});