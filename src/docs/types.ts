import { Documentation } from "react-docgen"

export type ComponentDocumentation = Documentation & {
    exampleCode?: string
    examples?: {
        [file: string]: string
    }
}
