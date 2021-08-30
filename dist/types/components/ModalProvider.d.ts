/// <reference types="react" />
declare const ModalProvider: (props: any) => JSX.Element;
declare const useModal: () => {
    ask: (text: string) => Promise<string | boolean>;
    tell: (text: string) => Promise<boolean>;
    verify: (text: string) => Promise<boolean>;
};
export { ModalProvider, useModal };
