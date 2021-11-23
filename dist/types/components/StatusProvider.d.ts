import { ReactNode } from "react";
import { StatusAlert, StatusType } from "./shared";
export interface StatusProviderProps {
    children?: ReactNode;
    successIcon?: ReactNode;
    infoIcon?: ReactNode;
    warningIcon?: ReactNode;
    dangerIcon?: ReactNode;
}
declare const StatusProvider: ({ children, successIcon, infoIcon, warningIcon, dangerIcon, ...rest }: StatusProviderProps) => JSX.Element;
declare const useStatus: () => {
    setAlert: (alert: StatusAlert | null) => void;
    setStatus: (status: StatusType) => void;
};
export { useStatus, StatusProvider };
