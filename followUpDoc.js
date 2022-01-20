// Fügt Beispiel-Code der Doku hinzu

const fs = require("fs");

const packageName = require("./package.json").name;
const docPath = "./doc/src/doc.json";

let doc = require(docPath);

Object.keys(doc).forEach(prop => {
    const displayName = doc[prop].displayName;
    const exampleFilePath = "./doc/src/examples/" + displayName + ".js";

    if (fs.existsSync(exampleFilePath)) {
        // console.log(displayName + " has example");

        const exampleCode = fs.readFileSync(exampleFilePath, "utf8");

        doc[prop].exampleCode = exampleCode.replace('"../../../index.js"', `"${packageName}"`);
    }
});

fs.writeFileSync(docPath, JSON.stringify(doc));