import { ReactNode } from "react";
export interface BsToastProps {
    className?: string;
    children?: ReactNode;
    show: boolean;
    setShow: (show: boolean) => void;
    timeInfo?: string | ReactNode;
    title?: string | ReactNode;
    zIndex?: number;
}
/**
 * Wrapper for Bootstrap's Toast component.
 */
export default function BsToast({ className, children, show, setShow, timeInfo, title, zIndex }: BsToastProps): JSX.Element;
