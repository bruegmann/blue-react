import { ReactNode } from "react";
export interface ModalProviderProps {
    children?: ReactNode;
}
declare const ModalProvider: ({ children, ...rest }: ModalProviderProps) => JSX.Element;
declare const useModal: () => {
    ask: (text: string, title?: string, icon?: ReactNode) => Promise<string | boolean>;
    tell: (text: string, title?: string, icon?: ReactNode) => Promise<boolean>;
    verify: (text: string, title?: string, icon?: ReactNode) => Promise<boolean>;
};
export { ModalProvider, useModal };
