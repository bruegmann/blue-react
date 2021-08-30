/// <reference types="react" />
declare const BlueModalProvider: (props: any) => JSX.Element;
declare const useBlueModal: () => {
    ask: (text: string) => Promise<string | boolean>;
    tell: (text: string) => Promise<boolean>;
    verify: (text: string) => Promise<boolean>;
};
export { BlueModalProvider, useBlueModal };
