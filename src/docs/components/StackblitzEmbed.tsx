import { PencilSquare } from "react-bootstrap-icons"
import image from "../images/stackblitz.png"

export default function StackblitzEmbed() {
    return (
        <div
            className="bg-primary neu-shadow-4 text-white rounded p-4 d-flex justify-content-between"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div>
                <h2 className="h5">
                    Try Blue React right in your browser with Stackblitz
                </h2>

                <a
                    className="btn btn-light"
                    href="https://stackblitz.com/~/github.com/bruegmann/vite-template-blue-react"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Open content in new tab
                </a>
                <a
                    className="btn btn-link text-white"
                    href="https://stackblitz.com/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Privacy Policy by Stackblitz
                </a>
            </div>
            <h1 className="display-3">
                <PencilSquare />
            </h1>
        </div>
    )
}
