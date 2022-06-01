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
    function setAlertMessage(message: any, alertClassName: string | undefined, close: any, detailText: any): void;
    function guid(): string;
    function scrollToTop(): void;
    function fetchData(input: any, init?: any, showErrorDetail?: boolean, onError?: any): Promise<Response>;
}
