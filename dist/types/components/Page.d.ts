export default Page;
declare function Page({ children, title }: {
    children: any;
    title: any;
}): JSX.Element;
declare namespace Page {
    export { Header };
    export { Body };
    export namespace propTypes {
        export const hasActions: PropTypes.Requireable<boolean>;
        export const title: PropTypes.Requireable<string>;
    }
}
import Header from "./Header.js";
import Body from "./Body.js";
import PropTypes from "prop-types";
