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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * List-Item und Link für das Action-Menü.
 */
var ActionMenuItem = function (_React$Component) {
    _inherits(ActionMenuItem, _React$Component);

    function ActionMenuItem() {
        _classCallCheck(this, ActionMenuItem);

        return _possibleConstructorReturn(this, (ActionMenuItem.__proto__ || Object.getPrototypeOf(ActionMenuItem)).apply(this, arguments));
    }

    _createClass(ActionMenuItem, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var props = {};

            Object.keys(this.props).map(function (key) {
                if (key != "navItemClassName" && key != "icon" && key != "label") {
                    props[key] = _this2.props[key];
                }
            });

            return _react2.default.createElement(
                "li",
                { className: "nav-item " + this.props.navItemClassName },
                _react2.default.createElement(
                    "a",
                    _extends({}, props, { href: this.props.href, className: "nav-link blue-app-actions-menu-item " + this.props.className }),
                    _react2.default.createElement("span", { className: this.props.icon }),
                    this.props.label && _react2.default.createElement(
                        "span",
                        { className: "blue-app-actions-label" },
                        this.props.icon && _react2.default.createElement(
                            "span",
                            null,
                            "\xA0"
                        ),
                        this.props.label
                    )
                )
            );
        }
    }], [{
        key: "defaultProps",
        get: function get() {
            return {
                navItemClassName: "",
                className: "",
                href: "javascript:void(0)"
            };
        }
    }]);

    return ActionMenuItem;
}(_react2.default.Component);

ActionMenuItem.propTypes = {
    /**
     * Extends className of the <code>.nav-item</code> element.
     */
    navItemClassName: _propTypes2.default.string,

    /**
     * Extends className of the <code>.nav-link</code> element.
     */
    className: _propTypes2.default.string,

    href: _propTypes2.default.string,

    /**
     * className for the icon.
     */
    icon: _propTypes2.default.string,

    /**
     * Label for the link.
     */
    label: _propTypes2.default.any
};

exports.default = ActionMenuItem;