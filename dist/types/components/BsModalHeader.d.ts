import { ReactNode } from "react";
export interface BsModalHeaderProps {
    className?: string;
    children?: ReactNode;
    toggle?: () => void;
}
export default function BsModalHeader({ className, children, toggle }: BsModalHeaderProps): JSX.Element;
