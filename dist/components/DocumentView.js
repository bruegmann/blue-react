"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DocumentView;

var _react = _interopRequireWildcard(require("react"));

var _Utilities = _interopRequireDefault(require("./Utilities"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Tries to display content in an iframe. When the content can't displayed in an iframe, it will show a download button instead.
 */
function DocumentView(_ref) {
  var content = _ref.content,
      mimeType = _ref.mimeType,
      _ref$src = _ref.src,
      src = _ref$src === void 0 ? "about:blank" : _ref$src,
      _ref$showDocumentLabe = _ref.showDocumentLabel,
      showDocumentLabel = _ref$showDocumentLabe === void 0 ? "Show document" : _ref$showDocumentLabe;

  var uniqueId = "document-view-" + _Utilities.default.guid();

  var supportsIframe = function supportsIframe() {
    return mimeType === "application/pdf" || mimeType === "image/png" || mimeType === "image/jpeg" || mimeType === "image/gif" || mimeType === "image/tiff" || mimeType === "text/plain" || mimeType === "text/html";
  };

  (0, _react.useEffect)(function () {
    if (supportsIframe()) {
      _Utilities.default.startLoading();

      if (content) {
        var iframe = document.getElementById(uniqueId);

        if (iframe && iframe.contentWindow) {
          iframe.contentWindow.document.open();
          iframe.contentWindow.document.write(content);
          iframe.contentWindow.document.close();
        }
      }
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", null, supportsIframe() ? /*#__PURE__*/_react.default.createElement("iframe", {
    id: uniqueId,
    className: "document-view-iframe",
    src: src,
    onLoad: function onLoad(_ref2) {
      var target = _ref2.target;

      _Utilities.default.finishLoading();

      var iframeContent = target.contentDocument || target.contentWindow.document;

      if (mimeType.indexOf("image/") > -1) {
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
  }) : /*#__PURE__*/_react.default.createElement("a", {
    href: src,
    className: "btn btn-secondary btn-lg btn-block"
  }, showDocumentLabel));
}