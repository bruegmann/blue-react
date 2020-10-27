import React, { useEffect, useState } from "react"
import MarkdownGitHub from "react-markdown-github"
import Utilities from "../../components/Utilities"
import { GitHubContent } from "../gitHubApiTypes"

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
        }
        else {
            Utilities.setAlertMessage("This GitHub file has no download_url", "danger", true)
        }
    }

    const transformImageUri = ({ uri, github, org, repo, filename }: any) => {
        // console.log(uri, github, org, repo, filename)
        return `https://raw.githubusercontent.com/bruegmann/blue-react/master/recipes/${uri}`
    }

    const transformLinkUri = ({ uri, github, org, repo, filename, filepath }: any) => {
        console.log(uri, github, org, repo, filename, filepath)
    }

    return (
        <>
            {markdown !== null ?
                <MarkdownGitHub
                    source={markdown}
                    sourceUri={recipe.html_url}
                    transformImageUri={transformImageUri}
                />
                :
                <div>...</div>}
        </>
    )
}