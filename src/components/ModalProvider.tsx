import React, { createContext, ReactNode, useCallback, useContext, useState } from "react"
import { ModalType } from "./shared"
import Modal from "./Modal"

interface ModelAlertOptions {
    title?: string
    icon?: ReactNode
    switchPrimaryBtn?: boolean
    acceptBtnText?: string
    cancelBtnText?: string
}

interface ModelAskOptions extends ModelAlertOptions {
    inputType?: string
}

const ModalContext = createContext({
    ask: undefined as unknown as (text: string, options?: ModelAskOptions) => Promise<string | boolean>,
    tell: undefined as unknown as (text: string, options?: ModelAlertOptions) => Promise<boolean>,
    verify: undefined as unknown as (text: string, options?: ModelAlertOptions) => Promise<boolean>
})

export interface ModalProviderProps {
    children?: ReactNode
}

const ModalProvider = ({ children, ...rest }: ModalProviderProps) => {
    const [type, setType] = useState<ModalType>("tell")
    const [modalContent, setModalContent] = useState<string | undefined>()
    const [modalTitle, setModalTitle] = useState<string | undefined>()
    const [modalIcon, setModalIcon] = useState<ReactNode | undefined>()
    const [defaultInput, setDefaultInput] = useState<string | undefined>()
    const [inputType, setInputType] = useState<string>()
    const [switchPrimaryBtn, setSwitchPrimaryBtn] = useState<boolean | undefined>(false)
    const [acceptBtnText, setAcceptBtnText] = useState<string | undefined>()
    const [cancelBtnText, setCancelBtnText] = useState<string | undefined>()

    const unSetModalContent = useCallback(() => {
        setModalContent(undefined)
    }, [setModalContent])

    const [onSubmit, setOnSubmit] = useState<((input: string | boolean | null) => void) | undefined>()

    const ask = (text: string, options?: ModelAskOptions) => {
        return new Promise((resolve: (input: string | boolean) => void) => {
            setType("ask")
            setModalContent(text)
            if (options) {
                const { title, icon, inputType, switchPrimaryBtn, acceptBtnText, cancelBtnText } = options
                setModalTitle(title)
                setModalIcon(icon)
                setInputType(inputType)
                setSwitchPrimaryBtn(switchPrimaryBtn)
                setAcceptBtnText(acceptBtnText)
                setCancelBtnText(cancelBtnText)
            }
            setDefaultInput("")
            setOnSubmit(() => (input: string | boolean) => {
                resolve(input)
                setModalContent(undefined)
                setDefaultInput(undefined)
            })
        })
    }

    const tell = (text: string, options?: ModelAlertOptions) => {
        return new Promise((resolve: (input: boolean) => void) => {
            setType("tell")
            setModalContent(text)
            if (options) {
                const { title, icon, switchPrimaryBtn, acceptBtnText, cancelBtnText } = options
                setModalTitle(title)
                setModalIcon(icon)
                setSwitchPrimaryBtn(switchPrimaryBtn)
                setAcceptBtnText(acceptBtnText)
                setCancelBtnText(cancelBtnText)
            }
            setOnSubmit(() => (input: string | boolean) => {
                resolve(input ? true : false)
                setModalContent(undefined)
            })
        })
    }

    const verify = (text: string, options?: ModelAlertOptions) => {
        return new Promise((resolve: (input: boolean) => void) => {
            setType("verify")
            setModalContent(text)
            if (options) {
                const { title, icon, switchPrimaryBtn, acceptBtnText, cancelBtnText } = options
                setModalTitle(title)
                setModalIcon(icon)
                setSwitchPrimaryBtn(switchPrimaryBtn)
                setAcceptBtnText(acceptBtnText)
                setCancelBtnText(cancelBtnText)
            }
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
                inputType={inputType}
                switchPrimaryBtn={switchPrimaryBtn}
                acceptBtnText={acceptBtnText}
                cancelBtnText={cancelBtnText}
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
