import { ModalProvider, useModal } from "../../components/ModalProvider"

function InsideComp() {
    // Use the `useModal` hook.
    const { tell, verify, ask } = useModal()

    return (
        <>
            <p>
                Allowed params for the functions <code>tell</code>, <code>verify</code> and <code>ask</code>:<br />
                <code>(text: string, title?: string, icon?: ReactNode)</code>
            </p>

            <div className="d-flex gap-2">
                <button
                    className="btn btn-outline-secondary"
                    onClick={() => {
                        tell(
                            "Hey, what's up",
                            undefined,
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1rem"
                                    height="1rem"
                                    fill="currentColor"
                                    className="bi bi-chat-left-dots"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                    <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                </svg>
                            </span>
                        )
                    }}
                >
                    tell
                </button>

                <button
                    className="btn btn-outline-secondary"
                    onClick={
                        // Make sure to make your function "async" when using "await"
                        async () => {
                            // Use "await" to wait until the user enters something
                            const answer = await ask(
                                "What is 1 + 1?",
                                "Tell me the correct answer",
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1rem"
                                        height="1rem"
                                        fill="currentColor"
                                        className="bi bi-calculator"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                                        <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z" />
                                    </svg>
                                </span>
                            )
                            if (answer && parseInt(answer.toString()) === 2) {
                                tell("That's correct!")
                            } else {
                                tell("Wrong!")
                            }
                        }
                    }
                >
                    ask
                </button>

                <button
                    className="btn btn-outline-secondary"
                    onClick={async () => {
                        const answer = await verify(
                            "Are you sure?",
                            "Say yes or no",
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1rem"
                                    height="1rem"
                                    fill="currentColor"
                                    className="bi bi-question-circle"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                                </svg>
                            </span>
                        )
                        console.log({ answer })
                        if (answer === true) {
                            tell("So, you're sure")
                        }
                    }}
                >
                    verify
                </button>

                <button
                    className="btn btn-secondary"
                    onClick={async () => {
                        const name = await ask("What is your name?")
                        console.log(name)
                        if (name) {
                            const retVal = await tell("Hello, " + name)
                            console.log(retVal)

                            if (await verify("Is everything alright?")) {
                                await tell("Oh, nice")
                            } else {
                                await tell("Oh no :(")
                            }
                        }
                    }}
                >
                    Start a conversation
                </button>

                <br />

                <button
                    className="btn btn-outline-secondary"
                    onClick={() => {
                        alert("Hello there!")
                        if (window.confirm("Everything okay?")) {
                            alert("Alright")
                        }
                    }}
                >
                    How a native <code>alert()</code> would look like
                </button>
            </div>
        </>
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
