import { ModalProvider, useModal } from "../../components/ModalProvider"
import FluentBtn from "../../components/FluentBtn"

function InsideComp() {
    // Use the `useModal` hook.
    const { tell, verify, ask } = useModal()

    return (
        <div className="d-flex gap-2">
            <FluentBtn
                className="btn btn-outline-secondary"
                onClick={() => {
                    tell("Hey, what's up")
                }}
            >
                tell
            </FluentBtn>

            <FluentBtn
                className="btn btn-outline-secondary"
                onClick={
                    // Make sure to make your function "async" when using "await"
                    async () => {
                        // Use "await" to wait until the user enters something
                        const answer = await ask("What is 1 + 1?")
                        if (answer && parseInt(answer.toString()) === 2) {
                            tell("That's correct!")
                        } else {
                            tell("Wrong!")
                        }
                    }
                }
            >
                ask
            </FluentBtn>

            <FluentBtn
                className="btn btn-outline-secondary"
                onClick={async () => {
                    const answer = await verify("Are you sure?")
                    console.log({ answer })
                    if (answer === true) {
                        tell("So, you're sure")
                    }
                }}
            >
                verify
            </FluentBtn>

            <FluentBtn
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
            </FluentBtn>
        </div>
    )
}

/**
 * Your component where you use `useModal` has to be wrapped around `<ModalProvider></ModalProvider>`.
 * Best practice is to wrap it around your root component.
 */
export default function ModalExample() {
    return (
        <ModalProvider>
            <InsideComp />
        </ModalProvider>
    )
}
