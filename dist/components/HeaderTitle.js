"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HeaderTitle;

var _react = _interopRequireWildcard(require("react"));

var _Utilities = _interopRequireDefault(require("./Utilities"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * The title area at the header bar.
 * Depending on its content, the document's title will be set aswell (what will be shown in the browser title bar).
 */
function HeaderTitle(_ref) {
  var logo = _ref.logo,
      appTitle = _ref.appTitle,
      keepAppTitle = _ref.keepAppTitle,
      children = _ref.children,
      className = _ref.className,
      sidebar = _ref.sidebar;

  var uniqueId = "HeaderTitle-" + _Utilities.default.guid();

  var setDocumentTitle = function setDocumentTitle() {
    if (window.blueGridRef && window.blueGridRef.props && window.blueGridRef.props.disableTitleSet === false) {
      var element = document.querySelector("#".concat(uniqueId, " .blue-app-header-logo-title-labels"));
      var titleElement = document.querySelector("title");

      if (element && element.innerText && titleElement) {
        titleElement.innerText = element.innerText;
      }
    }
  };

  (0, _react.useEffect)(setDocumentTitle, []);
  (0, _react.useEffect)(setDocumentTitle, [children]);
  return /*#__PURE__*/_react.default.createElement("h3", {
    id: uniqueId,
    className: "blue-app-header-logo" + (className ? " ".concat(className) : "") + (sidebar ? " sidebar" : "")
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "blue-app-header-logo-title"
  }, logo ? /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: logo,
    className: "blue-app-header-logo-image"
  })), "\xA0") : "", /*#__PURE__*/_react.default.createElement("span", {
    className: "blue-app-header-logo-title-labels " + (keepAppTitle ? "keep" : "")
  }, appTitle ? /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, appTitle), " ", children ? "/" : "", "\xA0") : "", children)));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0hlYWRlclRpdGxlLnRzeCJdLCJuYW1lcyI6WyJIZWFkZXJUaXRsZSIsImxvZ28iLCJhcHBUaXRsZSIsImtlZXBBcHBUaXRsZSIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwic2lkZWJhciIsInVuaXF1ZUlkIiwiVXRpbGl0aWVzIiwiZ3VpZCIsInNldERvY3VtZW50VGl0bGUiLCJ3aW5kb3ciLCJibHVlR3JpZFJlZiIsInByb3BzIiwiZGlzYWJsZVRpdGxlU2V0IiwiZWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRpdGxlRWxlbWVudCIsImlubmVyVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7O0FBK0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsU0FBU0EsV0FBVCxPQUF1RztBQUFBLE1BQWhGQyxJQUFnRixRQUFoRkEsSUFBZ0Y7QUFBQSxNQUExRUMsUUFBMEUsUUFBMUVBLFFBQTBFO0FBQUEsTUFBaEVDLFlBQWdFLFFBQWhFQSxZQUFnRTtBQUFBLE1BQWxEQyxRQUFrRCxRQUFsREEsUUFBa0Q7QUFBQSxNQUF4Q0MsU0FBd0MsUUFBeENBLFNBQXdDO0FBQUEsTUFBN0JDLE9BQTZCLFFBQTdCQSxPQUE2Qjs7QUFDbEgsTUFBTUMsUUFBUSxHQUFHLGlCQUFpQkMsbUJBQVVDLElBQVYsRUFBbEM7O0FBRUEsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzNCLFFBQUlDLE1BQU0sQ0FBQ0MsV0FBUCxJQUFzQkQsTUFBTSxDQUFDQyxXQUFQLENBQW1CQyxLQUF6QyxJQUFrREYsTUFBTSxDQUFDQyxXQUFQLENBQW1CQyxLQUFuQixDQUF5QkMsZUFBekIsS0FBNkMsS0FBbkcsRUFBMEc7QUFDdEcsVUFBTUMsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsWUFBMkJWLFFBQTNCLHlDQUFoQjtBQUNBLFVBQU1XLFlBQVksR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQXJCOztBQUNBLFVBQUlGLE9BQU8sSUFBSUEsT0FBTyxDQUFDSSxTQUFuQixJQUFnQ0QsWUFBcEMsRUFBa0Q7QUFDOUNBLFFBQUFBLFlBQVksQ0FBQ0MsU0FBYixHQUF5QkosT0FBTyxDQUFDSSxTQUFqQztBQUNIO0FBQ0o7QUFDSixHQVJEOztBQVVBLHdCQUFVVCxnQkFBVixFQUE0QixFQUE1QjtBQUNBLHdCQUFVQSxnQkFBVixFQUE0QixDQUFDTixRQUFELENBQTVCO0FBRUEsc0JBQ0k7QUFBSSxJQUFBLEVBQUUsRUFBRUcsUUFBUjtBQUFrQixJQUFBLFNBQVMsRUFBRSwwQkFBMEJGLFNBQVMsY0FBT0EsU0FBUCxJQUFxQixFQUF4RCxLQUErREMsT0FBTyxHQUFHLFVBQUgsR0FBZ0IsRUFBdEY7QUFBN0Isa0JBQ0k7QUFBTSxJQUFBLFNBQVMsRUFBQztBQUFoQixLQUNLTCxJQUFJLGdCQUFHLHdEQUFNO0FBQUcsSUFBQSxJQUFJLEVBQUM7QUFBUixrQkFBWTtBQUFLLElBQUEsR0FBRyxFQUFFQSxJQUFWO0FBQWdCLElBQUEsU0FBUyxFQUFDO0FBQTFCLElBQVosQ0FBTixTQUFILEdBQWtHLEVBRDNHLGVBRUk7QUFBTSxJQUFBLFNBQVMsRUFBRSx3Q0FBd0NFLFlBQVksR0FBRyxNQUFILEdBQVksRUFBaEU7QUFBakIsS0FDS0QsUUFBUSxnQkFBRyx3REFBTTtBQUFHLElBQUEsSUFBSSxFQUFDO0FBQVIsS0FBYUEsUUFBYixDQUFOLE9BQW1DRSxRQUFRLEdBQUcsR0FBSCxHQUFTLEVBQXBELFNBQUgsR0FBMkUsRUFEeEYsRUFFS0EsUUFGTCxDQUZKLENBREosQ0FESjtBQVdIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBVdGlsaXRpZXMgZnJvbSBcIi4vVXRpbGl0aWVzXCJcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSGVhZGVyVGl0bGVQcm9wcyB7XHJcbiAgICAvKipcclxuICAgICAqIENhbiBiZSBhbiBpbWFnZS4gV2lsbCBiZSBwbGFjZWQgaW5zaWRlIG9mIHRoZSBgc3JjYCBhdHRyaWJ1dGUuXHJcbiAgICAgKi9cclxuICAgIGxvZ28/OiBzdHJpbmdcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRleHQgbmV4dCB0byB0aGUgbG9nby5cclxuICAgICAqL1xyXG4gICAgYXBwVGl0bGU/OiBzdHJpbmdcclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc2FibGVzIHRoYXQgdGhlIGFwcCB0aXRsZSB3aWxsIGRpc2FwcGVhciBhdCBhIHNwZWNpZmljIHZpZXcgd2lkdGguXHJcbiAgICAgKi9cclxuICAgIGtlZXBBcHBUaXRsZT86IGJvb2xlYW5cclxuXHJcbiAgICBjaGlsZHJlbj86IGFueSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4dGVuZHMgYGNsYXNzTmFtZWAgZnJvbSBwYXJlbnQgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgY29tcG9uZW50IHVzZWQgb24gdGhlIHNpZGViYXI/XHJcbiAgICAgKi9cclxuICAgIHNpZGViYXI/OiBib29sZWFuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgdGl0bGUgYXJlYSBhdCB0aGUgaGVhZGVyIGJhci5cclxuICogRGVwZW5kaW5nIG9uIGl0cyBjb250ZW50LCB0aGUgZG9jdW1lbnQncyB0aXRsZSB3aWxsIGJlIHNldCBhc3dlbGwgKHdoYXQgd2lsbCBiZSBzaG93biBpbiB0aGUgYnJvd3NlciB0aXRsZSBiYXIpLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyVGl0bGUoeyBsb2dvLCBhcHBUaXRsZSwga2VlcEFwcFRpdGxlLCBjaGlsZHJlbiwgY2xhc3NOYW1lLCBzaWRlYmFyIH06IEhlYWRlclRpdGxlUHJvcHMpIHtcclxuICAgIGNvbnN0IHVuaXF1ZUlkID0gXCJIZWFkZXJUaXRsZS1cIiArIFV0aWxpdGllcy5ndWlkKClcclxuXHJcbiAgICBjb25zdCBzZXREb2N1bWVudFRpdGxlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3cuYmx1ZUdyaWRSZWYgJiYgd2luZG93LmJsdWVHcmlkUmVmLnByb3BzICYmIHdpbmRvdy5ibHVlR3JpZFJlZi5wcm9wcy5kaXNhYmxlVGl0bGVTZXQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt1bmlxdWVJZH0gLmJsdWUtYXBwLWhlYWRlci1sb2dvLXRpdGxlLWxhYmVsc2ApIGFzIEhUTUxFbGVtZW50XHJcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0aXRsZVwiKVxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50LmlubmVyVGV4dCAmJiB0aXRsZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlRWxlbWVudC5pbm5lclRleHQgPSBlbGVtZW50LmlubmVyVGV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3Qoc2V0RG9jdW1lbnRUaXRsZSwgW10pXHJcbiAgICB1c2VFZmZlY3Qoc2V0RG9jdW1lbnRUaXRsZSwgW2NoaWxkcmVuXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxoMyBpZD17dW5pcXVlSWR9IGNsYXNzTmFtZT17XCJibHVlLWFwcC1oZWFkZXItbG9nb1wiICsgKGNsYXNzTmFtZSA/IGAgJHtjbGFzc05hbWV9YCA6IFwiXCIpICsgKHNpZGViYXIgPyBcIiBzaWRlYmFyXCIgOiBcIlwiKX0+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsdWUtYXBwLWhlYWRlci1sb2dvLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICB7bG9nbyA/IDxzcGFuPjxhIGhyZWY9XCIjXCI+PGltZyBzcmM9e2xvZ299IGNsYXNzTmFtZT1cImJsdWUtYXBwLWhlYWRlci1sb2dvLWltYWdlXCIgLz48L2E+Jm5ic3A7PC9zcGFuPiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1wiYmx1ZS1hcHAtaGVhZGVyLWxvZ28tdGl0bGUtbGFiZWxzIFwiICsgKGtlZXBBcHBUaXRsZSA/IFwia2VlcFwiIDogXCJcIil9PlxyXG4gICAgICAgICAgICAgICAgICAgIHthcHBUaXRsZSA/IDxzcGFuPjxhIGhyZWY9XCIjXCI+e2FwcFRpdGxlfTwvYT4geyhjaGlsZHJlbiA/IFwiL1wiIDogXCJcIil9Jm5ic3A7PC9zcGFuPiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9oMz5cclxuICAgIClcclxufSJdfQ==