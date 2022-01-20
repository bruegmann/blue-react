"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Die Seitenleiste für das Grid.
 */
var SidebarMenu = function (_React$Component) {
    _inherits(SidebarMenu, _React$Component);

    function SidebarMenu(props) {
        _classCallCheck(this, SidebarMenu);

        var _this = _possibleConstructorReturn(this, (SidebarMenu.__proto__ || Object.getPrototypeOf(SidebarMenu)).call(this, props));

        _this.state = {
            hasShadow: false,
            height: window.innerHeight,
            width: window.innerWidth
        };
        _this.updateDimensions = _this.updateDimensions.bind(_this);
        return _this;
    }

    _createClass(SidebarMenu, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            var blueAppSidebar = document.querySelector(".blue-app-sidebar");

            window.addEventListener("resize", this.updateDimensions);

            if (blueAppSidebar.scrollHeight > blueAppSidebar.clientHeight) {
                console.log("has scroll bar!");
                this.setState({ hasShadow: true });
            }

            blueAppSidebar.addEventListener("scroll", function () {
                if (blueAppSidebar.scrollHeight - blueAppSidebar.scrollTop === blueAppSidebar.clientHeight) {
                    _this2.setState({ hasShadow: false });
                } else {
                    _this2.setState({ hasShadow: true });
                }
            });
        }
    }, {
        key: "updateDimensions",
        value: function updateDimensions() {
            if (window.innerHeight > 500) {
                this.setState({ hasShadow: false });
            }
            this.setState({
                height: window.innerHeight,
                width: window.innerWidth
            });
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            window.removeEventListener("resize", this.updateDimensions);
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "blue-app-sidebar " + (this.props.sidebarClass ? this.props.sidebarClass : ""),
                    style: this.props.sidebarStyle ? this.props.sidebarStyle : {}
                },
                this.props.topContent && _react2.default.createElement(
                    "div",
                    { className: "blue-app-sidebar-top" },
                    this.props.topContent
                ),
                _react2.default.createElement(
                    "div",
                    { className: "blue-app-menu " + (this.props.menuClass ? this.props.menuClass : ""),
                        style: this.props.menuStyle ? this.props.menuStyle : {}
                    },
                    _react2.default.createElement(
                        "div",
                        { className: "fluent-btn" },
                        _react2.default.createElement("div", { className: "fluent-btn-ball" }),
                        this.props.children
                    )
                ),
                this.props.bottomContent && _react2.default.createElement(
                    "div",
                    { className: "blue-app-sidebar-bottom " + (this.state.hasShadow ? " has-shadow" : "") },
                    this.props.bottomContent
                )
            );
        }
    }]);

    return SidebarMenu;
}(_react2.default.Component);

SidebarMenu.propTypes = {
    /**
     * Erweiterung der className-Property der Seitenleiste.
     */
    sidebarClass: _propTypes2.default.string,

    /**
     * Setzt die style-Property der Seitenleiste.
     */
    sidebarStyle: _propTypes2.default.object,

    /**
     * Erweiterung der className-Property des Menüs.
     */
    menuClass: _propTypes2.default.string,

    /**
     * Setzt die style-Property des Menüs.
     */
    menuStyle: _propTypes2.default.object,

    /**
     * Inhalte oberhalb des Sidebar-Menüs
     */
    topContent: _propTypes2.default.any,

    /**
     * Inhalte für den Footer der Sidebar
     */
    bottomContent: _propTypes2.default.any

};

exports.default = SidebarMenu;