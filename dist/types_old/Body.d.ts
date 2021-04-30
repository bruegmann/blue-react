import React from "react";
import { breakOption } from "./shared";

export interface IBodyProps {
    id?: string;
    className?: string;

    /**
     * Setzt die Klasse für den Container. Mehr Infos unter https://getbootstrap.com/docs/4.0/layout/overview/#containers
     */
    containerClass?: string;

    /**
     * Set `true` if this page uses `<Actions />`, so this component will get enough padding to avoid overlapping of the content.
     */
    hasActions?: boolean;
    break?: breakOption;
}

/**
 * Enthält den Inhalt einer Seite.
 */
declare class Body extends React.Component<IBodyProps, any> { }
export default Body;