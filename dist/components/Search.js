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
  }, icon)), /*#__PURE__*/_react.default.createElement("input", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC50c3giXSwibmFtZXMiOlsiU2VhcmNoIiwicHJvcHMiLCJhdXRvRm9jdXMiLCJib2R5IiwiY2xhc3NOYW1lIiwiaWNvbiIsIm9uQ2hhbmdlIiwib25TdWJtaXQiLCJwbGFjZWhvbGRlciIsInJlc2V0Iiwic2lkZWJhciIsIlNlYXJjaENvbnRyb2xJZCIsIlV0aWxpdGllcyIsImd1aWQiLCJ2YWx1ZSIsInNldFZhbHVlIiwiZm9jdXMiLCJzZXRGb2N1cyIsInRvZ2dsZVNpZGViYXIiLCJkb2N1bWVudCIsImRpc3BhdGNoRXZlbnQiLCJ3aW5kb3ciLCJ0b2dnbGVTaWRlYmFyRXZlbnQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0YXJnZXQiLCJ6SW5kZXgiLCJ1bmRlZmluZWQiLCJsZW5ndGgiLCJzZXRUaW1lb3V0IiwicXVlcnlTZWxlY3RvciIsInNlbGVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkJBO0FBQ0E7QUFDQTtBQUNlLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQW9DO0FBQy9DLE1BQVFDLFNBQVIsR0FBOEZELEtBQTlGLENBQVFDLFNBQVI7QUFBQSxNQUFtQkMsSUFBbkIsR0FBOEZGLEtBQTlGLENBQW1CRSxJQUFuQjtBQUFBLE1BQXlCQyxTQUF6QixHQUE4RkgsS0FBOUYsQ0FBeUJHLFNBQXpCO0FBQUEsTUFBb0NDLElBQXBDLEdBQThGSixLQUE5RixDQUFvQ0ksSUFBcEM7QUFBQSxNQUEwQ0MsU0FBMUMsR0FBOEZMLEtBQTlGLENBQTBDSyxRQUExQztBQUFBLE1BQW9EQyxTQUFwRCxHQUE4Rk4sS0FBOUYsQ0FBb0RNLFFBQXBEO0FBQUEsTUFBOERDLFdBQTlELEdBQThGUCxLQUE5RixDQUE4RE8sV0FBOUQ7QUFBQSxNQUEyRUMsS0FBM0UsR0FBOEZSLEtBQTlGLENBQTJFUSxLQUEz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QkFBQyxpQkFBRDtBQUNJLElBQUEsSUFBSSxFQUFDLEdBRFQ7QUFFSSxJQUFBLFNBQVMsRUFBQyxxQkFGZDtBQUdJLElBQUEsSUFBSSxFQUFFTCxJQUhWO0FBSUksSUFBQSxPQUFPLEVBQUUsaUJBQUNrQixLQUFELEVBQVc7QUFDaEJBLE1BQUFBLEtBQUssQ0FBQ0MsY0FBTjtBQUNBTixNQUFBQSxhQUFhO0FBQ2JZLE1BQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQUE7O0FBQ2IsaUNBQUNYLFFBQVEsQ0FBQ1ksYUFBVCxDQUF1QiwwQkFBdkIsQ0FBRCxnRkFBaUZDLE1BQWpGO0FBQ0gsT0FGUyxFQUVQLEdBRk8sQ0FBVjtBQUdIO0FBVkwsSUFsRVIsQ0FESjtBQW1GSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwiLi9NZW51SXRlbVwiXHJcbmltcG9ydCBVdGlsaXRpZXMgZnJvbSBcIi4vVXRpbGl0aWVzXCJcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VhcmNoUHJvcHMge1xyXG4gICAgYXV0b0ZvY3VzPzogYm9vbGVhblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSXMgY29tcG9uZW50IGluc2lkZSBvZiBhIHBhZ2U/XHJcbiAgICAgKi9cclxuICAgIGJvZHk/OiBib29sZWFuXHJcblxyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nXHJcbiAgICBpY29uPzogYW55XHJcbiAgICBvbkNoYW5nZT86IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQpID0+IHZvaWRcclxuICAgIG9uU3VibWl0PzogKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQpID0+IHZvaWRcclxuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGxvdyByZXNldD9cclxuICAgICAqL1xyXG4gICAgcmVzZXQ/OiBib29sZWFuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyBjb21wb25lbnQgaW5zaWRlIG9mIHRoZSBzaWRlYmFyP1xyXG4gICAgICovXHJcbiAgICBzaWRlYmFyPzogYm9vbGVhblxyXG5cclxuICAgIHZhbHVlPzogc3RyaW5nXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIHNlYXJjaCBiYXIgdGhhdCBjYW4gYmUgcGxhY2VkIHRvIHRoZSBzaWRlYmFyIG9yIG9uIGEgcGFnZS5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaChwcm9wczogU2VhcmNoUHJvcHMpIHtcclxuICAgIGNvbnN0IHsgYXV0b0ZvY3VzLCBib2R5LCBjbGFzc05hbWUsIGljb24sIG9uQ2hhbmdlLCBvblN1Ym1pdCwgcGxhY2Vob2xkZXIsIHJlc2V0LCBzaWRlYmFyIH0gPSBwcm9wc1xyXG4gICAgY29uc3QgU2VhcmNoQ29udHJvbElkID0gXCJibHVlLWFwcC1zZWFyY2gtY29udHJvbC1cIiArIFV0aWxpdGllcy5ndWlkKClcclxuXHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZz4ocHJvcHMudmFsdWUgfHwgXCJcIilcclxuICAgIGNvbnN0IFtmb2N1cywgc2V0Rm9jdXNdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcblxyXG4gICAgY29uc3QgdG9nZ2xlU2lkZWJhciA9ICgpID0+IHtcclxuICAgICAgICBpZiAoc2lkZWJhcikge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KHdpbmRvdy50b2dnbGVTaWRlYmFyRXZlbnQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIFwiYmx1ZS1hcHAtc2VhcmNoIFwiICtcclxuICAgICAgICAgICAgICAgIChib2R5ID8gXCJibHVlLWFwcC1zZWFyY2gtYm9keSBcIiA6IFwiXCIpICtcclxuICAgICAgICAgICAgICAgIChmb2N1cyA/IFwiZm9jdXMgXCIgOiBcIlwiKSArXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvblN1Ym1pdD17ZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlU2lkZWJhcigpXHJcbiAgICAgICAgICAgICAgICBpZiAob25TdWJtaXQpIG9uU3VibWl0KGV2ZW50KVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibHVlLWFwcC1zZWFyY2gtaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChTZWFyY2hDb250cm9sSWQpPy5mb2N1cygpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2ljb259XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9uQ2hhbmdlKSBvbkNoYW5nZShldmVudClcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPXtTZWFyY2hDb250cm9sSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmx1ZS1hcHAtc2VhcmNoLWNvbnRyb2wgZm9ybS1jb250cm9sIGRlZmF1bHQgaW5wdXQtbGdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXM9e2F1dG9Gb2N1c31cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IChib2R5ID8gMCA6IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9eygpID0+IHNldEZvY3VzKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17KCkgPT4gc2V0Rm9jdXMoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7cmVzZXQgJiYgdmFsdWUubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmx1ZS1hcHAtc2VhcmNoLXJlc2V0LWJ0biBidG4gYnRuLWxpbmsgYnRuLWxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZShcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFNlYXJjaENvbnRyb2xJZCk/LmZvY3VzKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob25DaGFuZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gYXMgYW55KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmktbmF2aWdhdGVfY3Jvc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2lkZWJhciAmJlxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsdWUtYXBwLXNlYXJjaC1idG5cIlxyXG4gICAgICAgICAgICAgICAgICAgIGljb249e2ljb259XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlU2lkZWJhcigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmx1ZS1hcHAtc2VhcmNoLWNvbnRyb2xcIikgYXMgSFRNTElucHV0RWxlbWVudCB8IG51bGwpPy5zZWxlY3QoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDApXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG59Il19