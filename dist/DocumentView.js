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
 * Zeigt Inhalt anhand einer URL in einem iFrame an.
 * Wenn der Inhalt nicht in einem iFrame angezeigt werden kann, wird stattdessen ein Download-Button angeboten.
 */
var DocumentView = function (_React$Component) {
    _inherits(DocumentView, _React$Component);

    function DocumentView() {
        _classCallCheck(this, DocumentView);

        var _this = _possibleConstructorReturn(this, (DocumentView.__proto__ || Object.getPrototypeOf(DocumentView)).call(this));

        _this.uniqueId = "document-view-" + _Utilities2.default.guid();
        return _this;
    }

    _createClass(DocumentView, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            if (this.supportsIframe()) {
                _Utilities2.default.startLoading();

                if (this.props.content) {
                    var iframe = document.getElementById(this.uniqueId);

                    iframe.contentWindow.document.open();
                    iframe.contentWindow.document.write(this.props.content);
                    iframe.contentWindow.document.close();
                }
            }
        }
    }, {
        key: "supportsIframe",
        value: function supportsIframe() {
            return this.props.mimeType == "application/pdf" || this.props.mimeType == "image/png" || this.props.mimeType == "image/jpeg" || this.props.mimeType == "image/gif" || this.props.mimeType == "image/tiff" || this.props.mimeType == "text/plain" || this.props.mimeType == "text/html";
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                "div",
                null,
                this.supportsIframe() ? _react2.default.createElement("iframe", {
                    id: this.uniqueId,
                    className: "document-view-iframe",
                    src: this.props.src,
                    onLoad: function onLoad(_ref) {
                        var target = _ref.target;

                        _Utilities2.default.finishLoading();

                        var iframeContent = target.contentDocument || target.contentWindow.document;

                        if (_this2.props.mimeType.indexOf("image/") > -1) {
                            var image = iframeContent.querySelector("img");

                            if (image) {
                                if (image.offsetWidth > image.offsetHeight) {
                                    image.style.width = "100%";
                                } else {
                                    image.style.height = "100%";
                                }
                            }
                        }
                    }
                }) : _react2.default.createElement(
                    "a",
                    { href: this.props.src, className: "btn btn-secondary btn-lg btn-block" },
                    this.props.showDocumentLabel
                )
            );
        }
    }], [{
        key: "defaultProps",
        get: function get() {
            return {
                src: "about:blank",
                showDocumentLabel: "Show document"
            };
        }
    }]);

    return DocumentView;
}(_react2.default.Component);

DocumentView.propTypes = {
    /**
     * Quelle des Inhalts (URL)
     */
    src: _propTypes2.default.string,

    /**
     * Statt Quelle, kann der Inhalt (HTML) auch direkt übergeben werden.
     */
    content: _propTypes2.default.any,

    /**
     * MIME-Typ des Inhalts (z.B. "application/pdf")
     */
    mimeType: _propTypes2.default.string.isRequired,

    /**
     * Beschriftung für den Button für das Anzeigen
     */
    showDocumentLabel: _propTypes2.default.string
};

exports.default = DocumentView;