import React from "react";

export interface ISearchProps {
    /**
     * Wird Komponente in der Sidebar genutzt?
     */
    sidebar?: boolean;

    /**
     * Wird Komponente im Body genutzt?
     */
    body?: boolean;

    /**
     * Erlaube Zurücksetzen?
     */
    reset?: boolean;

    value?: string;
    onChange?: (event: React.ChangeEvent) => void;
    onSubmit?: (event: React.FormEvent) => void;
    placeholder?: string;
    autoFocus?: boolean;
    icon?: any;
}

/**
 * Eine Suchleiste, die zur Seitenleiste hinzugefügt werden kann.
 */
declare class Search extends React.Component<ISearchProps, any> { }
export default Search;