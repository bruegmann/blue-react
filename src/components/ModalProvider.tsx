import React, { createContext, ReactNode, useCallback, useContext, useState } from "react"
import { ModalType } from "./shared"
import Modal from "./Modal"

const ModalContext = createContext({
    ask: undefined as unknown as (text: string, title?: string, icon?: HTMLElement | any) => Promise<string | boolean>,
    tell: undefined as unknown as (text: string, title?: string, icon?: HTMLElement | any) => Promise<boolean>,
    verify: undefined as unknown as (text: string, title?: string, icon?: HTMLElement | any) => Promise<boolean>
})

export interface ModalProviderProps {
    children?: ReactNode
}

const ModalProvider = ({ children, ...rest }: ModalProviderProps) => {
    const [type, setType] = useState<ModalType>("tell")
    const [modalContent, setModalContent] = useState<string | undefined>()
    const [modalTitle, setModalTitle] = useState<string | undefined>()
    const [modalIcon, setModalIcon] = useState<HTMLElement | any | undefined>()
    const [defaultInput, setDefaultInput] = useState<string | undefined>()

    const unSetModalContent = useCallback(() => {
        setModalContent(undefined)
    }, [setModalContent])

    const [onSubmit, setOnSubmit] = useState<((input: string | boolean | null) => void) | undefined>()

    const ask = (text: string, title?: string, icon?: any) => {
        return new Promise((resolve: (input: string | boolean) => void) => {
            setType("ask")
            setModalContent(text)
            setModalTitle(title)
            setModalIcon(icon)
            setDefaultInput("")
            setOnSubmit(() => (input: string | boolean) => {
                resolve(input)
                setModalContent(undefined)
                setDefaultInput(undefined)
            })
        })
    }

    const tell = (text: string, title?: string, icon?: any) => {
        return new Promise((resolve: (input: boolean) => void) => {
            setType("tell")
            setModalContent(text)
            setModalTitle(title)
            setModalIcon(icon)
            setOnSubmit(() => (input: string | boolean) => {
                resolve(input ? true : false)
                setModalContent(undefined)
            })
        })
    }

    const verify = (text: string, title?: string, icon?: any) => {
        return new Promise((resolve: (input: boolean) => void) => {
            setType("verify")
            setModalContent(text)
            setModalTitle(title)
            setModalIcon(icon)
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
            {...rest}
        >
            {children}
            <Modal
                modalContent={modalContent}
                modalTitle={modalTitle}
                modalIcon={modalIcon}
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
