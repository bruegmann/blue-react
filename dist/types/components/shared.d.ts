export declare type breakOption = "sm" | "md" | "lg" | "xl";
export declare type ModalType = "ask" | "tell" | "verify";
export declare type StatusType = null | "loading" | "success" | "info" | "warning" | "danger";
export interface StatusAlert {
    title?: string;
    alertClassName?: string;
    close?: boolean;
    detailText?: string;
    status?: StatusType;
}
interface Phrases {
    [key: string]: string[];
}
export declare function getPhrase(keyword: string, countryCode?: string | undefined, _phrases?: Phrases | undefined): string;
export {};
