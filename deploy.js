const { exec } = require("child_process");
const http = require("http");
const readlineSync = require("readline-sync");
const package = require("./package.json");


let customMessage = "";

customMessage = readlineSync.question("Enter a custom log message (optional): ");

if (customMessage === "") customMessage = null;


// Create package and upload it
const packageName = `${package.name}-${package.version}.tgz`;
const svnMessage = `Version ${package.version} veröffentlicht.${(customMessage ? ` - ${customMessage}` : "")}"`;
exec(`npm pack && svn add ${packageName} && svn commit ${packageName} -m "${svnMessage}"`);

// Post on Afflatus
let message = `Version ${package.version} von Blue React jetzt verfügbar! Bei Gelegenheit gerne Projekte updaten: http://pbgsvn1.patorg.org/svn/bsw/trunk/Web/Blue/blue-react/doc/index.html #blue-react #release #automatischer-post`;

if (customMessage) {
    message += `\n\n${customMessage}`;
}

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