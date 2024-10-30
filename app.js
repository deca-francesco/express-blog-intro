// importo express
const express = require("express");
// assegno il metodo express alla variabile app
const app = express();
// dichiaro l'host (localhost)
const host = "http://127.0.0.1"
// dichiaro che la port sarà la numero 3000
const port = 3000;


// server start
app.listen(port, () => {
    console.log(`Il server sta girando su ${host}:${port}`);
})

// express route "/" = home page
app.get("/", (req, res) => {
    // creo il markup
    const markup = `<h1>Benvenuto nel mio Blog!</h1>`;
    res.send(markup);
})




const posts = [
    {
        title: "Viaggio in montagna",
        description: "Panorama mozzafiato, sentieri immersi nel verde",
        image: "/assets/img/montagne.jpeg",
        tags: ["viaggio", "natura", "montagna", "trekking"]
    },
    {
        title: "Ricetta deliziosa",
        description: "Pasta fresca, sugo al pomodoro e basilico",
        image: "/assets/img/pasta.webp",
        tags: ["cucina", "ricette", "italiana", "pranzo"]
    },
    {
        title: "Cinema!",
        description: "Nuovo film di azione, pieno di colpi di scena",
        image: "/assets/img/film.jpeg",
        tags: ["cinema", "film", "azione", "spettacolo"]
    },
    {
        title: "Cani adorabili",
        description: "Cuccioli giocherelloni e coccolosi",
        image: "/assets/img/cuccioli.jpeg",
        tags: ["animali", "cani", "cuccioli", "gioco"]
    },
    {
        title: "Leggere un buon libro",
        description: "Avventura fantastica in un mondo magico",
        image: "/assets/img/libro.webp",
        tags: ["libri", "fantasy", "avventura", "relax"]
    }
];

app.get("/posts", (req, res) => {
    const postsJson = {
        posts,
        count: posts.length
    }
    res.json(postsJson);
})

