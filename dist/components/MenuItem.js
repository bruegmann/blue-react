"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MenuItem;

var _react = _interopRequireWildcard(require("react"));

var _Caret = _interopRequireDefault(require("./Caret"));

var _Outside = _interopRequireDefault(require("./Outside"));

var _Utilities = _interopRequireDefault(require("./Utilities"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Link, button or custom component for Sidebar, Actions or ActionMenu
 */
function MenuItem(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showDropdown = _useState2[0],
      setShowDropdown = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      active = _useState4[0],
      setActive = _useState4[1];

  var checkActive = function checkActive() {
    setActive(props.href && window.location.hash.indexOf(props.href) > -1 || props.isHome && (window.location.hash === "" || window.location.hash === "#/") ? true : false);
  };

  var onClick = function onClick(event) {
    if (props.href === "#") {
      event.preventDefault();
    }

    if (props.onClick) {
      props.onClick(event);
    }

    if (props.children) {
      setShowDropdown(!showDropdown);
    } // When user clicks again on active menu item, scroll to top of page


    if (props.href && props.href === window.location.hash) {
      _Utilities.default.scrollToTop();
    }
  };

  var onClickOutside = function onClickOutside(_ref) {
    var target = _ref.target;

    // Don't trigger when clicking on MenuItem
    if (!_Utilities.default.hasClass(target, "blue-app-sidebar-dropdown-toggle") && !_Utilities.default.hasClass(target, "blue-app-sidebar-label")) {
      setShowDropdown(false);
    }
  };

  (0, _react.useEffect)(function () {
    checkActive();
    window.addEventListener("hashchange", function () {
      checkActive();
    });
  }, []);
  var className = "blue-app-toggle-page blue-app-sidebar-btn btn" + (props.isActive ? " active" : "") + (props.className ? " " + props.className : "") + (props.children ? " blue-app-sidebar-dropdown-toggle" : "");
  var icon;

  if (typeof props.icon === "string") {
    // is className
    icon = /*#__PURE__*/_react.default.createElement("span", {
      className: props.icon + (props.children ? " blue-app-sidebar-dropdown-icon" : "")
    });
  } else {
    // is element / component
    icon = props.icon;
  }

  var passingProps = {
    id: "blue-action-menu-item-" + _Utilities.default.guid()
  };
  var removeFromAttrs = ["isActive", "isHome", "children", "dropdownClassName", "showDropdown", "supportOutside", "elementType"];
  Object.keys(props).forEach(function (key) {
    if (!removeFromAttrs.includes(key)) {
      passingProps[key] = props[key];
    }
  });
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/(0, _react.createElement)(props.elementType || (props.href ? "a" : "button"), _objectSpread(_objectSpread({}, passingProps), {}, {
    className: className + (props.isActive || active ? " active" : "") + (props.label ? " has-label" : ""),
    onClick: onClick
  }), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, icon, " ", props.label && /*#__PURE__*/_react.default.createElement("span", {
    className: "blue-app-sidebar-label text-truncate"
  }, props.label), props.children && /*#__PURE__*/_react.default.createElement(_Caret.default, {
    open: showDropdown,
    mirrored: true,
    className: "blue-app-sidebar-dropdown-caret mt-2"
  }))), showDropdown && (props.supportOutside ? /*#__PURE__*/_react.default.createElement(_Outside.default, {
    className: "blue-app-sidebar-dropdown ".concat(props.dropdownClassName),
    onClickOutside: onClickOutside
  }, props.children) : /*#__PURE__*/_react.default.createElement("div", {
    className: "blue-app-sidebar-dropdown ".concat(props.dropdownClassName)
  }, props.children)));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL01lbnVJdGVtLnRzeCJdLCJuYW1lcyI6WyJNZW51SXRlbSIsInByb3BzIiwic2hvd0Ryb3Bkb3duIiwic2V0U2hvd0Ryb3Bkb3duIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiY2hlY2tBY3RpdmUiLCJocmVmIiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwiaW5kZXhPZiIsImlzSG9tZSIsIm9uQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2hpbGRyZW4iLCJVdGlsaXRpZXMiLCJzY3JvbGxUb1RvcCIsIm9uQ2xpY2tPdXRzaWRlIiwidGFyZ2V0IiwiaGFzQ2xhc3MiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NOYW1lIiwiaXNBY3RpdmUiLCJpY29uIiwicGFzc2luZ1Byb3BzIiwiaWQiLCJndWlkIiwicmVtb3ZlRnJvbUF0dHJzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJpbmNsdWRlcyIsImVsZW1lbnRUeXBlIiwibGFiZWwiLCJzdXBwb3J0T3V0c2lkZSIsImRyb3Bkb3duQ2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3RUE7QUFDQTtBQUNBO0FBQ2UsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBd0M7QUFDbkQsa0JBQXdDLHFCQUFrQixLQUFsQixDQUF4QztBQUFBO0FBQUEsTUFBT0MsWUFBUDtBQUFBLE1BQXFCQyxlQUFyQjs7QUFDQSxtQkFBNEIscUJBQWtCLEtBQWxCLENBQTVCO0FBQUE7QUFBQSxNQUFPQyxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFFQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCRCxJQUFBQSxTQUFTLENBQUdKLEtBQUssQ0FBQ00sSUFBTixJQUFjQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLENBQXFCQyxPQUFy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dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgQ2FyZXQgZnJvbSBcIi4vQ2FyZXRcIlxyXG5pbXBvcnQgT3V0c2lkZSBmcm9tIFwiLi9PdXRzaWRlXCJcclxuaW1wb3J0IFV0aWxpdGllcyBmcm9tIFwiLi9VdGlsaXRpZXNcIlxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNZW51SXRlbVByb3BzIHtcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyBgdG9gIHByb3AsIGUuZy4gd2hlbiB5b3UgdXNlIHRoZSBgTmF2TGlua2AgY29tcG9uZW50IGZyb20gUmVhY3QgUm91dGVyLlxyXG4gICAgICovXHJcbiAgICB0bz86IHN0cmluZ1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHJvcCBmb3IgY29tcG9uZW50cyBieSBSZWFjdCBSb3V0ZXIuXHJcbiAgICAgKi9cclxuICAgIGV4YWN0PzogYm9vbGVhblxyXG5cclxuICAgIGhyZWY/OiBzdHJpbmdcclxuICAgIG9uQ2xpY2s/OiAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHZvaWRcclxuXHJcbiAgICAvKipcclxuICAgICAqIEljb24gY29tcG9uZW50IG9yIGEgY2xhc3MgbmFtZS5cclxuICAgICAqL1xyXG4gICAgaWNvbj86IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGFiZWwgb2YgdGhlIGxpbmsuXHJcbiAgICAgKi9cclxuICAgIGxhYmVsPzogYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTaG91bGQgYmUgc2V0IGFzIGFjdGl2ZS5cclxuICAgICAqL1xyXG4gICAgaXNBY3RpdmU/OiBib29sZWFuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGVuIHVzaW5nIEJsdWUgUmVhY3QncyByb3V0aW5nIHN5c3RlbTogZGVmaW5lIHRoaXMgbGluayBhcyBob21lIHBhZ2UgbGluay5cclxuICAgICAqL1xyXG4gICAgaXNIb21lPzogYm9vbGVhblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXh0ZW5kcyBjbGFzcyBuYW1lIG9mIHRoZSBkcm9wZG93biBtZW51LlxyXG4gICAgICovXHJcbiAgICBkcm9wZG93bkNsYXNzTmFtZT86IHN0cmluZ1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IGNoaWxkcmVuIHRvIGNyZWF0ZSBhIG5lc3RlZCBgTWVudUl0ZW1gYXMgYSBkcm9wZG93bi5cclxuICAgICAqL1xyXG4gICAgY2hpbGRyZW4/OiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgY2xhc3MgbmFtZS5cclxuICAgICAqL1xyXG4gICAgY2xhc3NOYW1lPzogYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGRyb3Bkb3duIHN0YXR1cyBmcm9tIG91dHNpZGUuXHJcbiAgICAgKi9cclxuICAgIHNob3dEcm9wZG93bj86IGJvb2xlYW5cclxuXHJcbiAgICAvKipcclxuICAgICAqIENsb3NlIG9uIGNsaWNrIG91dHNpZGUuXHJcbiAgICAgKi9cclxuICAgIHN1cHBvcnRPdXRzaWRlPzogYm9vbGVhblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQnkgZGVmYXVsdCwgTWVudUl0ZW0gaXMgYSBgXCJidXR0b25cIjwvYnV0dG9uPi4gSWYgeW91IHNldCBhIGBocmVmYCwgaXQncyBhIGBcImFcImAuXHJcbiAgICAgKiBJZiB5b3Ugd2FudCB0byBoYXZlIGl0IGFub3RoZXIgdHlwZSwgeW91IGNhbiBwYXNzIGEgY29tcG9uZW50IHJlZmVyZW5jZSB3aXRoIHRoaXMgcHJvcCAoZS5nLiBgTGlua2ApLlxyXG4gICAgICovXHJcbiAgICBlbGVtZW50VHlwZT86IGFueVxyXG5cclxuICAgIHRhcmdldD86IHN0cmluZ1xyXG4gICAgcmVsPzogc3RyaW5nXHJcbiAgICB0aXRsZT86IHN0cmluZ1xyXG59XHJcblxyXG4vKipcclxuICogTGluaywgYnV0dG9uIG9yIGN1c3RvbSBjb21wb25lbnQgZm9yIFNpZGViYXIsIEFjdGlvbnMgb3IgQWN0aW9uTWVudVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudUl0ZW0ocHJvcHM6IE1lbnVJdGVtUHJvcHMpIHtcclxuICAgIGNvbnN0IFtzaG93RHJvcGRvd24sIHNldFNob3dEcm9wZG93bl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcclxuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcclxuXHJcbiAgICBjb25zdCBjaGVja0FjdGl2ZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRBY3RpdmUoKChwcm9wcy5ocmVmICYmIHdpbmRvdy5sb2NhdGlvbi5oYXNoLmluZGV4T2YocHJvcHMuaHJlZikgPiAtMSkpIHx8IChwcm9wcy5pc0hvbWUgJiYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoID09PSBcIlwiIHx8IHdpbmRvdy5sb2NhdGlvbi5oYXNoID09PSBcIiMvXCIpKSA/IHRydWUgOiBmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkNsaWNrID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLmhyZWYgPT09IFwiI1wiKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcm9wcy5vbkNsaWNrKSB7XHJcbiAgICAgICAgICAgIHByb3BzLm9uQ2xpY2soZXZlbnQgYXMgYW55KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByb3BzLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIHNldFNob3dEcm9wZG93bighc2hvd0Ryb3Bkb3duKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gV2hlbiB1c2VyIGNsaWNrcyBhZ2FpbiBvbiBhY3RpdmUgbWVudSBpdGVtLCBzY3JvbGwgdG8gdG9wIG9mIHBhZ2VcclxuICAgICAgICBpZiAocHJvcHMuaHJlZiAmJiBwcm9wcy5ocmVmID09PSB3aW5kb3cubG9jYXRpb24uaGFzaCkge1xyXG4gICAgICAgICAgICBVdGlsaXRpZXMuc2Nyb2xsVG9Ub3AoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkNsaWNrT3V0c2lkZSA9ICh7IHRhcmdldCB9OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgLy8gRG9uJ3QgdHJpZ2dlciB3aGVuIGNsaWNraW5nIG9uIE1lbnVJdGVtXHJcbiAgICAgICAgaWYgKCFVdGlsaXRpZXMuaGFzQ2xhc3ModGFyZ2V0LCBcImJsdWUtYXBwLXNpZGViYXItZHJvcGRvd24tdG9nZ2xlXCIpICYmXHJcbiAgICAgICAgICAgICFVdGlsaXRpZXMuaGFzQ2xhc3ModGFyZ2V0LCBcImJsdWUtYXBwLXNpZGViYXItbGFiZWxcIikpIHtcclxuICAgICAgICAgICAgc2V0U2hvd0Ryb3Bkb3duKGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNoZWNrQWN0aXZlKClcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjaGVja0FjdGl2ZSgpXHJcbiAgICAgICAgfSlcclxuICAgIH0sIFtdKVxyXG5cclxuXHJcbiAgICBjb25zdCBjbGFzc05hbWUgPSBcImJsdWUtYXBwLXRvZ2dsZS1wYWdlIGJsdWUtYXBwLXNpZGViYXItYnRuIGJ0blwiICtcclxuICAgICAgICAocHJvcHMuaXNBY3RpdmUgPyBcIiBhY3RpdmVcIiA6IFwiXCIpICtcclxuICAgICAgICAocHJvcHMuY2xhc3NOYW1lID8gXCIgXCIgKyBwcm9wcy5jbGFzc05hbWUgOiBcIlwiKSArXHJcbiAgICAgICAgKHByb3BzLmNoaWxkcmVuID8gXCIgYmx1ZS1hcHAtc2lkZWJhci1kcm9wZG93bi10b2dnbGVcIiA6IFwiXCIpXHJcblxyXG4gICAgbGV0IGljb25cclxuXHJcbiAgICBpZiAodHlwZW9mIChwcm9wcy5pY29uKSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIC8vIGlzIGNsYXNzTmFtZVxyXG4gICAgICAgIGljb24gPSA8c3BhbiBjbGFzc05hbWU9e3Byb3BzLmljb24gKyAocHJvcHMuY2hpbGRyZW4gPyBcIiBibHVlLWFwcC1zaWRlYmFyLWRyb3Bkb3duLWljb25cIiA6IFwiXCIpfSAvPlxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgLy8gaXMgZWxlbWVudCAvIGNvbXBvbmVudFxyXG4gICAgICAgIGljb24gPSBwcm9wcy5pY29uXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHBhc3NpbmdQcm9wcyA9IHtcclxuICAgICAgICBpZDogXCJibHVlLWFjdGlvbi1tZW51LWl0ZW0tXCIgKyBVdGlsaXRpZXMuZ3VpZCgpXHJcbiAgICB9IGFzIHsgW2tleTogc3RyaW5nXTogYW55IH1cclxuXHJcbiAgICBjb25zdCByZW1vdmVGcm9tQXR0cnMgPSBbXCJpc0FjdGl2ZVwiLCBcImlzSG9tZVwiLCBcImNoaWxkcmVuXCIsIFwiZHJvcGRvd25DbGFzc05hbWVcIiwgXCJzaG93RHJvcGRvd25cIiwgXCJzdXBwb3J0T3V0c2lkZVwiLCBcImVsZW1lbnRUeXBlXCJdXHJcblxyXG4gICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICBpZiAoIXJlbW92ZUZyb21BdHRycy5pbmNsdWRlcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIHBhc3NpbmdQcm9wc1trZXldID0gKHByb3BzIGFzIHsgW2tleTogc3RyaW5nXTogYW55IH0pW2tleV1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2NyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgICAgICAgICBwcm9wcy5lbGVtZW50VHlwZSB8fCAocHJvcHMuaHJlZiA/IFwiYVwiIDogXCJidXR0b25cIiksXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4ucGFzc2luZ1Byb3BzLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lICsgKHByb3BzLmlzQWN0aXZlIHx8IGFjdGl2ZSA/IFwiIGFjdGl2ZVwiIDogXCJcIikgKyAocHJvcHMubGFiZWwgPyBcIiBoYXMtbGFiZWxcIiA6IFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpY29ufSB7cHJvcHMubGFiZWwgJiYgPHNwYW4gY2xhc3NOYW1lPVwiYmx1ZS1hcHAtc2lkZWJhci1sYWJlbCB0ZXh0LXRydW5jYXRlXCI+e3Byb3BzLmxhYmVsfTwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVuICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17c2hvd0Ryb3Bkb3dufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWlycm9yZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsdWUtYXBwLXNpZGViYXItZHJvcGRvd24tY2FyZXQgbXQtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7c2hvd0Ryb3Bkb3duICYmIChcclxuICAgICAgICAgICAgICAgIHByb3BzLnN1cHBvcnRPdXRzaWRlID9cclxuICAgICAgICAgICAgICAgICAgICA8T3V0c2lkZSBjbGFzc05hbWU9e2BibHVlLWFwcC1zaWRlYmFyLWRyb3Bkb3duICR7cHJvcHMuZHJvcGRvd25DbGFzc05hbWV9YH0gb25DbGlja091dHNpZGU9e29uQ2xpY2tPdXRzaWRlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvT3V0c2lkZT5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BibHVlLWFwcC1zaWRlYmFyLWRyb3Bkb3duICR7cHJvcHMuZHJvcGRvd25DbGFzc05hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdfQ==