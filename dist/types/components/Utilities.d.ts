export declare function hasClass(el: HTMLElement | null, className: string): boolean;
export declare function addClass(el: HTMLElement | null, className: string): void;
export declare function removeClass(el: HTMLElement | null, className: string): void;
export declare function toggleClass(element: HTMLElement | null, className: string): void;
export declare function startLoading(): void;
export declare function finishLoading(): void;
export declare function showSuccess(): void;
export declare function hideSuccess(): void;
export declare function toggleActions(): void;
export declare function resetAlertMessage(alertClassName?: string): void;
export declare function setAlertMessage(message: string, alertClassName?: string, close?: boolean, detailText?: string): void;
export declare const guid: () => string;
export declare function scrollToTop(): void;
export declare function fetchData(input: RequestInfo | URL, init?: RequestInit | undefined, showErrorDetail?: boolean | undefined, onError?: (errorMessage: string, reason: Response) => void): Promise<Response>;
declare const _default: {
    hasClass: typeof hasClass;
    addClass: typeof addClass;
    removeClass: typeof removeClass;
    toggleClass: typeof toggleClass;
    startLoading: typeof startLoading;
    finishLoading: typeof finishLoading;
    showSuccess: typeof showSuccess;
    hideSuccess: typeof hideSuccess;
    toggleActions: typeof toggleActions;
    resetAlertMessage: typeof resetAlertMessage;
    setAlertMessage: typeof setAlertMessage;
    guid: () => string;
    scrollToTop: typeof scrollToTop;
    fetchData: typeof fetchData;
};
export default _default;
