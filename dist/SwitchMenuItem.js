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

var _MenuItem = require("./MenuItem.js");

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Switch = require("./Switch.js");

var _Switch2 = _interopRequireDefault(_Switch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Switch for <strong>Actions</strong>
 */
var SwitchMenuItem = function (_React$Component) {
    _inherits(SwitchMenuItem, _React$Component);

    function SwitchMenuItem() {
        _classCallCheck(this, SwitchMenuItem);

        return _possibleConstructorReturn(this, (SwitchMenuItem.__proto__ || Object.getPrototypeOf(SwitchMenuItem)).apply(this, arguments));
    }

    _createClass(SwitchMenuItem, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(_MenuItem2.default, {
                onClick: this.props.onChange,
                icon: _react2.default.createElement(_Switch2.default, _extends({}, this.props, {
                    elementType: "span"
                })),
                label: this.props.label
            });
        }
    }]);

    return SwitchMenuItem;
}(_react2.default.Component);

SwitchMenuItem.propTypes = _Switch2.default.propTypes;

exports.default = SwitchMenuItem;