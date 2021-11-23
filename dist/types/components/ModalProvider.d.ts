import { ReactNode } from "react";
export interface ModalProviderProps {
    children?: ReactNode;
}
declare const ModalProvider: ({ children, ...rest }: ModalProviderProps) => JSX.Element;
declare const useModal: () => {
    ask: (text: string) => Promise<string | boolean>;
    tell: (text: string) => Promise<boolean>;
    verify: (text: string) => Promise<boolean>;
};
export { ModalProvider, useModal };
