import React from "react";

export interface IActionMenuProps {
    /**
     * Versteckt die drei Punkte in mobiler Ansicht.
     * Das kann nützlich sein, wenn mehrere ActionMenus genutzt werden, aber nicht überall der Toggle angezeigt werden soll.
     */
    hideToggleAction?: boolean;

    children?: any
}

/**
 * Das Action-Menü an der oberen rechten Ecke einer Seite. Hier können Aktionen platziert werden, die im Kontext der aktuellen Seite stehen.
 */
declare class ActionMenu extends React.Component<IActionMenuProps, any> { }
export default ActionMenu;