function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "./Utilities"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("./Utilities"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.Utilities);
    global.DocumentView = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react, _Utilities) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = DocumentView;
  _react = _interopRequireWildcard(_react);
  _Utilities = _interopRequireDefault(_Utilities);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  /**
   * @deprecated Only used by one project (Florence). Component will be moved to that project instead.
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
      return mimeType === "application/pdf" || mimeType === "image/png" || mimeType === "image/jpeg" || mimeType === "image/gif" || mimeType === "image/tiff" || mimeType === "image/bmp" || mimeType === "image/x-bmp" || mimeType === "image/x-ms-bmp" || mimeType === "text/plain" || mimeType === "text/html";
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
    return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, supportsIframe() ? /*#__PURE__*/_react.default.createElement("iframe", {
      id: uniqueId,
      className: "document-view-iframe border-0 w-100 d-block",
      style: {
        height: "calc(100vh - 6.875rem)"
      },
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
      className: "btn btn-secondary btn-lg d-block"
    }, showDocumentLabel));
  }
});