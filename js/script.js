//Voy a crear los objetos para probar antes de conectarme a la api
var bahrain = {
    id: 1488,
    competition: {
        id: 2,
        name: "Bahrain Grand Prix",
        location: {
            country: "Bahrain",
            city: "Sakhir"
        }
    },
    circuit: {
        id: 2,
        name: "Bahrain International Circuit",
        image: "https://media.api-sports.io/formula-1/circuits/2.png"
    },
    season: 2022,
    type: "Race",
    laps: {
        current: null,
        total: 58
    },
    fastest_lap: {
        driver: {
            id: 34
        },
        time: "1:35.558"
    },
    distance: "307.6 Kms",
    timezone: "America/Argentina/Buenos_Aires",
    date: "2022-03-20T12:00:00-03:00",
    weather: null,
    status: "Completed"
}
var saudi_arabia = {
    id: 1493,
    competition: {
        id: 32,
        name: "Saudi Arabia Grand Prix",
        location: {
            country: "Saudi Arabia ",
            city: "Djeddah"
        }
    },
    circuit: {
        id: 29,
        name: "Jeddah Corniche Circuit",
        image: "https://media.api-sports.io/formula-1/circuits/29.png"
    },
    season: 2022,
    type: "Race",
    laps: {
        current: null,
        total: 58
    },
    fastest_lap: {
        driver: {
            id: 34
        },
        time: "1:31.634"
    },
    distance: "307.6 Kms",
    timezone: "America/Argentina/Buenos_Aires",
    date: "2022-03-27T14:00:00-03:00",
    weather: null,
    status: "Completed"
}
var circuitos = [bahrain, saudi_arabia, bahrain, saudi_arabia, bahrain, saudi_arabia]
var pilotos = [
    {
        position: 1,
        driver: {
            id: 25,
            name: "Max Verstappen",
            abbr: "VER",
            number: 1,
            image: "https://media.api-sports.io/formula-1/drivers/25.png"
        },
        team: {
            id: 1,
            name: "Red Bull Racing",
            logo: "https://media.api-sports.io/formula-1/teams/1.png"
        },
        points: 366,
        wins: null,
        behind: null,
        season: 2022
    },
    {
        position: 2,
        driver: {
            id: 10,
            name: "Sergio Perez",
            abbr: "PER",
            number: 11,
            image: "https://media.api-sports.io/formula-1/drivers/10.png"
        },
        team: {
            id: 1,
            name: "Red Bull Racing",
            logo: "https://media.api-sports.io/formula-1/teams/1.png"
        },
        points: 253,
        wins: null,
        behind: null,
        season: 2022
    },
    {
        position: 3,
        driver: {
            id: 34,
            name: "Charles Leclerc",
            abbr: "LEC",
            number: 16,
            image: "https://media.api-sports.io/formula-1/drivers/34.png"
        },
        team: {
            id: 3,
            name: "Scuderia Ferrari",
            logo: "https://media.api-sports.io/formula-1/teams/3.png"
        },
        points: 252,
        wins: null,
        behind: null,
        season: 2022
    },
    {
        position: 4,
        driver: {
            id: 51,
            name: "George Russell",
            abbr: "RUS",
            number: 63,
            image: "https://media.api-sports.io/formula-1/drivers/51.png"
        },
        team: {
            id: 5,
            name: "Mercedes-AMG Petronas",
            logo: "https://media.api-sports.io/formula-1/teams/5.png"
        },
        points: 207,
        wins: null,
        behind: null,
        season: 2022
    },
    {
        position: 5,
        driver: {
            id: 24,
            name: "Carlos Sainz Jr",
            abbr: "SAI",
            number: 55,
            image: "https://media.api-sports.io/formula-1/drivers/24.png"
        },
        team: {
            id: 3,
            name: "Scuderia Ferrari",
            logo: "https://media.api-sports.io/formula-1/teams/3.png"
        },
        points: 202,
        wins: null,
        behind: null,
        season: 2022
    }
]


