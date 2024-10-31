// importo express
const express = require("express");
// assegno il metodo express alla variabile app
const app = express();
// dichiaro l'host (localhost)
const host = "http://127.0.0.1"
// dichiaro che la port sarà la numero 3000
const port = 3000;

// importo il controller di posts
const postsController = require("./controllers/posts_controller.js")




// server start
app.listen(port, () => {
    console.log(`Il server sta girando su ${host}:${port}`);
})

// express route "/" = home page
app.get("/", (req, res) => {
    // creo il markup
    const markup = `<h1>Benvenuto nel mio Blog!</h1>
    <h2><a href="/posts">guarda i miei post</a></h2>`;
    res.send(markup);
})


// rotta posts che usa il metodo index del controller posts
app.get("/posts", postsController.index)

