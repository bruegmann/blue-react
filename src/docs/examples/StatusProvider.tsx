import {
    CheckCircleFill,
    ExclamationCircleFill,
    InfoCircleFill,
    XCircleFill
} from "react-bootstrap-icons"
import { StatusProvider, useStatus } from "../../components/StatusProvider"

function InsideComp() {
    const { setAlert, setStatus } = useStatus()

    return (
        <>
            <div className="mb-1 d-flex gap-1">
                <button
                    className="btn btn-light"
                    onClick={() =>
                        setAlert({
                            title: "Hello World",
                            status: "success"
                        })
                    }
                >
                    Set alert
                </button>
                <button
                    className="btn btn-light"
                    onClick={() =>
                        setAlert({
                            title: "Hello World",
                            status: "danger",
                            detailText: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`
                        })
                    }
                >
                    Set full alert
                </button>
                <button
                    className="btn btn-light"
                    onClick={() => setAlert(null)}
                >
                    Unset alert
                </button>
            </div>

            <div className="mb-1 d-flex gap-1">
                <button
                    className="btn btn-light"
                    onClick={() => setStatus("loading")}
                >
                    Show loading
                </button>
                <button
                    className="btn btn-outline-success"
                    onClick={() => setStatus("success")}
                >
                    Show success
                </button>
                <button
                    className="btn btn-outline-info"
                    onClick={() => setStatus("info")}
                >
                    Show info
                </button>
                <button
                    className="btn btn-outline-warning"
                    onClick={() => setStatus("warning")}
                >
                    Show warning
                </button>
                <button
                    className="btn btn-outline-danger"
                    onClick={() => setStatus("danger")}
                >
                    Show danger
                </button>
            </div>

            <div className="mb-1 d-flex gap-1">
                <button
                    className="btn btn-light"
                    onClick={() => setStatus(null)}
                >
                    Hide status
                </button>
            </div>
        </>
    )
}

export default function StatusExample() {
    return (
        <StatusProvider
            successIcon={<CheckCircleFill />}
            infoIcon={<InfoCircleFill />}
            warningIcon={<ExclamationCircleFill />}
            dangerIcon={<XCircleFill />}
        >
            <InsideComp />
        </StatusProvider>
    )
}
