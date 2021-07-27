import { ReactNode } from "react";
export interface BsToastProps {
    className?: string;
    children?: ReactNode;
    show: boolean;
    setShow: (show: boolean) => void;
    zIndex?: number;
}
/**
 * Wrapper for Bootstrap's Toast component.
 */
export default function BsToast({ className, children, show, setShow, zIndex }: BsToastProps): JSX.Element;
