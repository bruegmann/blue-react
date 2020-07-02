import React from "react";
import PropTypes from "prop-types";

import Utilities from "./Utilities.js";

/**
 * Geeignet als Login-Bildschirm.
 */

class Intro extends React.Component {
    static get defaultProps() {
        return {
            logoMaxWidth: "100px"
        };
    }

    componentDidMount() {
        Utilities.registerFluentBtns();
    }

    render() {
        return (
            <div className="sign-in-screen">
                <div className="sign-in-container mx-1">
                    <div className="jumbotron">
                        <div className="text-center">
                            <img style={{ maxWidth: this.props.logoMaxWidth }} src={this.props.logo} />
                            <h2 className="mt-4 mb-3">{this.props.title}</h2>
                        </div>

                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

Intro.propTypes = {
    /**
     * Kann ein Bild sein. Wird im src-Attribute implementiert.
     */
    logo: PropTypes.string,

    /**
     * Maximale Breite des Logos.
     */
    logoMaxWidth: PropTypes.string,

    /**
     * Der Text, der unter dem Logo erscheint
     */
    title: PropTypes.string,

    /**
     * Inhalt
     */
    children: PropTypes.any
};

export default Intro;