import { ReactNode } from "react";
export interface StatusProps {
    successIcon?: ReactNode;
    success?: boolean;
}
export default function Status({ successIcon, success }: StatusProps): JSX.Element;
