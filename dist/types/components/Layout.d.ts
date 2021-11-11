import { CSSProperties, ReactNode } from "react";
export interface LayoutProps {
    children?: ReactNode;
    className?: string;
    disableHeaders?: boolean;
    expandSidebar?: boolean;
    hideSidebarMenu?: boolean;
    id?: string;
    open: boolean;
    onChangeOpen: (open: boolean) => void;
    style?: CSSProperties;
    sidebarToggleIconComponent?: ReactNode;
}
export default function Layout({ children, className, disableHeaders, expandSidebar, hideSidebarMenu, open, onChangeOpen, sidebarToggleIconComponent, ...rest }: LayoutProps): JSX.Element;
