export default Utilities;
declare namespace Utilities {
    export function unregisterFluentBtns(): void;
    export function registerFluentBtns(): void;
    export function fetchData(input: any, init?: any, showErrorDetail?: boolean): Promise<void | Response>;
}
