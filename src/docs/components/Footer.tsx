import React from "react"

interface FooterProps {
    containerClass?: string
}

export function Footer({ containerClass = "container" }: FooterProps) {
    return (
        <footer className="docs-footer pb-1">
            <div className={`${containerClass} mt-5`}>
                <p className="text-muted mb-0">
                    <small>
                        {`©${new Date().getFullYear() || "2021"} Brügmann Software GmbH. `}
                        {"Licensed under "}<a href="https://github.com/bruegmann/blue-react/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">GNU General Public License v3.0</a>{". "}
                        <a href="https://patorg.de/imprint/" target="_blank" rel="noopener noreferrer">Imprint</a>{". "}
                        <a href="https://patorg.de/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                    </small>
                </p>
            </div>
        </footer>
    )
}