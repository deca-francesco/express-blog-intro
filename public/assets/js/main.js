console.log("js linked");

const ulEl = document.getElementById("list1");

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
            const { title, description, image, tags } = post;
            // markup del list item
            markup += `
            <li class="col my-5 py-2 d-flex flex-column align-items-center bg-light">
                <h2 class="py-3">${title}</h2>
                <h5>${description}</h5>
                <img src="${image}">
                <p class="col-10 pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eos necessitatibus impedit quaerat accusantium ullam quasi, culpa asperiores. Sint quibusdam numquam sequi eos. Possimus expedita fugit sint eos reprehenderit veniam.</p>
                <p>tags: ${tags}</p>
            </li>`
        });

        ulEl.innerHTML = markup;


    })
    .catch(console.error());