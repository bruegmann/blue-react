/// <reference types="react" />
interface ModelAskOptions {
    inputType?: string;
}
declare const ModalProvider: (props: any) => JSX.Element;
declare const useModal: () => {
    ask: (text: string, options?: ModelAskOptions | undefined) => Promise<string | boolean>;
    tell: (text: string) => Promise<boolean>;
    verify: (text: string) => Promise<boolean>;
};
export { ModalProvider, useModal };
