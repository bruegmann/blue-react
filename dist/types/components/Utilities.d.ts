export default Utilities;
declare namespace Utilities {
    export function hasClass(el: any, className: any): any;
    export function addClass(el: any, className: any): void;
    export function removeClass(el: any, className: any): void;
    export function toggleClass(element: any, className: any): void;
    export function startLoading(): void;
    export function finishLoading(): void;
    export function showSuccess(): void;
    export function hideSuccess(): void;
    export function toggleActions(): void;
    export function resetAlertMessage(alertClassName?: string): void;
    export function setAlertMessage(message: any, alertClassName?: string, close?: any, detailText?: any): void;
    export function guid(): string;
    export function scrollToTop(): void;
    export function fluentBtnsListener(event: any, btn: any): void;
    export function unregisterFluentBtns(): void;
    export function registerFluentBtns(): void;
    export function fetchData(input: any, init?: any, showErrorDetail?: boolean): Promise<void | Response>;
}
