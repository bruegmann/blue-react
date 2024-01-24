import { ModalProvider, useModal } from "../../../components/ModalProvider"

function InsideComp() {
    // Use the `useModal` hook.
    const { tell, verify } = useModal()

    return (
        <button
            className="btn btn-outline-secondary"
            onClick={async () => {
                const answer = await verify("Are you sure?", {
                    title: "Say yay or nay",
                    acceptBtnText: "yay",
                    cancelBtnText: "nay"
                })

                if (answer === true) {
                    tell("So, you're sure")
                }
            }}
        >
            verify
        </button>
    )
}

/**
 * Your component where you use `useModal` has to be wrapped around `<ModalProvider></ModalProvider>`.
 * Best practice is to wrap it around your root component.
 */
export default function ModalProviderExample() {
    return (
        <ModalProvider>
            <InsideComp />
        </ModalProvider>
    )
}
