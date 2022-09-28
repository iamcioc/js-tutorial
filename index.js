const h1 = document.querySelector("h1")

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        data.map((item) => {
            const h2 = document.createElement("h2");
            const h3 = document.createElement("h3");
            const h4 = document.createElement("h4");
            h2.innerHTML = `Title: ${item.title}`;
            h3.innerHTML = `ID: ${item.id}`;
            h4.innerHTML = `Body: ${item.body}`;

            h1.appendChild(h2);
            h1.appendChild(h3);
            h1.appendChild(h4);

        });
    })
    .catch((err) => console.log(err));
