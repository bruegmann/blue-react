export interface ComponentDocumentation {
    composes?: string[]
    displayName: string
    description: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    props?: any
    exampleCode?: string
    examples?: {
        [file: string]: string
    }
}
