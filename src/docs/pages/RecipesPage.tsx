import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Body from "../../components/Body"
import Page from "../../components/Page"
import { Recipe } from "../components/Recipe"
import { GitHubContent } from "../gitHubApiTypes"

export function RecipesPage() {
    const [recipes, setRecipes] = useState<GitHubContent[] | null>(null)
    const { active } = useParams<any>()
    const [activeRecipe, setActiveRecipe] = useState<GitHubContent | null>(null)

    console.log(active)

    useEffect(() => {
        if (recipes === null) {
            fetchRecipes()
        }
    }, [recipes])

    useEffect(() => {
        if (active !== undefined && active !== null && recipes !== null) {
            recipes.forEach((recipe: GitHubContent) => {
                if (recipe.name.toLowerCase() === active.toLowerCase()) {
                    setActiveRecipe(recipe)
                }
            })
        }
    }, [active, recipes])

    const fetchRecipes = async () => {
        const url = "https://api.github.com/repos/bruegmann/blue-react/contents/recipes"
        const r = await fetch(`${url}`)

        const contents = await r.json() as GitHubContent[]

        if (contents && Array.isArray(contents)) {
            const recipes = contents.filter((c: GitHubContent) => (
                c.name.endsWith(".md") && c.name.toLowerCase() !== "readme.md"
            ))
            setRecipes(recipes)
        }
    }

    return (
        <Page>
            <Body>
                <div className="row">
                    <div className="col-md-2">
                        <div className="sticky-top" style={{ zIndex: 0 }}>
                            <div className="overflow-scroll">
                                <nav className="nav nav-pills flex-column">
                                    {recipes !== null ?
                                        recipes.map((recipe: GitHubContent) =>
                                            <div key={recipe.sha} className="nav-item">
                                                <Link to={`/recipes/${recipe.name}`} className="nav-link">
                                                    {recipe.name.replace(".md", "")}
                                                </Link>
                                            </div>
                                        )
                                        :
                                        <div>Loading...</div>
                                    }
                                </nav>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-10">
                        {activeRecipe !== null ?
                            <Recipe recipe={activeRecipe} />
                            :
                            <div>Select a recipe</div>}
                    </div>
                </div>
            </Body>
        </Page>
    )
}