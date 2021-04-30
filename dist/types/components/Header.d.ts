export default Header;
/**
 * The top of a page.
 */
declare class Header extends React.Component<any, any, any> {
    constructor(props: any);
    constructor(props: any, context: any);
}
declare namespace Header {
    export { Title };
    export { Actions };
}
import React from "react";
import Title from "./HeaderTitle.js";
import Actions from "./HeaderActions.js";
