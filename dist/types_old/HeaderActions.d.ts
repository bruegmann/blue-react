import React from "react";

export interface IHeaderActionsProps {
    className?: string;

    /**
     * Legt fest, ab welcher Breite umgebrochen wird. Mögliche Werte: <code>"sm"</code> (768px), <code>"md"</code> (992px), <code>"lg"</code> (1200px)
     */
    breakpoint?: string;
}

/**
 * Hier werden z.B. Buttons für die aktuelle Seite platziert.
 */
declare class HeaderActions extends React.Component<IHeaderActionsProps, any> { }
export default HeaderActions;