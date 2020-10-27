import React, { useState } from "react";
import Page from "../../components/Page";
import Body from "../../components/Body";
import { logo, appTitle } from "../Global";
import { GitHubContent } from "../gitHubApiTypes";

const packageJson = require("../../../package.json");

export const proxy = "https://github-proxy.patorg.de/fetch/"

export const HomePage = () => {
    const [recipes, setRecipes] = useState<GitHubContent[]>([])

    const fetchRecipes = async () => {
        const url = "https://api.github.com/repos/bruegmann/blue-react/contents/recipes"
        const r = await fetch(`${url}`)
        console.log(r)

        const contents = await r.json() as GitHubContent[]

        if (contents && Array.isArray(contents)) {
            const recipes = contents.filter((c: GitHubContent) => (
                c.name.endsWith(".md") && c.name.toLowerCase() !== "readme.md"
            ))
            setRecipes(recipes)
            console.log(recipes)
        }
    }

    return (
        <Page>
            <Body className="pt-0" containerClass="no-container">
                <div className="welcome-jumbotron jumbotron jumbotron-fluid bg-theme text-white">
                    <div className="container text-center">
                        <h1 className="display-1 d-inline-flex align-items-center">
                            <img src={logo} alt={appTitle} style={{ height: "1em" }} className="mr-3" /> Blue
                    </h1>
                        <h4>{packageJson.version}</h4>
                    </div>
                </div>

                <div className="container">
                    <h1 className="page-header">Use Blue React</h1>

                    <h2 className="mt-4 mb-3">Create new project using CRA</h2>
                    <code>npx create-react-app <strong>name-of-my-app</strong> --template blue</code>

                    <div className="mt-3">Or if you want to use TypeScript:</div>
                    <code>npx create-react-app <strong>name-of-my-app</strong> --template ts-blue</code>

                    <h2 className="mt-4 mb-3">Install to existing project</h2>
                    <code>npm i blue-react</code>

                    <button onClick={fetchRecipes}>fetch</button>


                    <h1 className="page-header">Recipes</h1>

                    <div className="list-group">
                        {recipes.map((recipe: GitHubContent) =>
                            <a key={recipe.sha} href={recipe.html_url} target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">
                                {recipe.name.replace(".md", "")}
                            </a>
                        )}
                    </div>
                </div>
            </Body>
        </Page>
    )
}