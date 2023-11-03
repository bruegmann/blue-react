import { CheckCircleFill, ExclamationCircleFill, InfoCircleFill, XCircleFill } from "react-bootstrap-icons"
import { ToastProvider, useToast } from "../../../components/ToastProvider"

function SubComponent() {
    const { addToast } = useToast()
    return (
        <div className="d-flex gap-3">
            <button
                type="button"
                className="btn blue-btn-soft-primary"
                onClick={() => {
                    addToast({
                        type: "success",
                        title: "Success!",
                        message: "ToastProvider works"
                    })
                }}
            >
                Click to add a toast
            </button>
        </div>
    )
}

export default function RootComponent() {
    return (
        <ToastProvider
            dangerIcon={<XCircleFill />}
            infoIcon={<InfoCircleFill />}
            successIcon={<CheckCircleFill />}
            warningIcon={<ExclamationCircleFill />}
        >
            <SubComponent />
        </ToastProvider>
    )
}
