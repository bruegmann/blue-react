import HashLink from "../components/HashLink"
import { NormalScrollbarDemo } from "../components/NormalScrollbarDemo"

export default function Scrollbar() {
    return (
        <>
            <article className="mb-5">
                <HashLink id="blue-normal-scrollbar">
                    <code>.blue-normal-scrollbar</code>
                </HashLink>
                <p>
                    {"Normalizes elements in areas which still should not have the theme colors for their scrollbars. "}
                    <NormalScrollbarDemo />
                </p>
            </article>

            <article className="mb-5">
                <HashLink id="blue-scroll-shadow">
                    <code>.blue-scroll-shadow</code>
                </HashLink>
                <p>
                    {"Adds shadow if area is scrollable. "}
                    <NormalScrollbarDemo />
                </p>
            </article>
        </>
    )
}
