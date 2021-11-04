export default Utilities;
declare namespace Utilities {
    function hasClass(el: any, className: any): any;
    function addClass(el: any, className: any): void;
    function removeClass(el: any, className: any): void;
    function toggleClass(element: any, className: any): void;
    function startLoading(): void;
    function finishLoading(): void;
    function showSuccess(): void;
    function hideSuccess(): void;
    function toggleActions(): void;
    function resetAlertMessage(alertClassName?: string): void;
    function setAlertMessage(message: any, alertClassName?: string, close?: any, detailText?: any): void;
    function guid(): string;
    function scrollToTop(): void;
    /**
     * @deprecated Fluent buttons got removed from blue-react.
     */
    function fluentBtnsListener(event: any, btn: any): void;
    /**
     * @deprecated Fluent buttons got removed from blue-react.
     */
    function unregisterFluentBtns(): void;
    /**
     * @deprecated Fluent buttons got removed from blue-react.
     */
    function registerFluentBtns(): void;
    function fetchData(input: any, init?: any, showErrorDetail?: boolean, onError?: any): Promise<Response>;
}
