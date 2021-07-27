import { ReactNode } from "react";
export interface BsToastProps {
    autohide?: boolean;
    className?: string;
    children?: ReactNode;
    show: boolean;
    setShow: (show: boolean) => void;
    timeInfo?: string | ReactNode;
    title?: string | ReactNode;
}
/**
 * Wrapper for Bootstrap's Toast component.
 */
export default function BsToast({ autohide, className, children, show, setShow, timeInfo, title }: BsToastProps): JSX.Element;
