import { ToastProvider, useToast } from "../../../components/ToastProvider"

function SubComponent() {
    const { addToast, clearToasts } = useToast()
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

            <button
                type="button"
                className="btn blue-btn-soft-danger"
                onClick={() => {
                    clearToasts()
                }}
            >
                Remove all messages
            </button>
        </div>
    )
}

export default function RootComponent() {
    return (
        <ToastProvider>
            <SubComponent />
        </ToastProvider>
    )
}
