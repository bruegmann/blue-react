import React from "react";
import PropTypes from "prop-types";

import Utilities from "./Utilities";
import MenuItem from "./MenuItem";

/**
 * Eine Suchleiste, die zur Seitenleiste hinzugefügt werden kann.
 */
class Search extends React.Component {
    constructor() {
        super();

        this.state = {
            value: "",
            focus: false
        };

        this.SearchControlId = "blue-app-search-control-" + Utilities.guid();
    }

    static get defaultProps() {
        return {
            sidebar: false,
            body: false,
            reset: false,
            value: "",
            onChange: (event) => { },
            onSubmit: (event) => { },
            placeholder: "",
            autoFocus: false,
            icon: <span><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
            </svg></span>
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.value !== this.props.value) {
            this.setState({ value: this.props.value });
        }
    }

    toggleSidebar() {
        if (this.props.sidebar) {
            document.dispatchEvent(window.toggleSidebarEvent);
        }
    }

    render() {
        return (
            <form
                className={"blue-app-search " + (this.props.body ? "blue-app-search-body " : "") + (this.state.focus ? "focus" : "")}
                onSubmit={event => {
                    event.preventDefault();
                    this.toggleSidebar();
                    this.props.onSubmit(event);
                }}
            >
                <div className="blue-app-search-input-group input-group">
                    <div
                        className="input-group-prepend"
                        onClick={() => document.getElementById(this.SearchControlId).focus()}
                    >
                        <span className="input-group-text">
                            {this.props.icon}
                        </span>
                    </div>

                    <input
                        type="search"
                        value={this.state.value}
                        onChange={event => {
                            this.setState({ value: event.target.value });
                            this.props.onChange(event);
                        }}
                        id={this.SearchControlId}
                        className="blue-app-search-control form-control default input-lg"
                        placeholder={this.props.placeholder}
                        autoFocus={this.props.autoFocus}
                        style={{
                            zIndex: (this.props.body ? "0" : "")
                        }}
                        onFocus={() => this.setState({ focus: true })}
                        onBlur={() => this.setState({ focus: false })}
                    />

                    {this.props.reset && this.state.value.length > 0 &&
                        <div className="input-group-btn">
                            <button
                                type="button"
                                className="blue-app-search-reset-btn btn btn-link btn-lg"
                                onClick={() => {
                                    this.setState({ value: "" }, () => {
                                        document.getElementById(this.SearchControlId).focus();
                                    });
                                    this.props.onChange({
                                        target: {
                                            value: ""
                                        }
                                    });
                                }}
                            >
                                <span className="bi-navigate_cross" />
                            </button>
                        </div>
                    }
                </div>


                {
                    this.props.sidebar &&
                    <MenuItem
                        href="javascript:void(0)"
                        className="blue-app-search-btn"
                        icon="bi-magnifying_glass blue-app-search-btn-icon"
                        onClick={() => {
                            this.toggleSidebar();
                            setTimeout(() => {
                                document.querySelector(".blue-app-search-control").select();
                            }, 200);
                        }}
                    />
                }

            </form >
        );
    }
}

Search.propTypes = {
    /**
     * Wird Komponente in der Sidebar genutzt?
     */
    sidebar: PropTypes.bool,

    /**
     * Wird Komponente im Body genutzt?
     */
    body: PropTypes.bool,

    /**
     * Erlaube Zurücksetzen?
     */
    reset: PropTypes.bool,

    value: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    placeholder: PropTypes.string,
    autoFocus: PropTypes.bool,
    icon: PropTypes.any
};

export default Search;