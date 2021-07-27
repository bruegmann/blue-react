export default Utilities;
declare namespace Utilities {
    function unregisterFluentBtns(): void;
    function registerFluentBtns(): void;
    function fetchData(input: any, init?: any, showErrorDetail?: boolean): Promise<void | Response>;
}
