/// <reference types="react" />
import { GitHubContent } from "../gitHubApiTypes";
export interface RecipeProps {
    recipe: GitHubContent;
}
export declare function Recipe({ recipe }: RecipeProps): JSX.Element;
