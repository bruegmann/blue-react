/// <reference types="react" />
export interface PageProps {
    /**
     * Will be set to the document's `<title>` tag.
     */
    title?: string;
    children?: any;
}
/**
 * Main component for each page.
 */
export default function Page({ children, title }: PageProps): JSX.Element;
