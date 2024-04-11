const fs = require("fs")
const path = require("path")

// Pfad zum Verzeichnis
const dirPath = "./src/docs/cssSections"

// Pfad zur JSON-Datei
const jsonFilePath = "./src/docs/data/cssSections.json"

// Dateien im Verzeichnis auslesen
const files = fs.readdirSync(dirPath)

// Dateinamen ohne Endungen
const fileNames = files.map((file) => path.basename(file, path.extname(file)))

// Objekt als JSON in die Datei schreiben
fs.writeFileSync(jsonFilePath, JSON.stringify(fileNames))
