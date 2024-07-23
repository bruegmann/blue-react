import { Heart } from "react-bootstrap-icons"
import HashLink from "../components/HashLink"

export default function TextAndIcons() {
    return (
        <>
            <article className="mb-5">
                <HashLink id="blue-page-header">
                    <code>.blue-page-header</code> or <code>.page-header</code>
                </HashLink>
                <p>
                    {`In previous versions of Bootstrap, ${"`.page-header`"} was a class that could be used to add a border to the bottom of a page header.\n
                    Unfortunately his class was removed in Bootstrap 5, so it's now part of Blue React CSS.`}
                </p>

                <h3>Example</h3>

                <div className="border rounded p-3">
                    <div className="h1 blue-page-header">Example headline</div>
                </div>
            </article>

            <article className="mb-5">
                <HashLink id="blue-page-header">
                    <code>.blue-icon</code> or <code>.bi</code>
                </HashLink>
                <p>{`Vertically alignment, especially for Bootstrap Icons.`}</p>

                <div className="border text-bg-secondary p-1 rounded d-inline-block">
                    <Heart /> Without <code className="text-bg-secondary">.bi</code>
                </div>
                <div className="border text-bg-secondary p-1 rounded d-inline-block">
                    <Heart className="bi" /> With <code className="text-bg-secondary">.bi</code>
                </div>
            </article>
        </>
    )
}
