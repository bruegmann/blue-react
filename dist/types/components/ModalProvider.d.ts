import { ReactNode } from "react";
export interface ModalProviderProps {
    children?: ReactNode;
}
declare const ModalProvider: ({ children, ...rest }: ModalProviderProps) => JSX.Element;
declare const useModal: () => {
    ask: (text: string, title?: string) => Promise<string | boolean>;
    tell: (text: string, title?: string) => Promise<boolean>;
    verify: (text: string, title?: string) => Promise<boolean>;
};
export { ModalProvider, useModal };
