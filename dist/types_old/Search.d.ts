import React from "react";

export interface ISearchProps {
    autoFocus?: boolean;

    /**
     * Wird Komponente im Body genutzt?
     */
    body?: boolean;

    className?: string;
    icon?: any;
    onChange?: (event: React.ChangeEvent) => void;
    onSubmit?: (event: React.FormEvent) => void;
    placeholder?: string;

    /**
     * Erlaube Zurücksetzen?
     */
    reset?: boolean;

    /**
     * Wird Komponente in der Sidebar genutzt?
     */
    sidebar?: boolean;

    value?: string;
}

/**
 * Eine Suchleiste, die zur Seitenleiste hinzugefügt werden kann.
 */
declare class Search extends React.Component<ISearchProps, any> { }
export default Search;