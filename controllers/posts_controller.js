const postsData = require("../data/posts.js");


// si poteva fare anche const index = () => {}
// visto che questa è una funzione di callback andiamo a prendere variabili esterne alla funzione, che normalmente è un blocco di codice indipendente
function index(req, res) {
    const postsJson = {
        postsData,
        count: postsData.posts.length
    }
    res.json(postsJson);
}


module.exports = {
    index
}