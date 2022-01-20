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
 * Enthält den Inhalt einer Seite.
 */
var Body = function (_React$Component) {
    _inherits(Body, _React$Component);

    function Body() {
        _classCallCheck(this, Body);

        return _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).apply(this, arguments));
    }

    _createClass(Body, [{
        key: "render",
        value: function render() {
            var pageBodyClassName = "blue-app-page";

            return _react2.default.createElement(
                "div",
                { id: this.props.id,
                    className: this.props.className ? pageBodyClassName + " " + this.props.className : pageBodyClassName + (this.props.hasActions ? " has-actions" : "") + (" break-" + this.props.break),
                    onClick: this.props.onClick
                },
                _react2.default.createElement(
                    "div",
                    { className: this.props.containerClass },
                    this.props.children
                )
            );
        }
    }], [{
        key: "defaultProps",
        get: function get() {
            return {
                containerClass: "container-fluid",
                hasActions: false,
                break: "md"
            };
        }
    }]);

    return Body;
}(_react2.default.Component);

Body.propTypes = {
    id: _propTypes2.default.string,
    className: _propTypes2.default.string,

    /**
     * Setzt die Klasse für den Container. Mehr Infos unter https://getbootstrap.com/docs/4.0/layout/overview/#containers
     */
    containerClass: _propTypes2.default.string,

    /**
     * Set <code>true</code> if this page uses <code>/lt;Actions /&gt;</code>, so this component will get enough padding to avoid overlapping of the content.
     */
    hasActions: _propTypes2.default.bool,

    /**
     * <code>sm</code>, <code>md</code>, <code>lg</code> or <code>xl</code>
     */
    break: _propTypes2.default.string
};

exports.default = Body;