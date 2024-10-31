console.log("js linked");

const ulEl = document.getElementById("list1")



// uso axios per fare la chiamata ajax al mio endpoint /posts
axios.get("/posts")
    .then(response => {
        // faccio una variabile dove salvo solo l'array di posts
        const posts = response.data.postsData.posts;
        console.log(posts);
        
        // ciclo forEach per prendere i dati da ogni elemento dell'array
        let markup = ""; 
        posts.forEach(post => {
            // destrutturo post
            const { title, description, image, tags  } = post;
            // markup del list item
            markup += `
            <li class="col my-5 py-2 d-flex flex-column align-items-center bg-light">
                <h2>${title}</h2>
                <hr>
                <h5>${description}</h5>
                <img src="${image}">
                <p>tags: ${tags}</p>
            </li>`
        });

        ulEl.innerHTML = markup;


    })
    .catch(console.error());