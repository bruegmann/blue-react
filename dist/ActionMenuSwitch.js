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

var _Switch = require("./Switch");

var _Switch2 = _interopRequireDefault(_Switch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * <span class="badge badge-secondary">Deprecated</span> When using <strong>Actions</strong>, please use <strong>SwitchMenuItem</strong> instead.<br>
 * Switch für das Action-Menü.
 */
var ActionMenuSwitch = function (_React$Component) {
    _inherits(ActionMenuSwitch, _React$Component);

    function ActionMenuSwitch() {
        _classCallCheck(this, ActionMenuSwitch);

        return _possibleConstructorReturn(this, (ActionMenuSwitch.__proto__ || Object.getPrototypeOf(ActionMenuSwitch)).apply(this, arguments));
    }

    _createClass(ActionMenuSwitch, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                "li",
                { className: "nav-item" },
                _react2.default.createElement(
                    "a",
                    {
                        href: "javascript:void(0)",
                        className: "nav-link blue-app-actions-menu-item",
                        onClick: function onClick() {
                            console.log("click");
                            _this2.props.onChange();
                        }
                    },
                    _react2.default.createElement(_Switch2.default, _extends({}, this.props, {
                        elementType: "span"
                    })),
                    this.props.label && _react2.default.createElement(
                        "span",
                        { className: "blue-app-actions-label" },
                        "\xA0",
                        this.props.label
                    )
                )
            );
        }
    }], [{
        key: "defaultProps",
        get: function get() {
            return {
                className: "",
                href: "javascript:void(0)"
            };
        }
    }]);

    return ActionMenuSwitch;
}(_react2.default.Component);

ActionMenuSwitch.propTypes = {
    className: _propTypes2.default.string,
    checked: _propTypes2.default.bool,
    onChange: _propTypes2.default.func,

    /**
     * Beschriftung des Controls
     */
    label: _propTypes2.default.any
};

exports.default = ActionMenuSwitch;