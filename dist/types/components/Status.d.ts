import { ReactNode } from "react";
import { StatusAlert, StatusType } from "./shared";
export interface StatusProps {
    alert?: StatusAlert;
    onUnsetAlert?: () => void;
    successIcon?: ReactNode;
    infoIcon?: ReactNode;
    warningIcon?: ReactNode;
    dangerIcon?: ReactNode;
    status?: StatusType;
}
export default function Status({ alert, onUnsetAlert, successIcon, infoIcon, warningIcon, dangerIcon, status }: StatusProps): JSX.Element;
