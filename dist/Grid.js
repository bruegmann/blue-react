"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SidebarMenu = require("./SidebarMenu.js");

var _SidebarMenu2 = _interopRequireDefault(_SidebarMenu);

var _Utilities = require("./Utilities.js");

var _Utilities2 = _interopRequireDefault(_Utilities);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Damit Events auch in IE funktionieren
// require("custom-event-polyfill/custom-event-polyfill.js");

window.toggleSidebarEvent = new CustomEvent("toggleSidebar");

/**
 * Das Grundgerüst. Sobald diese Komponente gemountet wurde, ist sie global über <code>window.blueGridRef</code> zugreifbar.<br>
 * Außerdem kann über <code>blueGridRef.addEventListener(eventName, (prevProps, prevState) => { })</code> ein Event-Listener angefügt werden.
 * <br><br>
 * Erlaubte Event-Listener:
 * <table class="table">
 * <thead><tr><th>Event name</th><th>Description</th><th>Beispiel</th></tr></thead>
 * <tbody>
 * <tr>
 * <th>componentDidUpdate</th>
 * <td>Komponente wurde aktualisiert.</td>
 * <td><code>blueGridRef.addEventListener("componentDidUpdate", (prevProps, prevState) => { })</code></td>
 * </tr>
 * 
 * <tr>
 * <th>pageDidShowAgain</th>
 * <td>Seite wurde erneut angezeigt, mit altem Stand. Im Callback kann Komponente neu initialisiert werden.</td>
 * <td><code>blueGridRef.addEventListener("pageDidShowAgain", "home", (prevProps, prevState) => { })</code></td>
 * </tr>
 * 
 * <tr>
 * <th>pageDidHide</th>
 * <td>Seite wurde versteckt (andere Seite wurde angezeigt).</td>
 * <td><code>blueGridRef.addEventListener("pageDidHide", "home", (prevProps, prevState) => { })</code></td>
 * </tr>
 * </tbody>
 * </table>
 */

