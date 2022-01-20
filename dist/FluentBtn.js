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
 * Shortcut für <code>&lt;button class="fluent-btn"&gt;&lt;div className="fluent-btn-ball"&gt;&lt;/div&gt;&lt;/button&gt;</code>.
 * Erzeugt Button, mit einem Acrylic-Effekt.
 */

var FluentBtn = function (_React$Component) {
    _inherits(FluentBtn, _React$Component);

    function FluentBtn() {
        _classCallCheck(this, FluentBtn);

        return _possibleConstructorReturn(this, (FluentBtn.__proto__ || Object.getPrototypeOf(FluentBtn)).apply(this, arguments));
    }

    _createClass(FluentBtn, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var ballClassName = "fluent-btn-ball";

            var props = {};

            Object.keys(this.props).map(function (key) {
                if (key != "light") {
                    props[key] = _this2.props[key];
                }
            });

            props.className = "fluent-btn " + this.props.className + (this.props.light ? " light" : "");

            return this.props.href ? _react2.default.createElement(
                "a",
                props,
                _react2.default.createElement("div", { className: ballClassName }),
                this.props.children
            ) : _react2.default.createElement(
                "button",
                props,
                _react2.default.createElement("div", { className: ballClassName }),
                this.props.children
            );
        }
    }], [{
        key: "defaultProps",
        get: function get() {
            return {
                className: "",
                light: false
            };
        }
    }]);

    return FluentBtn;
}(_react2.default.Component);

FluentBtn.propTypes = {
    /**
     * Inhalt des Buttons. Es werden auch alle anderen Properties unterstützt.
     */
    children: _propTypes2.default.any,

    className: _propTypes2.default.string,

    /**
     * Wenn gesetzt, wird ein <code>&lt;a&gt;</code>-Element zurückgegeben. Ansonsten ist es ein <code>&lt;button&gt;</code>.
     */
    href: _propTypes2.default.string,

    /**
     * Kann bei Schaltflächen mit weißen Flächen gesetzt werden. Der Schein ist dann etwas dunkler.
     */
    light: _propTypes2.default.bool
};

exports.default = FluentBtn;