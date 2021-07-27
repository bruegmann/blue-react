import { ReactNode } from "react";
export interface BsModalProps {
    className?: string;
    children?: ReactNode;
    show: boolean;
    setShow: (show: boolean) => void;
}
/**
 * Wrapper for Bootstrap's Modal component.
 */
export default function BsModal({ className, children, show, setShow }: BsModalProps): JSX.Element;
