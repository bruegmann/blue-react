import React, { useEffect, useState } from "react"
import { Link, NavLink, useParams } from "react-router-dom"
import Body from "../../components/BodyRounded"
import Page from "../../components/Page"
import { Footer } from "../components/Footer"
import { Recipe } from "../components/Recipe"
import { GitHubContent } from "../gitHubApiTypes"

export function RecipesPage() {
    const [recipes, setRecipes] = useState<GitHubContent[] | null>(null)
    const { active } = useParams<any>()
    const [activeRecipe, setActiveRecipe] = useState<GitHubContent | null>(null)

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
        } else {
            setActiveRecipe(null)
        }
    }, [active, recipes])

    const fetchRecipes = async () => {
        const url =
            "https://api.github.com/repos/bruegmann/blue-react/contents/recipes"
        const r = await fetch(`${url}`)

        const contents = (await r.json()) as GitHubContent[]

        if (contents && Array.isArray(contents)) {
            const recipes = contents.filter(
                (c: GitHubContent) =>
                    c.name.endsWith(".md") &&
                    c.name.toLowerCase() !== "readme.md"
            )
            setRecipes(recipes)
        }
    }

    return (
        <Page>
            <Body containerClass="d-flex flex-column docs-min-height-100vh">
                <div className="container-fluid pt-5 pt-md-0 flex-grow-1">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="sticky-top" style={{ zIndex: 0 }}>
                                <div>
                                    <nav className="nav nav-pills flex-column mt-3">
                                        {recipes !== null ? (
                                            recipes.map(
                                                (recipe: GitHubContent) => (
                                                    <div
                                                        key={recipe.sha}
                                                        className="nav-item"
                                                    >
                                                        <NavLink
                                                            to={`/recipes/${recipe.name}`}
                                                            className="nav-link"
                                                        >
                                                            {recipe.name.replace(
                                                                ".md",
                                                                ""
                                                            )}
                                                        </NavLink>
                                                    </div>
                                                )
                                            )
                                        ) : (
                                            <div>Loading...</div>
                                        )}
                                    </nav>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-10">
                            {activeRecipe !== null ? (
                                <Recipe recipe={activeRecipe} />
                            ) : (
                                <>
                                    <h1 className="page-header">Recipes</h1>

                                    <p>
                                        Recipes are short tutorials or
                                        instructions for specific scenarious. On
                                        the side you see a list of all available
                                        recipes.
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                <Footer containerClass="container-fluid" />
            </Body>
        </Page>
    )
}
