// Fügt Beispiel-Code der Doku hinzu

import fs from "fs"
import path from "path"
import packageJson from "./package.json" with {type: "json"}

const docPath = "./src/docs/data/docs.json"
import doc from "./src/docs/data/docs.json" with {type: "json"}

const packageName = packageJson.name

function prepareExampleCode(exampleCode) {
    /**
     * Transforms imports to package imports from "blue-react"
     * */
    exampleCode.replace('"../../../index.js"', `"${packageName}"`)

    const matches = [
        ...exampleCode.matchAll(
            /import (.*) from "..\/..\/(..\/)?components\/(.*)"/gm
        )
    ]

    let extraModules = []

    let componentNames = matches.map((match) => {
        if (match[1].includes(",")) {
            match[1]
                .replace("{", "")
                .replace("}", "")
                .split(",")
                .forEach((s) => {
                    const moduleName = s.trim()
                    if (match[3] !== moduleName) {
                        extraModules.push(moduleName)
                    }
                })
        }

        return match[3]
    })

    componentNames = [...componentNames, ...extraModules]

    const importCode = `import { ${componentNames
        .sort()
        .join(", ")} } from "${packageName}"`

    matches.forEach((match) => {
        if (exampleCode.includes(importCode)) {
            exampleCode = exampleCode.replace(`${match[0]}\r\n`, "")
        } else {
            exampleCode = exampleCode.replace(match[0], importCode)
        }
    })

    return exampleCode
}

Object.keys(doc).forEach((prop) => {
    const displayName = doc[prop].displayName

    const exampleFilePathTsx = "./src/docs/examples/" + displayName + ".tsx"

    if (fs.existsSync(exampleFilePathTsx)) {
        let exampleCode = fs.readFileSync(exampleFilePathTsx, "utf8")
        doc[prop].exampleCode = prepareExampleCode(exampleCode)
    }

    // Looking for folder in examples folder named after the component
    const exampleFolderPath = "./src/docs/examples/" + displayName
    if (fs.existsSync(exampleFolderPath)) {
        if (!doc[prop].examples) doc[prop].examples = {}

        const files = fs.readdirSync(exampleFolderPath)
        for (const file of files) {
            const subExampleFilePathTsx = path.join(exampleFolderPath, file)
            let exampleCode = fs.readFileSync(subExampleFilePathTsx, "utf8")
            doc[prop].examples[file] = prepareExampleCode(exampleCode)
        }
    }

    const exampleFilePathJs = "./src/docs/examples/" + displayName + ".js"

    if (fs.existsSync(exampleFilePathJs)) {
        const exampleCode = fs.readFileSync(exampleFilePathJs, "utf8")
        doc[prop].exampleCode = prepareExampleCode(exampleCode)
    }
})

fs.writeFileSync(docPath, JSON.stringify(doc))
