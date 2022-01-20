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
 * Switch.
 */
var FormSwitch = function (_React$Component) {
    _inherits(FormSwitch, _React$Component);

    function FormSwitch() {
        _classCallCheck(this, FormSwitch);

        return _possibleConstructorReturn(this, (FormSwitch.__proto__ || Object.getPrototypeOf(FormSwitch)).apply(this, arguments));
    }

    _createClass(FormSwitch, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "label",
                { className: "switch " + this.props.className },
                _react2.default.createElement("input", {
                    type: "checkbox",
                    checked: this.props.checked,
                    onChange: this.props.onChange
                }),
                _react2.default.createElement("span", { className: "slider round" })
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

    return FormSwitch;
}(_react2.default.Component);

FormSwitch.propTypes = {
    className: _propTypes2.default.string,
    checked: _propTypes2.default.bool,
    onChange: _propTypes2.default.func,

    /**
     * Beschriftung des Controls
     */
    label: _propTypes2.default.any
};

exports.default = FormSwitch;