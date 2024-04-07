
const searchBar = document.getElementById("searchField");
// const LocationsList = require("./locationsList")

searchBar.addEventListener("keydown", (ev) => {
    if (ev.key === "Enter") {


    }
})

let timeout;

searchBar.addEventListener('keyup', function (ev) {

    clearTimeout(timeout);
    timeout = setTimeout(function () {
        let searchQuery = ev.target.value
        console.log('Input Value:', searchQuery);

        getQueryPlaces(ev.target.value)
            .then((data) => {
                const searchField = document.getElementById("searchFieldBlock")
                new LocationsList(data, 
                    ( ev )=>{
                        const loc = ev.target.value.split(" ")
                        setMapLocatiion(loc[0], loc[1])
                        document.getElementById("selectList").remove()
                    },
                    searchField)

            })
        // maps.setLocation({
        //     center: [parseFloat(pos[0]), parseFloat(pos[1])]
        // })
    }, 2000);
});

async function getQueryPlaces(place, placeCount = 5) {
    const query = await fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=adc5c736-4e72-4f91-8b9c-fd1787dea30e&geocode=${place}&format=json`);
    const data = await query.json();
    return data.response.GeoObjectCollection.featureMember.slice(0, placeCount);
}

function setMapLocatiion(lat, lon) {
    maps.setLocation({
        center: [lat, lon]
    })
}

