export declare type breakOption = "sm" | "md" | "lg" | "xl";
export declare type ModalType = "ask" | "tell" | "verify";
interface Phrases {
    [key: string]: string[];
}
export declare function getPhrase(keyword: string, countryCode?: string | undefined, _phrases?: Phrases | undefined): string;
export {};
