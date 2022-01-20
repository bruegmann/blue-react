"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Utilities = require("./Utilities");

var _Utilities2 = _interopRequireDefault(_Utilities);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Der Titel-Bereich in der Kopf-Leiste.
 * Anhand dessen wird auch der Dokumenten-Titel gesetzt (was in der Browser Titelzeile gezeigt wird).
 */
var HeaderTitle = function (_React$Component) {
    _inherits(HeaderTitle, _React$Component);

    _createClass(HeaderTitle, null, [{
        key: "defaultProps",
        get: function get() {
            return {
                keepAppTitle: false
            };
        }
    }]);

    function HeaderTitle() {
        _classCallCheck(this, HeaderTitle);

        var _this = _possibleConstructorReturn(this, (HeaderTitle.__proto__ || Object.getPrototypeOf(HeaderTitle)).call(this));

        _this.uniqueId = "HeaderTitle-" + _Utilities2.default.guid();
        return _this;
    }

    _createClass(HeaderTitle, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.setDocumentTitle();
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
            if (prevProps.children !== this.props.children) {
                this.setDocumentTitle();
            }
        }
    }, {
        key: "setDocumentTitle",
        value: function setDocumentTitle() {
            if (blueGridRef && blueGridRef.props && blueGridRef.props.disableTitleSet == false) {
                var element = document.querySelector("#" + this.uniqueId + " .blue-app-header-logo-title-labels");
                if (element && element.innerText) {
                    document.querySelector("title").innerText = element.innerText;
                }
            }
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "h3",
                { id: this.uniqueId, className: "blue-app-header-logo" },
                _react2.default.createElement(
                    "span",
                    { className: "blue-app-header-logo-title" },
                    this.props.logo ? _react2.default.createElement(
                        "span",
                        null,
                        _react2.default.createElement(
                            "a",
                            { href: "#" },
                            _react2.default.createElement("img", { src: this.props.logo, className: "blue-app-header-logo-image" })
                        ),
                        "\xA0"
                    ) : "",
                    _react2.default.createElement(
                        "span",
                        { className: "blue-app-header-logo-title-labels " + (this.props.keepAppTitle ? "keep" : "") },
                        this.props.appTitle ? _react2.default.createElement(
                            "span",
                            null,
                            _react2.default.createElement(
                                "a",
                                { href: "#" },
                                this.props.appTitle
                            ),
                            " ",
                            this.props.children ? "/" : "",
                            "\xA0"
                        ) : "",
                        this.props.children
                    )
                )
            );
        }
    }]);

    return HeaderTitle;
}(_react2.default.Component);

HeaderTitle.propTypes = {
    /**
     * Kann ein Bild sein. Wird im src-Attribute implementiert.
     */
    logo: _propTypes2.default.string,

    /**
     * Der Text, der neben dem Logo steht.
     */
    appTitle: _propTypes2.default.string,

    /**
     * Deaktiviert, dass der App-Titel bei bestimmer Bildschirmgröße ausgeblendet wird.
     */
    keepAppTitle: _propTypes2.default.bool
};

exports.default = HeaderTitle;