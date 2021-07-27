export interface GitHubAccess {
    access_token: string
    token_type: string
    scope: string
}

export interface GitHubTreeResponse {
    sha: string
    url: string
    truncated?: boolean
    tree: GitHubTree[]
}

export interface GitHubTree {
    path: string
    mode: string
    type: string
    sha: string
    size: number
    url: string
}

export type GitHubContentResponse = GitHubContent[]

export interface GitHubContent {
    content?: string
    download_url?: string
    git_url: string
    html_url: string
    name: string
    path: string
    sha: string
    size: number
    type: string
    url: string
    _links: GitHubLink
}

export interface GitHubLink {
    git: string
    html: string
    self: string
}