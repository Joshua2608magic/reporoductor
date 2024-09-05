

axios.get('https://leonardoapi.onrender.com/songs')
    .then(function (response) {
        // manejar respuesta exitosa
        console.log(response.data.songs);

        response.data.map((song) => {
            const container = document.getElementById('track-list')

            const div = document.createElement('div')
            div.setAttribute('class', "musica-1")

            div.innerHTML = `
                <img src="${song.path.front}" alt="">

                <div class="music">
                    <h3>${song.title}</h3>
                    <p>${song.author} </p>

                </div>
`

div.appendChild(div)

        })

    })


// console.log(datoString)
// const datoString ="Josue Livingston"
// const datoNumber =7