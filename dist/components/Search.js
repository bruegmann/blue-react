"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Search;

var _react = _interopRequireWildcard(require("react"));

var _MenuItem = _interopRequireDefault(require("./MenuItem"));

var _Utilities = _interopRequireDefault(require("./Utilities"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * A search bar that can be placed to the sidebar or on a page.
 */
function Search(props) {
  var autoFocus = props.autoFocus,
      body = props.body,
      className = props.className,
      icon = props.icon,
      _onChange = props.onChange,
      _onSubmit = props.onSubmit,
      placeholder = props.placeholder,
      reset = props.reset,
      sidebar = props.sidebar;

  var SearchControlId = "blue-app-search-control-" + _Utilities.default.guid();

  var _useState = (0, _react.useState)(props.value || ""),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      focus = _useState4[0],
      setFocus = _useState4[1];

  var toggleSidebar = function toggleSidebar() {
    if (sidebar) {
      document.dispatchEvent(window.toggleSidebarEvent);
    }
  };

  return /*#__PURE__*/_react.default.createElement("form", {
    className: "blue-app-search " + (body ? "blue-app-search-body " : "") + (focus ? "focus " : "") + className,
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      toggleSidebar();
      if (_onSubmit) _onSubmit(event);
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "blue-app-search-input-group input-group"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "input-group-prepend",
    onClick: function onClick() {
      var _document$getElementB;

      return (_document$getElementB = document.getElementById(SearchControlId)) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.focus();
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "input-group-text"
  }, icon || /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    className: "bi bi-search mt-n1",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
  }))))), /*#__PURE__*/_react.default.createElement("input", {
    type: "search",
    value: value,
    onChange: function onChange(event) {
      setValue(event.target.value);
      if (_onChange) _onChange(event);
    },
    id: SearchControlId,
    className: "blue-app-search-control form-control default input-lg",
    placeholder: placeholder,
    autoFocus: autoFocus,
    style: {
      zIndex: body ? 0 : undefined
    },
    onFocus: function onFocus() {
      return setFocus(true);
    },
    onBlur: function onBlur() {
      return setFocus(false);
    }
  }), reset && value.length > 0 && /*#__PURE__*/_react.default.createElement("div", {
    className: "input-group-btn"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "blue-app-search-reset-btn btn btn-link btn-lg",
    onClick: function onClick() {
      var _document$getElementB2;

      setValue("");
      (_document$getElementB2 = document.getElementById(SearchControlId)) === null || _document$getElementB2 === void 0 ? void 0 : _document$getElementB2.focus();
      if (_onChange) _onChange({
        target: {
          value: ""
        }
      });
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "bi-navigate_cross"
  })))), sidebar && /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
    href: "#",
    className: "blue-app-search-btn",
    icon: icon,
    onClick: function onClick(event) {
      event.preventDefault();
      toggleSidebar();
      setTimeout(function () {
        var _document$querySelect;

        (_document$querySelect = document.querySelector(".blue-app-search-control")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.select();
      }, 200);
    }
  }));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC50c3giXSwibmFtZXMiOlsiU2VhcmNoIiwicHJvcHMiLCJhdXRvRm9jdXMiLCJib2R5IiwiY2xhc3NOYW1lIiwiaWNvbiIsIm9uQ2hhbmdlIiwib25TdWJtaXQiLCJwbGFjZWhvbGRlciIsInJlc2V0Iiwic2lkZWJhciIsIlNlYXJjaENvbnRyb2xJZCIsIlV0aWxpdGllcyIsImd1aWQiLCJ2YWx1ZSIsInNldFZhbHVlIiwiZm9jdXMiLCJzZXRGb2N1cyIsInRvZ2dsZVNpZGViYXIiLCJkb2N1bWVudCIsImRpc3BhdGNoRXZlbnQiLCJ3aW5kb3ciLCJ0b2dnbGVTaWRlYmFyRXZlbnQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0YXJnZXQiLCJ6SW5kZXgiLCJ1bmRlZmluZWQiLCJsZW5ndGgiLCJzZXRUaW1lb3V0IiwicXVlcnlTZWxlY3RvciIsInNlbGVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkJBO0FBQ0E7QUFDQTtBQUNlLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQW9DO0FBQy9DLE1BQVFDLFNBQVIsR0FBOEZELEtBQTlGLENBQVFDLFNBQVI7QUFBQSxNQUFtQkMsSUFBbkIsR0FBOEZGLEtBQTlGLENBQW1CRSxJQUFuQjtBQUFBLE1BQXlCQyxTQUF6QixHQUE4RkgsS0FBOUYsQ0FBeUJHLFNBQXpCO0FBQUEsTUFBb0NDLElBQXBDLEdBQThGSixLQUE5RixDQUFvQ0ksSUFBcEM7QUFBQSxNQUEwQ0MsU0FBMUMsR0FBOEZMLEtBQTlGLENBQTBDSyxRQUExQztBQUFBLE1BQW9EQyxTQUFwRCxHQUE4Rk4sS0FBOUYsQ0FBb0RNLFFBQXBEO0FBQUEsTUFBOERDLFdBQTlELEdBQThGUCxLQUE5RixDQUE4RE8sV0FBOUQ7QUFBQSxNQUEyRUMsS0FBM0UsR0FBOEZSLEtBQTlGLENBQTJFUSxLQUEz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QUFDLCtDQUZkO0FBR0ksSUFBQSxPQUFPLEVBQUUsbUJBQU07QUFBQTs7QUFDWGQsTUFBQUEsUUFBUSxDQUFDLEVBQUQsQ0FBUjtBQUNBLGdDQUFBSSxRQUFRLENBQUNNLGNBQVQsQ0FBd0JkLGVBQXhCLG1GQUEwQ0ssS0FBMUM7QUFDQSxVQUFJVixTQUFKLEVBQ0lBLFNBQVEsQ0FBQztBQUNMb0IsUUFBQUEsTUFBTSxFQUFFO0FBQ0paLFVBQUFBLEtBQUssRUFBRTtBQURIO0FBREgsT0FBRCxDQUFSO0FBS1A7QUFaTCxrQkFjSTtBQUFNLElBQUEsU0FBUyxFQUFDO0FBQWhCLElBZEosQ0FESixDQWhDUixDQWJKLEVBb0VRSixPQUFPLGlCQUNQLDZCQUFDLGlCQUFEO0FBQ0ksSUFBQSxJQUFJLEVBQUMsR0FEVDtBQUVJLElBQUEsU0FBUyxFQUFDLHFCQUZkO0FBR0ksSUFBQSxJQUFJLEVBQUVMLElBSFY7QUFJSSxJQUFBLE9BQU8sRUFBRSxpQkFBQ2tCLEtBQUQsRUFBVztBQUNoQkEsTUFBQUEsS0FBSyxDQUFDQyxjQUFOO0FBQ0FOLE1BQUFBLGFBQWE7QUFDYlksTUFBQUEsVUFBVSxDQUFDLFlBQU07QUFBQTs7QUFDYixpQ0FBQ1gsUUFBUSxDQUFDWSxhQUFULENBQXVCLDBCQUF2QixDQUFELGdGQUFpRkMsTUFBakY7QUFDSCxPQUZTLEVBRVAsR0FGTyxDQUFWO0FBR0g7QUFWTCxJQXJFUixDQURKO0FBc0ZIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCIuL01lbnVJdGVtXCJcclxuaW1wb3J0IFV0aWxpdGllcyBmcm9tIFwiLi9VdGlsaXRpZXNcIlxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZWFyY2hQcm9wcyB7XHJcbiAgICBhdXRvRm9jdXM/OiBib29sZWFuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyBjb21wb25lbnQgaW5zaWRlIG9mIGEgcGFnZT9cclxuICAgICAqL1xyXG4gICAgYm9keT86IGJvb2xlYW5cclxuXHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmdcclxuICAgIGljb24/OiBhbnlcclxuICAgIG9uQ2hhbmdlPzogKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudCkgPT4gdm9pZFxyXG4gICAgb25TdWJtaXQ/OiAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudCkgPT4gdm9pZFxyXG4gICAgcGxhY2Vob2xkZXI/OiBzdHJpbmdcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFsbG93IHJlc2V0P1xyXG4gICAgICovXHJcbiAgICByZXNldD86IGJvb2xlYW5cclxuXHJcbiAgICAvKipcclxuICAgICAqIElzIGNvbXBvbmVudCBpbnNpZGUgb2YgdGhlIHNpZGViYXI/XHJcbiAgICAgKi9cclxuICAgIHNpZGViYXI/OiBib29sZWFuXHJcblxyXG4gICAgdmFsdWU/OiBzdHJpbmdcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgc2VhcmNoIGJhciB0aGF0IGNhbiBiZSBwbGFjZWQgdG8gdGhlIHNpZGViYXIgb3Igb24gYSBwYWdlLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoKHByb3BzOiBTZWFyY2hQcm9wcykge1xyXG4gICAgY29uc3QgeyBhdXRvRm9jdXMsIGJvZHksIGNsYXNzTmFtZSwgaWNvbiwgb25DaGFuZ2UsIG9uU3VibWl0LCBwbGFjZWhvbGRlciwgcmVzZXQsIHNpZGViYXIgfSA9IHByb3BzXHJcbiAgICBjb25zdCBTZWFyY2hDb250cm9sSWQgPSBcImJsdWUtYXBwLXNlYXJjaC1jb250cm9sLVwiICsgVXRpbGl0aWVzLmd1aWQoKVxyXG5cclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGU8c3RyaW5nPihwcm9wcy52YWx1ZSB8fCBcIlwiKVxyXG4gICAgY29uc3QgW2ZvY3VzLCBzZXRGb2N1c10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcclxuXHJcbiAgICBjb25zdCB0b2dnbGVTaWRlYmFyID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChzaWRlYmFyKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQod2luZG93LnRvZ2dsZVNpZGViYXJFdmVudClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgXCJibHVlLWFwcC1zZWFyY2ggXCIgK1xyXG4gICAgICAgICAgICAgICAgKGJvZHkgPyBcImJsdWUtYXBwLXNlYXJjaC1ib2R5IFwiIDogXCJcIikgK1xyXG4gICAgICAgICAgICAgICAgKGZvY3VzID8gXCJmb2N1cyBcIiA6IFwiXCIpICtcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9uU3VibWl0PXtldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgICB0b2dnbGVTaWRlYmFyKClcclxuICAgICAgICAgICAgICAgIGlmIChvblN1Ym1pdCkgb25TdWJtaXQoZXZlbnQpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsdWUtYXBwLXNlYXJjaC1pbnB1dC1ncm91cCBpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFNlYXJjaENvbnRyb2xJZCk/LmZvY3VzKCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aWNvbiB8fCA8c3Bhbj48c3ZnIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGNsYXNzTmFtZT1cImJpIGJpLXNlYXJjaCBtdC1uMVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEwLjQ0MiAxMC40NDJhMSAxIDAgMCAxIDEuNDE1IDBsMy44NSAzLjg1YTEgMSAwIDAgMS0xLjQxNCAxLjQxNWwtMy44NS0zLjg1YTEgMSAwIDAgMSAwLTEuNDE1elwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTYuNSAxMmE1LjUgNS41IDAgMSAwIDAtMTEgNS41IDUuNSAwIDAgMCAwIDExek0xMyA2LjVhNi41IDYuNSAwIDEgMS0xMyAwIDYuNSA2LjUgMCAwIDEgMTMgMHpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz48L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbkNoYW5nZSkgb25DaGFuZ2UoZXZlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBpZD17U2VhcmNoQ29udHJvbElkfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsdWUtYXBwLXNlYXJjaC1jb250cm9sIGZvcm0tY29udHJvbCBkZWZhdWx0IGlucHV0LWxnXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzPXthdXRvRm9jdXN9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgekluZGV4OiAoYm9keSA/IDAgOiB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRGb2N1cyh0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI9eygpID0+IHNldEZvY3VzKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAge3Jlc2V0ICYmIHZhbHVlLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsdWUtYXBwLXNlYXJjaC1yZXNldC1idG4gYnRuIGJ0bi1saW5rIGJ0bi1sZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoXCJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChTZWFyY2hDb250cm9sSWQpPy5mb2N1cygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9uQ2hhbmdlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGFzIGFueSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJpLW5hdmlnYXRlX2Nyb3NzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNpZGViYXIgJiZcclxuICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibHVlLWFwcC1zZWFyY2gtYnRuXCJcclxuICAgICAgICAgICAgICAgICAgICBpY29uPXtpY29ufVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVNpZGViYXIoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJsdWUtYXBwLXNlYXJjaC1jb250cm9sXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsKT8uc2VsZWN0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwKVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIClcclxufSJdfQ==