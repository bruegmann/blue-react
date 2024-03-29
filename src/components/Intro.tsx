import React from "react"

export interface IntroProps {
    /**
     * Can be an image. Will be placed inside of the `src` attribute.
     */
    logo?: string

    /**
     * Max width from the logo.
     */
    logoMaxWidth?: string

    /**
     * Text which will be placed under the logo.
     */
    title?: string

    /**
     * Content
     */
    children?: any
}

/**
 * Can be used for a sign-in page.
 */
export default function Intro({
    logo,
    logoMaxWidth = "100px",
    title,
    children
}: IntroProps) {
    return (
        <div className="sign-in-screen">
            <div className="sign-in-container mx-1">
                <div className="bg-body rounded-3 shadow-lg px-4 py-5">
                    <div className="text-center">
                        <img
                            style={{ maxWidth: logoMaxWidth }}
                            src={logo}
                            alt=""
                        />
                        <h2 className="mt-4 mb-3">{title}</h2>
                    </div>

                    {children}
                </div>
            </div>
        </div>
    )
}
