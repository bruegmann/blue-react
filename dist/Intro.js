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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Geeignet als Login-Bildschirm.
 */

var Intro = function (_React$Component) {
    _inherits(Intro, _React$Component);

    function Intro() {
        _classCallCheck(this, Intro);

        return _possibleConstructorReturn(this, (Intro.__proto__ || Object.getPrototypeOf(Intro)).apply(this, arguments));
    }

    _createClass(Intro, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            _Utilities2.default.registerFluentBtns();
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "sign-in-screen" },
                _react2.default.createElement(
                    "div",
                    { className: "sign-in-container mx-1" },
                    _react2.default.createElement(
                        "div",
                        { className: "jumbotron" },
                        _react2.default.createElement(
                            "div",
                            { className: "text-center" },
                            _react2.default.createElement("img", { style: { maxWidth: this.props.logoMaxWidth }, src: this.props.logo }),
                            _react2.default.createElement(
                                "h2",
                                { className: "mt-4 mb-3" },
                                this.props.title
                            )
                        ),
                        this.props.children
                    )
                )
            );
        }
    }], [{
        key: "defaultProps",
        get: function get() {
            return {
                logoMaxWidth: "100px"
            };
        }
    }]);

    return Intro;
}(_react2.default.Component);

Intro.propTypes = {
    /**
     * Kann ein Bild sein. Wird im src-Attribute implementiert.
     */
    logo: _propTypes2.default.string,

    /**
     * Maximale Breite des Logos.
     */
    logoMaxWidth: _propTypes2.default.string,

    /**
     * Der Text, der unter dem Logo erscheint
     */
    title: _propTypes2.default.string,

    /**
     * Inhalt
     */
    children: _propTypes2.default.any
};

exports.default = Intro;