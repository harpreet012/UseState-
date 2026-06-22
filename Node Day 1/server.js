const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("this is home page");
});

app.get("/about", (req, res) => {
    res.send(`
        <html>
            <head></head>
            <body>
                <h1>This is About page</h1>
                <button>Click</button>
            </body>
        </html>`
    );
});

app.get("/contact", (req, res) => {
    res.send("this is contact page");
});

app.listen(3100, () => {
    console.log("server is running in 3100");
});