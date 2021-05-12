/// <reference types="react" />
export interface IntroProps {
    /**
     * Can be an image. Will be placed inside of the `src` attribute.
     */
    logo?: string;
    /**
     * Max width from the logo.
     */
    logoMaxWidth?: string;
    /**
     * Text which will be placed under the logo.
     */
    title?: string;
    /**
     * Content
     */
    children?: any;
}
/**
 * Can be used for a sign-in page.
 */
export default function Intro({ logo, logoMaxWidth, title, children }: IntroProps): JSX.Element;