var Grid = function (_React$Component) {
    _inherits(Grid, _React$Component);

    function Grid() {
        _classCallCheck(this, Grid);

        var _this = _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).call(this));

        window.blueGridRef = _this;

        _this.defaultMatch = ["home"];

        _this.state = {
            sidebarIn: false,
            match: null,
            history: [],
            hash: location.hash
        };

        _this.hideSidebar = _this.hideSidebar.bind(_this);

        window.addEventListener("hashchange", function (event) {
            _this.initMatch();
        });

        _this.eventListeners = [];
        return _this;
    }

    _createClass(Grid, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            var _this2 = this;

            document.addEventListener("toggleSidebar", function () {
                _this2.toggleSidebar();
            }, false);

            this.setState({ sidebarIn: this.props.sidebarIn });

            this.initMatch();
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {

            var me = this;

            document.addEventListener("touchstart", function (event) {
                var xPos = event.touches[0].pageX;

                if (xPos < 5) {
                    me.toggleSidebar(event);
                } else if (me.state.sidebarIn && xPos > 20) {
                    me.toggleSidebar(event);
                }
            });

            _Utilities2.default.registerFluentBtns();
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            var _this3 = this;

            this.eventListeners.map(function (eventListener) {
                if (eventListener[0] == "componentDidUpdate") {
                    var callback = eventListener[1];
                    eventListener[1](prevProps, prevState);
                }

                if (eventListener[0] == "pageDidShowAgain") {
                    var pageId = eventListener[1];
                    var _callback = eventListener[2];

                    if (prevState.hash != _this3.state.hash && _this3.state.match[0] == pageId) {
                        _callback(prevProps, prevState);
                    }
                }

                if (eventListener[0] == "pageDidHide") {
                    var _pageId = eventListener[1];
                    var _callback2 = eventListener[2];

                    if (prevState.hash != _this3.state.hash && prevState.match[0] == _pageId) {
                        _callback2(prevProps, prevState);
                    }
                }
            });
        }
    }, {
        key: "toggleSidebar",
        value: function toggleSidebar(event) {
            if (this.state.sidebarIn) {
                this.hideSidebar(event);
            }
            this.setState({ sidebarIn: true });
        }
    }, {
        key: "hideSidebar",
        value: function hideSidebar(e) {
            if (!(_Utilities2.default.hasClass(e.target, "blue-app-open-menu") || _Utilities2.default.hasClass(e.target, "bi-menu") || _Utilities2.default.hasClass(e.target, "blue-app-search") || _Utilities2.default.hasClass(e.target, "blue-app-search-control") || _Utilities2.default.hasClass(e.target, "blue-app-search-btn") || _Utilities2.default.hasClass(e.target, "blue-app-search-btn-icon") || _Utilities2.default.hasClass(e.target, "blue-app-sidebar-dropdown-toggle") || _Utilities2.default.hasClass(e.target, "blue-app-sidebar-dropdown-caret") || _Utilities2.default.hasClass(e.target, "blue-app-sidebar-dropdown-icon") || _Utilities2.default.hasClass(e.target, "blue-app-sidebar-exception"))) {
                this.setState({ sidebarIn: false });
            }
        }
    }, {
        key: "initMatch",
        value: function initMatch() {
            var newMatch = void 0;

            if (location.hash && location.hash != "" && location.hash != "#/") {
                newMatch = location.hash.replace("#", "").split("/").filter(function (n) {
                    return n != "";
                });
            } else {
                newMatch = this.defaultMatch;
            }

            if (this.props.unrouteable) {
                newMatch = this.defaultMatch;
            }

            if (!(this.state.history.indexOf(newMatch[0]) > -1)) {
                this.state.history.push(newMatch[0]);
            }

            this.setState({ match: newMatch, history: this.state.history, hash: location.hash });
        }
    }, {
        key: "addEventListener",
        value: function addEventListener(param1, param2, param3) {
            this.eventListeners.push([param1, param2, param3]);
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement("div", { className: "blue-app-wrapper" }),
                _react2.default.createElement(
                    "div",
                    { id: this.props.id ? this.props.id : "",
                        style: this.props.style ? this.props.style : {},
                        className: "blue-app-grid" + (this.props.className ? " " + this.props.className : "") + (this.state.sidebarIn ? " open" : "") + (this.props.hideSidebarMenu ? " hasNoSidebarMenu" : " hasSidebarMenu") + (this.props.expandSidebar ? " expand-sidebar" : ""),
                        onClick: this.hideSidebar
                    },
                    _react2.default.createElement(
                        "div",
                        { className: "blue-app-sidebar-toggler" },
                        !this.props.hideSidebarMenu ? _react2.default.createElement(
                            "button",
                            {
                                type: "button",
                                className: "fluent-btn blue-app-open-menu blue-app-sidebar-btn btn",
                                onClick: function onClick() {
                                    _this4.setState({ sidebarIn: !_this4.state.sidebarIn });
                                }
                            },
                            _react2.default.createElement("div", { className: "fluent-btn-ball blue-app-sidebar-exception" }),
                            _react2.default.createElement("span", { className: "bi-menu" })
                        ) : ""
                    ),
                    this.props.children,
                    this.props.pages.map(function (page) {
                        return _this4.state.history.indexOf(page.name) > -1 && _react2.default.createElement(
                            "div",
                            {
                                key: page.name,
                                className: "router-page " + (_this4.state.match[0] == page.name ? "active" : "")
                            },
                            page.component
                        );
                    }),
                    _react2.default.createElement(
                        "div",
                        { className: "blue-app-status-circle blue-app-loading blue-app-status-loading" },
                        _react2.default.createElement(
                            "div",
                            { className: "spinner-bounce-circle" },
                            _react2.default.createElement("div", null),
                            _react2.default.createElement("div", null)
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "blue-app-status-circle blue-app-status-success" },
                        _react2.default.createElement("span", { className: "bi-check" })
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "blue-app-status-circle blue-app-status-info" },
                        _react2.default.createElement("span", { className: "bi-information" })
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "blue-app-status-circle blue-app-status-warning" },
                        _react2.default.createElement("span", { className: "bi-sign_warning" })
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "blue-app-status-circle blue-app-status-danger" },
                        _react2.default.createElement("span", { className: "bi-error" })
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "blue-app-status-alert alert" },
                        _react2.default.createElement(
                            "button",
                            {
                                type: "button",
                                className: "close"
                            },
                            "\xD7"
                        ),
                        _react2.default.createElement("div", { className: "alert-body" })
                    )
                )
            );
        }
    }], [{
        key: "defaultProps",
        get: function get() {
            return {
                expandSidebar: false,
                hideSidebarMenu: false,
                unrouteable: false,
                disableTitleSet: false
            };
        }
    }]);

    return Grid;
}(_react2.default.Component);

// Grid.toggleSidebar = null;

Grid.SidebarMenu = _SidebarMenu2.default;

Grid.propTypes = {
    /**
     * Die Sidebar ist bei Vollbild automatisch eingeklappt.
     */
    expandSidebar: _propTypes2.default.bool,

    /**
     * Deaktiviert die Sidebar.
     */
    hideSidebarMenu: _propTypes2.default.bool,

    /**
     * Registriert Seiten. Beispiel: [{name: "home", component: <HomePage />}]
     */
    pages: _propTypes2.default.array,

    /**
     * Wenn <code>true</code> wird immer die "home"-Route geladen.
     */
    unrouteable: _propTypes2.default.bool,

    /**
     * Erweitert die <code>className</code>-Eigenschaft.
     */
    className: _propTypes2.default.string,

    /**
     * Normalerweise wird der Dokumenten-Titel automatisch gesetzt. Setze diese Property auf <code>true</code> um das zu
     * deaktivieren.
     */
    disableTitleSet: _propTypes2.default.bool
};

exports.default = Grid;