import { ReactNode } from "react";
interface ModelAlertOptions {
    title?: string;
    icon?: ReactNode;
    switchPrimaryBtn?: boolean;
}
interface ModelAskOptions extends ModelAlertOptions {
    inputType?: string;
}
export interface ModalProviderProps {
    children?: ReactNode;
}
declare const ModalProvider: ({ children, ...rest }: ModalProviderProps) => JSX.Element;
declare const useModal: () => {
    ask: (text: string, options?: ModelAskOptions) => Promise<string | boolean>;
    tell: (text: string, options?: ModelAlertOptions) => Promise<boolean>;
    verify: (text: string, options?: ModelAlertOptions) => Promise<boolean>;
};
export { ModalProvider, useModal };
