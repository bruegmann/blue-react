import React, { createContext, ReactNode, useContext, useState } from "react"
import { StatusAlert, StatusType } from "./shared"
import Status from "./Status"

const StatusContext = createContext({
    setAlert: undefined as unknown as (alert: StatusAlert | null) => void,
    setStatus: undefined as unknown as (status: StatusType) => void
})

export interface StatusProviderProps {
    children?: ReactNode
    successIcon?: ReactNode
    infoIcon?: ReactNode
    warningIcon?: ReactNode
    dangerIcon?: ReactNode
}

const StatusProvider = ({
    children,
    successIcon,
    infoIcon,
    warningIcon,
    dangerIcon,
    ...rest
}: StatusProviderProps) => {
    const [alert, setAlert] = useState<StatusAlert | null>(null)
    const [status, setStatus] = useState<StatusType>(null)

    return (
        <StatusContext.Provider
            value={{
                setAlert,
                setStatus
            }}
            {...rest}
        >
            {children}
            <Status
                alert={alert || undefined}
                onUnsetAlert={() => setAlert(null)}
                successIcon={successIcon}
                infoIcon={infoIcon}
                warningIcon={warningIcon}
                dangerIcon={dangerIcon}
                status={status}
            />
        </StatusContext.Provider>
    )
}

const useStatus = () => {
    const context = useContext(StatusContext)
    if (context === undefined) {
        throw new Error("useStatus must be used within a StatusProvider")
    }
    return context
}

export { useStatus, StatusProvider }
