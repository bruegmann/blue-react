import { DropletFill } from "react-bootstrap-icons"
import NewMenuItem from "../../../components/NewMenuItem"

export default function GroupedCollapseExample() {
    return (
        <div className="blue-collapse-group">
            <NewMenuItem iconBefore={<DropletFill />} label="Parent" />

            <details className="blue-collapse">
                <summary className="btn blue-collapse-header blue-menu-item icon-link blue-btn-square">
                    <span className="visually-hidden">Collapse sub menu</span>
                    <span className="blue-btn-icon-wrapper" aria-hidden>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="blue-collapse-chevron"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                            />
                        </svg>
                    </span>
                </summary>

                <div className="vstack border-start">
                    <NewMenuItem label="Child 1" />
                    <NewMenuItem label="Child 2" />
                </div>
            </details>
        </div>
    )
}
