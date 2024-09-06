const query = new URLSearchParams(window.location.search).get("query")

axios.get('https://api.institutoalfa.org/api/songs?query=' + query)
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
            div.addEventListener("click", () => {

                console.log(song.litle)

                document.getElementById("current-song-image").setAttribute("src", `https://api.institutoalfa.org/api/songs/image/${song.image.filename}`)
                document.getElementById("current-song-audio").setAttribute("src", `https://api.institutoalfa.org/api/songs/audio/${song.audio.filename}`)
               
                document.getElementById("current-song-litle").innerHTML = (song.title)
                document.getElementById("current-song-arstic").innerHTML =(song.author)
            })

            container.appendChild(div)
        })

    })


// console.log(datoString)
// const datoString ="Josue Livingston"
// const datoNumber =7