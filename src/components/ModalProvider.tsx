import React, { createContext, useCallback, useContext, useState } from "react"
import { ModalType } from "./shared"
import Modal from "./Modal"

const ModalContext = createContext({
    ask: undefined as unknown as (text: string) => Promise<string | boolean>,
    tell: undefined as unknown as (text: string) => Promise<boolean>,
    verify: undefined as unknown as (text: string) => Promise<boolean>
})

const ModalProvider = (props: any) => {
    const [type, setType] = useState<ModalType>("tell")
    const [modalContent, setModalContent] = useState<string | undefined>()
    const [defaultInput, setDefaultInput] = useState<string | undefined>()
    const unSetModalContent = useCallback(() => {
        setModalContent(undefined)
    }, [setModalContent])

    const [onSubmit, setOnSubmit] = useState<
        ((input: string | boolean | null) => void) | undefined
    >()

    const ask = (text: string) => {
        return new Promise((resolve: (input: string | boolean) => void) => {
            setType("ask")
            setModalContent(text)
            setDefaultInput("")
            setOnSubmit(() => (input: string | boolean) => {
                resolve(input)
                setModalContent(undefined)
                setDefaultInput(undefined)
            })
        })
    }

    const tell = (text: string) => {
        return new Promise((resolve: (input: boolean) => void) => {
            setType("tell")
            setModalContent(text)
            setOnSubmit(() => (input: string | boolean) => {
                resolve(input ? true : false)
                setModalContent(undefined)
            })
        })
    }

    const verify = (text: string) => {
        return new Promise((resolve: (input: boolean) => void) => {
            setType("verify")
            setModalContent(text)
            setOnSubmit(() => (input: string | boolean) => {
                resolve(input ? true : false)
                setModalContent(undefined)
            })
        })
    }

    return (
        <ModalContext.Provider
            value={{
                ask,
                tell,
                verify
            }}
            {...props}
        >
            {props.children}
            <Modal
                modalContent={modalContent}
                unSetModalContent={unSetModalContent}
                onSubmit={onSubmit}
                defaultInput={defaultInput}
                type={type}
            />
        </ModalContext.Provider>
    )
}

const useModal = () => {
    const context = useContext(ModalContext)
    if (context === undefined) {
        throw new Error("useModal must be used within a ModalProvider")
    }
    return context
}

export { ModalProvider, useModal }
