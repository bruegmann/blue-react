const http = require("http");
const package = require("./package.json");

// Post on Afflatus
let message = `Version ${package.version} von Blue React jetzt verfügbar! Projekt updaten: \`npm i blue-react@latest\`\nDocs: https://bruegmann.github.io/blue-react \n#blue-react #release #automatischer-post`;


// const options = {
//     hostname: "localhost",
//     port: 90,
//     path: "/_demos/lgk/ocean-blue/src/server/?action=NewFeed&content=" + encodeURIComponent(message),
//     method: "GET"
// };

const options = {
    hostname: "pbgweb1.patorg.org",
    port: 80,
    path: "/afflatus/server/?action=NewFeed&author=blue&content=" + encodeURIComponent(message),
    method: "GET"
};

const req = http.request(options, res => {
});

req.on("error", (e) => {
    console.error(`problem with request: ${e.message}`);
});

// write data to request body
req.end();