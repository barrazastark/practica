// AJAX: Asyncronous Javscript and XML
/*
 Con ajax no se bloque el main thread o los contextos de ejcuciones

*/

// SPA: Single page application

// REST

// API : application program interface
// api restful

// /GET, POST, PUT, DELETE, ETC

const ENDPOINT = "https://pokeapi.co/api/v2/pokemon";

// Callback hell

fetch(ENDPOINT)
    .then((res) => {
        return res.json()
    })
    .then((data) => {

        console.log(data);

    });
   
// async , await