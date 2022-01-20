"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Utilities = require("./Utilities.js");

var _Utilities2 = _interopRequireDefault(_Utilities);

var _Caret = require("./Caret");

var _Caret2 = _interopRequireDefault(_Caret);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * List-Item und Link für die Sidebar.
 */
var MenuItem = function (_React$Component) {
    _inherits(MenuItem, _React$Component);

    function MenuItem() {
        _classCallCheck(this, MenuItem);

        var _this = _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call(this));

        _this.state = {
            showDropdown: false,
            active: false
        };

        window.addEventListener("hashchange", function (event) {
            _this.checkActive();
        });
        return _this;
    }

    _createClass(MenuItem, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.checkActive();
        }
    }, {
        key: "onClick",
        value: function onClick(event) {
            if (this.props.onClick) {
                this.props.onClick(event);
            }

            if (this.props.children) {
                this.setState({ showDropdown: !this.state.showDropdown });
            }

            // When user clicks again on active menu item, scroll to top of page
            if (this.props.href && this.props.href == location.hash) {
                _Utilities2.default.scrollToTop();
            }
        }
    }, {
        key: "checkActive",
        value: function checkActive() {
            this.setState({
                active: location.hash.indexOf(this.props.href) > -1 || (this.props.isHome && (location.hash == "" || location.hash == "#/") ? true : false)
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var className = "blue-app-toggle-page blue-app-sidebar-btn btn" + (this.props.isActive ? " active" : "") + (this.props.className ? " " + this.props.className : "") + (this.props.children ? " blue-app-sidebar-dropdown-toggle" : "");

            var icon = void 0;

            if (typeof this.props.icon === "string") {
                // is className
                icon = _react2.default.createElement("span", { className: this.props.icon + (this.props.children ? " blue-app-sidebar-dropdown-icon" : "") });
            } else {
                // is element / component
                icon = this.props.icon;
            }

            var props = {
                id: "blue-action-menu-item-" + _Utilities2.default.guid()
            };

            Object.keys(this.props).map(function (key) {
                if (key != "isActive" && key != "isHome" && key != "children" && key != "dropdownClassName") {
                    props[key] = _this2.props[key];
                }
            });

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "a",
                    _extends({}, props, {
                        className: className + (this.props.isActive || this.state.active ? " active" : "") + (this.props.label ? " has-label" : ""),
                        onClick: function onClick(event) {
                            return _this2.onClick(event);
                        }
                    }),
                    icon,
                    " ",
                    _react2.default.createElement(
                        "span",
                        { className: "blue-app-sidebar-label" },
                        this.props.label
                    ),
                    this.props.children && _react2.default.createElement(_Caret2.default, {
                        open: this.state.showDropdown,
                        mirrored: true,
                        className: "blue-app-sidebar-dropdown-caret mt-2"
                    })
                ),
                this.state.showDropdown && _react2.default.createElement(
                    "div",
                    { className: "blue-app-sidebar-dropdown " + this.props.dropdownClassName },
                    this.props.children
                )
            );
        }
    }], [{
        key: "defaultProps",
        get: function get() {
            return {
                href: "javascript:void(0)",
                isActive: false,
                dropdownClassName: ""
            };
        }
    }]);

    return MenuItem;
}(_react2.default.Component);

MenuItem.propTypes = {
    /**
     * Setzt to-Property der NavLink-Komponente aus React Router.
     */
    to: _propTypes2.default.string,

    /**
     * Kann als Alternative zu to benutzt werden.
     */
    href: _propTypes2.default.string,

    /**
     * onClick Event
     */
    onClick: _propTypes2.default.func,

    /**
     * Klasse eines Icons oder Element, z.B. von blueicon-colored.
     */
    icon: _propTypes2.default.any,

    /**
     * Beschriftung des Links
     */
    label: _propTypes2.default.any,

    /**
     * Soll Item als "aktiv" markiert werden? Ist die to-Property gesetzt, wird Item automatisch als "aktiv" markiert, wenn entsprechende Seite aktiv ist.
     */
    isActive: _propTypes2.default.bool,

    /**
     * Als MenuItem für Startseite deklariert.
     */
    isHome: _propTypes2.default.bool,

    /**
     * Ergänzung der Klasse vom Dropdown-Menü.
     */
    dropdownClassName: _propTypes2.default.string,

    /**
     * Werden in einem Dropdown-Menü angezeigt.
     */
    children: _propTypes2.default.any
};

exports.default = MenuItem;