const navApp = {
    data() {
        return {
        }
    },
    mounted() {
        console.log("Aplicación nav montada");
    },
    methods: {
        mostrarCircuito() {
            pantalla.final = ""
            pantalla.titulo = "Circuitos";
            pantalla.crearCircuitos();
        },
        mostrarPilotos() {
            pantalla.final = ""
            pantalla.titulo = "Pilotos"
            pantalla.crearPilotos();

        },
        mostrarCarreras() {
            pantalla.final = ""
            pantalla.titulo = "Carreras"
            pantalla.crearCarreras();

        }

    }
}
var nav = Vue.createApp(navApp).mount('nav')

const mostrarPantalla = {
    data() {
        return {
            titulo: 'Bienvenido a la base de datos de la Formula 1',
            foto: '/img/logo/solo.png',
            id: '',
            clase: ''
        }
    },
    mounted() {
        console.log("Aplicación montada");
    },
    methods: {
        crearCircuitos() {
            limpiarPantalla()
            circuitosCompletos(circuitos)
        },
        crearPilotos() {
            console.log("temporada", season)

            // getPilotos()
            pilotosCompletos(pilotos)



        },
        crearCarreras() {
            this.clase = "circuito_container"
            this.id = "circuitos"
            limpiarPantalla()
            carrerasCompletos(circuitos)
        },
        // mostrarPiloto(){
        //     searchDriver()

        // }



    }
}
var pantalla = Vue.createApp(mostrarPantalla).mount('#contenedor')
var circuitosCompletos = (circuitos) => {
    const div_max_circuitos = document.querySelector(".contenedor");
    for (let i = 0; i < circuitos.length; i++) {
        let div00 = document.createElement("div");
        div00.className = "circuito_container";
        div_max_circuitos.appendChild(div00)
    }
    const div_circuitos = document.getElementsByClassName("circuito_container");
    for (let i = 0; i < circuitos.length; i++) {
        let imagen00 = document.createElement("img")
        imagen00.src = circuitos[i].circuit.image;
        imagen00.className = "circuito_img";
        div_circuitos[i].appendChild(imagen00)
        let div00 = document.createElement("div")
        div00.textContent = circuitos[i].circuit.name;
        div00.className = "name";
        div_circuitos[i].appendChild(div00)
        let div01 = document.createElement("div")
        div01.textContent = circuitos[i].competition.location.country;
        div_circuitos[i].appendChild(div01)
        let div02 = document.createElement("div")
        div02.textContent = circuitos[i].distance;
        div_circuitos[i].appendChild(div02)
    }
}
var temporada = () => {
    var values = ["", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011"];

    var select = document.createElement("select");
    select.name = "Temporada";
    select.id = "Temporada"

    for (const val of values) {
        var option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        select.appendChild(option);
    }

    var label = document.createElement("label");
    label.innerHTML = "Choose your season: "
    label.htmlFor = "Temporada";

    document.getElementById("contenedor").appendChild(label).appendChild(select);
}
temporada()

var season;
var select = document.getElementById('Temporada');
select.addEventListener('change',
    function () {
        var selectedOption = this.options[select.selectedIndex];
        season = selectedOption.text;
        console.log(season)
        getPilotos();
    });


// var piloto_search = document.getElementsByClassName('cuadros')
// console.log("piloto_search es", piloto_search)
// piloto_search.forEach(piloto_search => {
//     piloto_search.addEventListener('click',
//         function () {
//             // var selectedDriver = this.options[piloto_search.id];

//             console.log("En la funcion 1", selectedDriver)
//             // console.log("En la funcion 2", piloto_search.id)

//         }
//     );
// });
document.addEventListener('click', function (e) {
    if (e.target.tagName == "BUTTON" && e.target.className == "name") {
        // alert(e.target.id)
        searchDriver(e.target.id)
    }
})






var pilotosCompletos = (pilotos) => {
    limpiarPantalla()
    const div_max_pilotos = document.querySelector(".contenedor");
    for (let i = 0; i < pilotos.length; i++) {
        let div00 = document.createElement("div");
        div00.className = "cuadros";
        div_max_pilotos.appendChild(div00)
    }
    const div_circuitos = document.getElementsByClassName("cuadros");
    for (let i = 0; i < pilotos.length; i++) {
        let imagen00 = document.createElement("img")
        imagen00.src = pilotos[i].driver.image;
        imagen00.className = "piloto_img";
        div_circuitos[i].appendChild(imagen00)
        let div00 = document.createElement("button")
        div00.textContent = pilotos[i].driver.name;
        div00.className = "name";
        div00.id = pilotos[i].driver.id;
        div_circuitos[i].appendChild(div00)
        let div01 = document.createElement("div")
        div01.textContent = pilotos[i].driver.number;
        div01.className = "name";
        div_circuitos[i].appendChild(div01)
        let div02 = document.createElement("div")
        div02.textContent = pilotos[i].team.name;
        div_circuitos[i].appendChild(div02)
    }
}
var mostrarPiloto = (piloto) => {
    limpiarPantalla()
    pantalla.titulo = piloto[0].name;
    const div_max_pilotos = document.querySelector(".contenedor");
    let div00 = document.createElement("div");
    div00.className = "cuadros";
    div00.id = piloto[0].id;
    div_max_pilotos.appendChild(div00)
    let div_piloto = document.getElementById(piloto[0].id)
    let imagen00 = document.createElement("img")
    imagen00.src = piloto[0].image;
    imagen00.className = "piloto_img";
    div_piloto.appendChild(imagen00)
    let div01 = document.createElement("div")
    div01.textContent = `Número: ${piloto[0].number}`;
    div01.className = "name";
    div_max_pilotos.appendChild(div01)
    let div02 = document.createElement("ul")
    div02.id="datos_pilotos"
    div_max_pilotos.appendChild(div02)
    let ul_datos = document.getElementById("datos_pilotos")
    let div03 = document.createElement("li")
    div03.textContent = `Nacionalidad: ${piloto[0].nationality}`
    ul_datos.appendChild(div03)
    let div04 = document.createElement("li")
    div04.textContent= `Fecha de nacimiento: ${piloto[0].birthdate}`
    ul_datos.appendChild(div04)
    let div05 = document.createElement("li")
    div05.textContent= `Lugar de nacimiento: ${piloto[0].birthplace}`
    ul_datos.appendChild(div05)
    let div06 = document.createElement("li")
    div06.textContent= `Grandes premios en los que ha participado: ${piloto[0].grands_prix_entered}`
    ul_datos.appendChild(div06)
}

function limpiarPantalla() {
    // Eliminando todos los hijos de un elemento
    var elemento = document.getElementById("cuadros");
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }
}
function getPilotos() {
    const options = {
        // season: '2022',
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fb42b684c6msh266375bbf88f853p1e3f64jsnaeeb36666192',
            'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
        },

    };


    fetch(`https://api-formula-1.p.rapidapi.com/rankings/drivers?season=${season}`, options)
        .then(response => response.json())
        // .then(response => console.log(response.response))
        .then(pilotos => pilotosCompletos(pilotos.response))
        .catch(err => console.error(err));
}

function searchDriver(id_piloto) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fb42b684c6msh266375bbf88f853p1e3f64jsnaeeb36666192',
            'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
        }
    };

    fetch(`https://api-formula-1.p.rapidapi.com/drivers?id=${id_piloto}`, options)
        .then(response => response.json())
        .then(piloto => mostrarPiloto(piloto.response))
        .catch(err => console.error(err));
}



// const mostrarPilotos = {
//     data(){
//         return{
//             nombre: 'Verstappen'
//         }
//     }
// }
// var pilotos = Vue.createApp(mostrarPilotos).mount('#divPrincipal')

// const mostrarCarreras = {
//     data(){
//         return{
//             nombre: 'México'
//         }
//     }
// }
// var carreras = Vue.createApp(mostrarCarreras).mount('#divPrincipal')

// console.log(carreras.nombre)

