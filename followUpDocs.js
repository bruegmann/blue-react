// Fügt Beispiel-Code der Doku hinzu

const fs = require("fs")

const packageName = require("./package.json").name
const docPath = "./src/docs/data/docs.json"

let doc = require(docPath)

function prepareExampleCode(exampleCode) {
    /**
 * Transforms imports to package imports from "blue-react"
 * */
    exampleCode.replace('"../../../index.js"', `"${packageName}"`)

    const matches = [...exampleCode.matchAll(/import (.*) from "..\/..\/components\/(.*)"/gm)]

    const componentNames = matches.map(match => match[2])

    const importCode = `import { ${componentNames.sort().join(", ")} } from "${packageName}"`

    matches.forEach(match => {
        if (exampleCode.includes(importCode)) {
            exampleCode = exampleCode.replace(`${match[0]}\r\n`, "")
        }
        else {
            exampleCode = exampleCode.replace(match[0], importCode)
        }
    })
    return exampleCode
}

Object.keys(doc).forEach(prop => {
    const displayName = doc[prop].displayName

    const exampleFilePathTsx = "./src/docs/examples/" + displayName + ".tsx"

    if (fs.existsSync(exampleFilePathTsx)) {
        let exampleCode = fs.readFileSync(exampleFilePathTsx, "utf8")
        doc[prop].exampleCode = prepareExampleCode(exampleCode)
    }

    const exampleFilePathJs = "./src/docs/examples/" + displayName + ".js"

    if (fs.existsSync(exampleFilePathJs)) {
        const exampleCode = fs.readFileSync(exampleFilePathJs, "utf8")
        doc[prop].exampleCode = prepareExampleCode(exampleCode)
    }
})

fs.writeFileSync(docPath, JSON.stringify(doc))