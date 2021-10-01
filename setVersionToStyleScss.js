const fs = require("fs")
const { version } = require("./package.json")
const filePath = "./dist/style.scss"

let content = fs.readFileSync(filePath, "utf8")
content = content.replace(
    /Blue React v(\d+([\.]\d+)*(-(beta|alpha|next)\.(\d+))?)/gm,
    "Blue React v" + version
)

fs.writeFileSync(filePath, content)
