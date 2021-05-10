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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0RvY3VtZW50Vmlldy50c3giXSwibmFtZXMiOlsiRG9jdW1lbnRWaWV3IiwiY29udGVudCIsIm1pbWVUeXBlIiwic3JjIiwic2hvd0RvY3VtZW50TGFiZWwiLCJ1bmlxdWVJZCIsIlV0aWxpdGllcyIsImd1aWQiLCJzdXBwb3J0c0lmcmFtZSIsInN0YXJ0TG9hZGluZyIsImlmcmFtZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250ZW50V2luZG93Iiwib3BlbiIsIndyaXRlIiwiY2xvc2UiLCJ0YXJnZXQiLCJmaW5pc2hMb2FkaW5nIiwiaWZyYW1lQ29udGVudCIsImNvbnRlbnREb2N1bWVudCIsImluZGV4T2YiLCJpbWFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7OztBQXdCQTtBQUNBO0FBQ0E7QUFDZSxTQUFTQSxZQUFULE9BQTBIO0FBQUEsTUFBbEdDLE9BQWtHLFFBQWxHQSxPQUFrRztBQUFBLE1BQXpGQyxRQUF5RixRQUF6RkEsUUFBeUY7QUFBQSxzQkFBL0VDLEdBQStFO0FBQUEsTUFBL0VBLEdBQStFLHlCQUF6RSxhQUF5RTtBQUFBLG1DQUExREMsaUJBQTBEO0FBQUEsTUFBMURBLGlCQUEwRCxzQ0FBdEMsZUFBc0M7O0FBQ3JJLE1BQU1DLFFBQVEsR0FBRyxtQkFBbUJDLG1CQUFVQyxJQUFWLEVBQXBDOztBQUVBLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUI7QUFBQSxXQUNuQk4sUUFBUSxLQUFLLGlCQUFiLElBQ0FBLFFBQVEsS0FBSyxXQURiLElBRUFBLFFBQVEsS0FBSyxZQUZiLElBR0FBLFFBQVEsS0FBSyxXQUhiLElBSUFBLFFBQVEsS0FBSyxZQUpiLElBS0FBLFFBQVEsS0FBSyxZQUxiLElBTUFBLFFBQVEsS0FBSyxXQVBNO0FBQUEsR0FBdkI7O0FBU0Esd0JBQVUsWUFBTTtBQUNaLFFBQUlNLGNBQWMsRUFBbEIsRUFBc0I7QUFDbEJGLHlCQUFVRyxZQUFWOztBQUVBLFVBQUlSLE9BQUosRUFBYTtBQUNULFlBQUlTLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCUCxRQUF4QixDQUFiOztBQUVBLFlBQUlLLE1BQU0sSUFBSUEsTUFBTSxDQUFDRyxhQUFyQixFQUFvQztBQUNoQ0gsVUFBQUEsTUFBTSxDQUFDRyxhQUFQLENBQXFCRixRQUFyQixDQUE4QkcsSUFBOUI7QUFDQUosVUFBQUEsTUFBTSxDQUFDRyxhQUFQLENBQXFCRixRQUFyQixDQUE4QkksS0FBOUIsQ0FBb0NkLE9BQXBDO0FBQ0FTLFVBQUFBLE1BQU0sQ0FBQ0csYUFBUCxDQUFxQkYsUUFBckIsQ0FBOEJLLEtBQTlCO0FBQ0g7QUFDSjtBQUNKO0FBQ0osR0FkRCxFQWNHLEVBZEg7QUFnQkEsc0JBQ0ksMENBQ0tSLGNBQWMsa0JBQ1g7QUFDSSxJQUFBLEVBQUUsRUFBRUgsUUFEUjtBQUVJLElBQUEsU0FBUyxFQUFDLHNCQUZkO0FBR0ksSUFBQSxHQUFHLEVBQUVGLEdBSFQ7QUFJSSxJQUFBLE1BQU0sRUFBRSx1QkFBcUI7QUFBQSxVQUFsQmMsTUFBa0IsU0FBbEJBLE1BQWtCOztBQUN6QlgseUJBQVVZLGFBQVY7O0FBRUEsVUFBTUMsYUFBYSxHQUFHRixNQUFNLENBQUNHLGVBQVAsSUFBMEJILE1BQU0sQ0FBQ0osYUFBUCxDQUFxQkYsUUFBckU7O0FBRUEsVUFBSVQsUUFBUSxDQUFDbUIsT0FBVCxDQUFpQixRQUFqQixJQUE2QixDQUFDLENBQWxDLEVBQXFDO0FBQ2pDLFlBQUlDLEtBQUssR0FBR0gsYUFBYSxDQUFDSSxhQUFkLENBQTRCLEtBQTVCLENBQVo7O0FBRUEsWUFBSUQsS0FBSixFQUFXO0FBQ1AsY0FBSUEsS0FBSyxDQUFDRSxXQUFOLEdBQW9CRixLQUFLLENBQUNHLFlBQTlCLEVBQTRDO0FBQ3hDSCxZQUFBQSxLQUFLLENBQUNJLEtBQU4sQ0FBWUMsS0FBWixHQUFvQixNQUFwQjtBQUNILFdBRkQsTUFHSztBQUNETCxZQUFBQSxLQUFLLENBQUNJLEtBQU4sQ0FBWUUsTUFBWixHQUFxQixNQUFyQjtBQUNIO0FBQ0o7QUFDSjtBQUVKO0FBdEJMLElBRFcsZ0JBMEJYO0FBQUcsSUFBQSxJQUFJLEVBQUV6QixHQUFUO0FBQWMsSUFBQSxTQUFTLEVBQUM7QUFBeEIsS0FDS0MsaUJBREwsQ0EzQlIsQ0FESjtBQW1DSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgVXRpbGl0aWVzIGZyb20gXCIuL1V0aWxpdGllc1wiXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERvY3VtZW50Vmlld1Byb3BzIHtcclxuICAgIC8qKlxyXG4gICAgICogU291cmNlIG9mIHRoZSBjb250ZW50IChVUkwpXHJcbiAgICAgKi9cclxuICAgIHNyYz86IHN0cmluZ1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5zdGVhZCBvZiBhIHNvdXJjZSwgeW91IGNhbiBhbHNvIHNldCB0aGUgY29udGVudCBkaXJlY3RseSAoSFRNTClcclxuICAgICAqL1xyXG4gICAgY29udGVudD86IHN0cmluZ1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTUlNRSB0eXBlIG9mIHRoZSBjb250ZW50IChlLmcuIFwiYXBwbGljYXRpb24vcGRmXCIpXHJcbiAgICAgKi9cclxuICAgIG1pbWVUeXBlOiBzdHJpbmdcclxuXHJcbiAgICAvKipcclxuICAgICAqIExhYmVsIGZvciB0aGUgYnV0dG9uIHRvIGRpc3BsYXlcclxuICAgICAqL1xyXG4gICAgc2hvd0RvY3VtZW50TGFiZWw6IHN0cmluZ1xyXG59XHJcblxyXG4vKipcclxuICogVHJpZXMgdG8gZGlzcGxheSBjb250ZW50IGluIGFuIGlmcmFtZS4gV2hlbiB0aGUgY29udGVudCBjYW4ndCBkaXNwbGF5ZWQgaW4gYW4gaWZyYW1lLCBpdCB3aWxsIHNob3cgYSBkb3dubG9hZCBidXR0b24gaW5zdGVhZC5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvY3VtZW50Vmlldyh7IGNvbnRlbnQsIG1pbWVUeXBlLCBzcmMgPSBcImFib3V0OmJsYW5rXCIsIHNob3dEb2N1bWVudExhYmVsID0gXCJTaG93IGRvY3VtZW50XCIgfTogRG9jdW1lbnRWaWV3UHJvcHMpIHtcclxuICAgIGNvbnN0IHVuaXF1ZUlkID0gXCJkb2N1bWVudC12aWV3LVwiICsgVXRpbGl0aWVzLmd1aWQoKVxyXG5cclxuICAgIGNvbnN0IHN1cHBvcnRzSWZyYW1lID0gKCkgPT4gKFxyXG4gICAgICAgIG1pbWVUeXBlID09PSBcImFwcGxpY2F0aW9uL3BkZlwiIHx8XHJcbiAgICAgICAgbWltZVR5cGUgPT09IFwiaW1hZ2UvcG5nXCIgfHxcclxuICAgICAgICBtaW1lVHlwZSA9PT0gXCJpbWFnZS9qcGVnXCIgfHxcclxuICAgICAgICBtaW1lVHlwZSA9PT0gXCJpbWFnZS9naWZcIiB8fFxyXG4gICAgICAgIG1pbWVUeXBlID09PSBcImltYWdlL3RpZmZcIiB8fFxyXG4gICAgICAgIG1pbWVUeXBlID09PSBcInRleHQvcGxhaW5cIiB8fFxyXG4gICAgICAgIG1pbWVUeXBlID09PSBcInRleHQvaHRtbFwiKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHN1cHBvcnRzSWZyYW1lKCkpIHtcclxuICAgICAgICAgICAgVXRpbGl0aWVzLnN0YXJ0TG9hZGluZygpXHJcblxyXG4gICAgICAgICAgICBpZiAoY29udGVudCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGlmcmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHVuaXF1ZUlkKSBhcyBIVE1MSUZyYW1lRWxlbWVudFxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpZnJhbWUgJiYgaWZyYW1lLmNvbnRlbnRXaW5kb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5vcGVuKClcclxuICAgICAgICAgICAgICAgICAgICBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC53cml0ZShjb250ZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50LmNsb3NlKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge3N1cHBvcnRzSWZyYW1lKCkgP1xyXG4gICAgICAgICAgICAgICAgPGlmcmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPXt1bmlxdWVJZH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkb2N1bWVudC12aWV3LWlmcmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtzcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Mb2FkPXsoeyB0YXJnZXQgfTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFV0aWxpdGllcy5maW5pc2hMb2FkaW5nKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpZnJhbWVDb250ZW50ID0gdGFyZ2V0LmNvbnRlbnREb2N1bWVudCB8fCB0YXJnZXQuY29udGVudFdpbmRvdy5kb2N1bWVudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtaW1lVHlwZS5pbmRleE9mKFwiaW1hZ2UvXCIpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbWFnZSA9IGlmcmFtZUNvbnRlbnQucXVlcnlTZWxlY3RvcihcImltZ1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2Uub2Zmc2V0V2lkdGggPiBpbWFnZS5vZmZzZXRIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2Uuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e3NyY30gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLWxnIGJ0bi1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzaG93RG9jdW1lbnRMYWJlbH1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdfQ==