declare module Utilities {
    /** Checks if element has a specific class name. */
    function hasClass(el: Element, className: string): boolean;

    /** Adds a class name to an element. */
    function addClass(el: Element, className: string): void;

    /** Removes a class name from an element. */
    function removeClass(el: Element, className: string): void;

    /** Adds class name to element, if it doesn't it yet. Otherwise it removes it. */
    function toggleClass(element: Element, className: string): void;

    /** Shows loading animation. */
    function startLoading(): void;

    /** Hides loading animation. */
    function finishLoading(): void;

    /** Shows success symbol. */
    function showSuccess(): void;

    /** Hides success symbol. */
    function hideSuccess(): void;

    /** Shows action menu or hides it. */
    function toggleActions(): void;

    /** Resets alert message and removes it. */
    function resetAlertMessage(alertClassName?: ("loading" | "success" | "info" | "warning" | "danger")): void;

    /** Shows an alert message. */
    function setAlertMessage(
        message: string,
        alertClassName?: ("loading" | "success" | "info" | "warning" | "danger"),
        close?: boolean,
        detailText?: string
    ): void;

    /** Returns string of random characters. */
    function guid(): string;

    /** Scrolls to the top of the page. */
    function scrollToTop(): void;

    /** Disables the effect of Fluent buttons. */
    function unregisterFluentBtns(): void;

    /** Enables the effect of Fluent buttons. */
    function registerFluentBtns(): void;

    /** Uses native `fetch` function, but adds error handling and shows error messages if there are any. */
    function fetchData(input: RequestInfo, init?: RequestInit | undefined): Promise<Response>;
}
export default Utilities;