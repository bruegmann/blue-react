import { useEffect, useState } from "react"
import Utilities from "../../components/Utilities"
import { GitHubContent } from "../gitHubApiTypes"
import Markdown from "./Markdown"

export interface RecipeProps {
    recipe: GitHubContent
}

export function Recipe({ recipe }: RecipeProps) {
    const [markdown, setMarkdown] = useState<string | null>(null)

    useEffect(() => {
        fetchRecipe()
    }, [recipe])

    const fetchRecipe = async () => {
        if (recipe.download_url !== undefined) {
            const r = await fetch(recipe.download_url)
            const text = await r.text()
            setMarkdown(text)
        } else {
            Utilities.setAlertMessage("This GitHub file has no download_url", "danger", true)
        }
    }

    return <>{markdown !== null ? <Markdown>{markdown}</Markdown> : <div>...</div>}</>
}
