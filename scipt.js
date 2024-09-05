

axios.get('https://api.institutoalfa.org/api/songs')
    .then(function (response) {
        // manejar respuesta exitosa
        console.log(response.data.songs);

        response.data.songs.map((song) => {
            const container = document.getElementById('track-list')

            const div = document.createElement('div')
            div.setAttribute('class', "musica-1")

            div.innerHTML = `
                <img src="https://api.institutoalfa.org/api/songs/image/${song.image.filename}" alt="">

                <div class="music">
                    <h3>${song.title}</h3>
                    <p>${song.author} </p>

                </div>
            `

            container.appendChild(div)

        })

    })


// console.log(datoString)
// const datoString ="Josue Livingston"
// const datoNumber =7