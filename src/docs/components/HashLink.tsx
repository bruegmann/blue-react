import { ReactNode } from "react"

export interface HashLinkProps {
    children: ReactNode
    id: string
}

export default function HashLink({ children, id }: HashLinkProps) {
    return (
        <h3 className="blue-opacity-hover" id={id}>
            {children}{" "}
            <a href={`#${id}`} className="blue-opacity-hover-content-active">
                #
            </a>
        </h3>
    )
}
