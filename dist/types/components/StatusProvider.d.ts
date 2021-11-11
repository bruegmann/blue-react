import { ReactNode } from "react";
export interface StatusProviderProps {
    children?: ReactNode;
    successIcon?: ReactNode;
}
declare const StatusProvider: ({ children, successIcon, ...rest }: StatusProviderProps) => JSX.Element;
declare const useStatus: () => {
    showSuccess: () => void;
    hideSuccess: () => void;
};
export { useStatus, StatusProvider };
