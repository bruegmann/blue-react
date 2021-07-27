// Fügt Beispiel-Code der Doku hinzu

const fs = require("fs")

const packageName = require("./package.json").name
const docPath = "./src/docs/data/docs.json"

let doc = require(docPath)

Object.keys(doc).forEach(prop => {
    const displayName = doc[prop].displayName

    const exampleFilePathTsx = "./src/docs/examples/" + displayName + ".tsx"

    if (fs.existsSync(exampleFilePathTsx)) {
        const exampleCode = fs.readFileSync(exampleFilePathTsx, "utf8")

        doc[prop].exampleCode = exampleCode.replace('"../../../index.js"', `"${packageName}"`)
    }

    const exampleFilePathJs = "./src/docs/examples/" + displayName + ".js"

    if (fs.existsSync(exampleFilePathJs)) {
        const exampleCode = fs.readFileSync(exampleFilePathJs, "utf8")

        doc[prop].exampleCode = exampleCode.replace('"../../../index.js"', `"${packageName}"`)
    }
})

fs.writeFileSync(docPath, JSON.stringify(doc))