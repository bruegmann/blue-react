import React from "react";
import PropTypes from "prop-types";

/**
 * Die Seitenleiste für das Grid.
 */
class SidebarMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasShadow: false,
            height: window.innerHeight,
            width: window.innerWidth,
        }
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {

        const blueAppSidebar = document.querySelector(".blue-app-sidebar");

        window.addEventListener("resize", this.updateDimensions)

        if (blueAppSidebar.scrollHeight > blueAppSidebar.clientHeight) {
            console.log("has scroll bar!");
            this.setState({ hasShadow: true })
        }

        blueAppSidebar.addEventListener("scroll", () => {
            if (blueAppSidebar.scrollHeight - blueAppSidebar.scrollTop === blueAppSidebar.clientHeight) {
                this.setState({ hasShadow: false });
            } else {
                this.setState({ hasShadow: true });
            }
        });

    }

    updateDimensions() {
        if (window.innerHeight > 500) {
            this.setState({ hasShadow: false });
        }
        this.setState({
            height: window.innerHeight,
            width: window.innerWidth,
        });
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    render() {
        return (
            <div className={"blue-app-sidebar " + (this.props.sidebarClass ? this.props.sidebarClass : "")}
                style={this.props.sidebarStyle ? this.props.sidebarStyle : {}}
            >
                {this.props.topContent &&
                    <div className="blue-app-sidebar-top">
                        {this.props.topContent}
                    </div>
                }

                <div className={"blue-app-menu " + (this.props.menuClass ? this.props.menuClass : "")}
                    style={this.props.menuStyle ? this.props.menuStyle : {}}
                >
                    <div className="fluent-btn">
                        <div className="fluent-btn-ball" />
                        {this.props.children}
                    </div>
                </div>

                {this.props.bottomContent &&
                    <div className={"blue-app-sidebar-bottom " + (this.state.hasShadow ? " has-shadow" : "")}>
                        {this.props.bottomContent}
                    </div>
                }
            </div>
        );
    }
}

SidebarMenu.propTypes = {
    /**
     * Erweiterung der className-Property der Seitenleiste.
     */
    sidebarClass: PropTypes.string,

    /**
     * Setzt die style-Property der Seitenleiste.
     */
    sidebarStyle: PropTypes.object,

    /**
     * Erweiterung der className-Property des Menüs.
     */
    menuClass: PropTypes.string,

    /**
     * Setzt die style-Property des Menüs.
     */
    menuStyle: PropTypes.object,

    /**
     * Inhalte oberhalb des Sidebar-Menüs
     */
    topContent: PropTypes.any,

    /**
     * Inhalte für den Footer der Sidebar
     */
    bottomContent: PropTypes.any

};

export default SidebarMenu;