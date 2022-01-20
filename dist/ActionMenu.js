"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Utilities = require("./Utilities.js");

var _Utilities2 = _interopRequireDefault(_Utilities);

var _ActionMenuItem = require("./ActionMenuItem.js");

var _ActionMenuItem2 = _interopRequireDefault(_ActionMenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * <span class="badge badge-secondary">Deprecated</span> Use <strong>Actions</strong> instead.<br>
 * Das Action-Menü an der oberen rechten Ecke einer Seite. Hier können Aktionen platziert werden, die im Kontext der aktuellen Seite stehen.
 */
var ActionMenu = function (_React$Component) {
    _inherits(ActionMenu, _React$Component);

    function ActionMenu() {
        _classCallCheck(this, ActionMenu);

        var _this = _possibleConstructorReturn(this, (ActionMenu.__proto__ || Object.getPrototypeOf(ActionMenu)).call(this));

        _this.state = {
            actionsToggledIn: null
        };
        return _this;
    }

    _createClass(ActionMenu, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            this.initToggleStatus();

            document.querySelector(".blue-app-wrapper").onclick = function (event) {
                _this2.toggleActions();
            };

            document.querySelectorAll(".blue-app-actions-menu .nav-link").forEach(function (link) {
                link.addEventListener("click", function () {
                    if (_this2.state.actionsToggledIn) {
                        _this2.toggleActions();
                    }
                });
            });
        }
    }, {
        key: "toggleActions",
        value: function toggleActions() {
            _Utilities2.default.toggleActions();
            this.initToggleStatus();
        }
    }, {
        key: "initToggleStatus",
        value: function initToggleStatus() {
            this.setState({
                actionsToggledIn: _Utilities2.default.hasClass(document.querySelector(".blue-app-actions"), "open")
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                "ul",
                { className: "blue-app-actions-menu nav navbar-nav navbar-right fluent-btn" },
                _react2.default.createElement("div", { className: "fluent-btn-ball" }),
                !this.state.actionsToggledIn && !this.props.hideToggleAction ? _react2.default.createElement(_ActionMenuItem2.default, {
                    className: "blue-app-actions-menu-toggle p-3",
                    onClick: function onClick() {
                        return _this3.toggleActions();
                    },
                    icon: this.state.actionsToggledIn ? "bi-navigate_cross" : "bi-iconmonstr-menu-7"
                }) : "",
                this.props.children
            );
        }
    }], [{
        key: "defaultProps",
        get: function get() {
            return {
                hideToggleAction: false
            };
        }
    }]);

    return ActionMenu;
}(_react2.default.Component);

ActionMenu.propTypes = {
    /**
     * Versteckt die drei Punkte in mobiler Ansicht.
     * Das kann nützlich sein, wenn mehrere ActionMenus genutzt werden, aber nicht überall der Toggle angezeigt werden soll.
     */
    hideToggleAction: _propTypes2.default.bool
};

exports.default = ActionMenu;