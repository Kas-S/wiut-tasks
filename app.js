import express from "express";

const PORT = 6969;

const app = express();

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log("Good");
})