"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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

var _default = MenuItem;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL01lbnVJdGVtLnRzeCJdLCJuYW1lcyI6WyJNZW51SXRlbSIsInByb3BzIiwic2hvd0Ryb3Bkb3duIiwic2V0U2hvd0Ryb3Bkb3duIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiY2hlY2tBY3RpdmUiLCJocmVmIiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwiaW5kZXhPZiIsImlzSG9tZSIsIm9uQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2hpbGRyZW4iLCJVdGlsaXRpZXMiLCJzY3JvbGxUb1RvcCIsIm9uQ2xpY2tPdXRzaWRlIiwidGFyZ2V0IiwiaGFzQ2xhc3MiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NOYW1lIiwiaXNBY3RpdmUiLCJpY29uIiwicGFzc2luZ1Byb3BzIiwiaWQiLCJndWlkIiwicmVtb3ZlRnJvbUF0dHJzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJpbmNsdWRlcyIsImVsZW1lbnRUeXBlIiwibGFiZWwiLCJzdXBwb3J0T3V0c2lkZSIsImRyb3Bkb3duQ2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1RUEsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBd0M7QUFDcEMsa0JBQXdDLHFCQUFrQixLQUFsQixDQUF4QztBQUFBO0FBQUEsTUFBT0MsWUFBUDtBQUFBLE1BQXFCQyxlQUFyQjs7QUFDQSxtQkFBNEIscUJBQWtCLEtBQWxCLENBQTVCO0FBQUE7QUFBQSxNQUFPQyxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFFQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCRCxJQUFBQSxTQUFTLENBQUdKLEtBQUssQ0FBQ00sSUFBTixJQUFjQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLENBQXFCQyxPQUFyQixDQUE2QlYsS0FBSyxD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ZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IENhcmV0IGZyb20gXCIuL0NhcmV0XCJcclxuaW1wb3J0IE91dHNpZGUgZnJvbSBcIi4vT3V0c2lkZVwiXHJcbmltcG9ydCBVdGlsaXRpZXMgZnJvbSBcIi4vVXRpbGl0aWVzXCJcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWVudUl0ZW1Qcm9wcyB7XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgYHRvYCBwcm9wLCBlLmcuIHdoZW4geW91IHVzZSB0aGUgYE5hdkxpbmtgIGNvbXBvbmVudCBmcm9tIFJlYWN0IFJvdXRlci5cclxuICAgICAqL1xyXG4gICAgdG8/OiBzdHJpbmdcclxuXHJcbiAgICAvKipcclxuICAgICAqIFByb3AgZm9yIGNvbXBvbmVudHMgYnkgUmVhY3QgUm91dGVyLlxyXG4gICAgICovXHJcbiAgICBleGFjdD86IGJvb2xlYW5cclxuXHJcbiAgICBocmVmPzogc3RyaW5nXHJcbiAgICBvbkNsaWNrPzogKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB2b2lkXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJY29uIGNvbXBvbmVudCBvciBhIGNsYXNzIG5hbWUuXHJcbiAgICAgKi9cclxuICAgIGljb24/OiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIExhYmVsIG9mIHRoZSBsaW5rLlxyXG4gICAgICovXHJcbiAgICBsYWJlbD86IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2hvdWxkIGJlIHNldCBhcyBhY3RpdmUuXHJcbiAgICAgKi9cclxuICAgIGlzQWN0aXZlPzogYm9vbGVhblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hlbiB1c2luZyBCbHVlIFJlYWN0J3Mgcm91dGluZyBzeXN0ZW06IGRlZmluZSB0aGlzIGxpbmsgYXMgaG9tZSBwYWdlIGxpbmsuXHJcbiAgICAgKi9cclxuICAgIGlzSG9tZT86IGJvb2xlYW5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4dGVuZHMgY2xhc3MgbmFtZSBvZiB0aGUgZHJvcGRvd24gbWVudS5cclxuICAgICAqL1xyXG4gICAgZHJvcGRvd25DbGFzc05hbWU/OiBzdHJpbmdcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCBjaGlsZHJlbiB0byBjcmVhdGUgYSBuZXN0ZWQgYE1lbnVJdGVtYGFzIGEgZHJvcGRvd24uXHJcbiAgICAgKi9cclxuICAgIGNoaWxkcmVuPzogYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGNsYXNzIG5hbWUuXHJcbiAgICAgKi9cclxuICAgIGNsYXNzTmFtZT86IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBkcm9wZG93biBzdGF0dXMgZnJvbSBvdXRzaWRlLlxyXG4gICAgICovXHJcbiAgICBzaG93RHJvcGRvd24/OiBib29sZWFuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDbG9zZSBvbiBjbGljayBvdXRzaWRlLlxyXG4gICAgICovXHJcbiAgICBzdXBwb3J0T3V0c2lkZT86IGJvb2xlYW5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEJ5IGRlZmF1bHQsIE1lbnVJdGVtIGlzIGEgYFwiYnV0dG9uXCI8L2J1dHRvbj4uIElmIHlvdSBzZXQgYSBgaHJlZmAsIGl0J3MgYSBgXCJhXCJgLlxyXG4gICAgICogSWYgeW91IHdhbnQgdG8gaGF2ZSBpdCBhbm90aGVyIHR5cGUsIHlvdSBjYW4gcGFzcyBhIGNvbXBvbmVudCByZWZlcmVuY2Ugd2l0aCB0aGlzIHByb3AgKGUuZy4gYExpbmtgKS5cclxuICAgICAqL1xyXG4gICAgZWxlbWVudFR5cGU/OiBhbnlcclxuXHJcbiAgICB0YXJnZXQ/OiBzdHJpbmdcclxuICAgIHJlbD86IHN0cmluZ1xyXG59XHJcblxyXG5mdW5jdGlvbiBNZW51SXRlbShwcm9wczogTWVudUl0ZW1Qcm9wcykge1xyXG4gICAgY29uc3QgW3Nob3dEcm9wZG93biwgc2V0U2hvd0Ryb3Bkb3duXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGNoZWNrQWN0aXZlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEFjdGl2ZSgoKHByb3BzLmhyZWYgJiYgd2luZG93LmxvY2F0aW9uLmhhc2guaW5kZXhPZihwcm9wcy5ocmVmKSA+IC0xKSkgfHwgKHByb3BzLmlzSG9tZSAmJiAod2luZG93LmxvY2F0aW9uLmhhc2ggPT09IFwiXCIgfHwgd2luZG93LmxvY2F0aW9uLmhhc2ggPT09IFwiIy9cIikpID8gdHJ1ZSA6IGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uQ2xpY2sgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICBpZiAocHJvcHMuaHJlZiA9PT0gXCIjXCIpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByb3BzLm9uQ2xpY2spIHtcclxuICAgICAgICAgICAgcHJvcHMub25DbGljayhldmVudCBhcyBhbnkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJvcHMuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgc2V0U2hvd0Ryb3Bkb3duKCFzaG93RHJvcGRvd24pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBXaGVuIHVzZXIgY2xpY2tzIGFnYWluIG9uIGFjdGl2ZSBtZW51IGl0ZW0sIHNjcm9sbCB0byB0b3Agb2YgcGFnZVxyXG4gICAgICAgIGlmIChwcm9wcy5ocmVmICYmIHByb3BzLmhyZWYgPT09IHdpbmRvdy5sb2NhdGlvbi5oYXNoKSB7XHJcbiAgICAgICAgICAgIFV0aWxpdGllcy5zY3JvbGxUb1RvcCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uQ2xpY2tPdXRzaWRlID0gKHsgdGFyZ2V0IH06IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAvLyBEb24ndCB0cmlnZ2VyIHdoZW4gY2xpY2tpbmcgb24gTWVudUl0ZW1cclxuICAgICAgICBpZiAoIVV0aWxpdGllcy5oYXNDbGFzcyh0YXJnZXQsIFwiYmx1ZS1hcHAtc2lkZWJhci1kcm9wZG93bi10b2dnbGVcIikgJiZcclxuICAgICAgICAgICAgIVV0aWxpdGllcy5oYXNDbGFzcyh0YXJnZXQsIFwiYmx1ZS1hcHAtc2lkZWJhci1sYWJlbFwiKSkge1xyXG4gICAgICAgICAgICBzZXRTaG93RHJvcGRvd24oZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY2hlY2tBY3RpdmUoKVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNoZWNrQWN0aXZlKClcclxuICAgICAgICB9KVxyXG4gICAgfSwgW10pXHJcblxyXG5cclxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IFwiYmx1ZS1hcHAtdG9nZ2xlLXBhZ2UgYmx1ZS1hcHAtc2lkZWJhci1idG4gYnRuXCIgK1xyXG4gICAgICAgIChwcm9wcy5pc0FjdGl2ZSA/IFwiIGFjdGl2ZVwiIDogXCJcIikgK1xyXG4gICAgICAgIChwcm9wcy5jbGFzc05hbWUgPyBcIiBcIiArIHByb3BzLmNsYXNzTmFtZSA6IFwiXCIpICtcclxuICAgICAgICAocHJvcHMuY2hpbGRyZW4gPyBcIiBibHVlLWFwcC1zaWRlYmFyLWRyb3Bkb3duLXRvZ2dsZVwiIDogXCJcIilcclxuXHJcbiAgICBsZXQgaWNvblxyXG5cclxuICAgIGlmICh0eXBlb2YgKHByb3BzLmljb24pID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgLy8gaXMgY2xhc3NOYW1lXHJcbiAgICAgICAgaWNvbiA9IDxzcGFuIGNsYXNzTmFtZT17cHJvcHMuaWNvbiArIChwcm9wcy5jaGlsZHJlbiA/IFwiIGJsdWUtYXBwLXNpZGViYXItZHJvcGRvd24taWNvblwiIDogXCJcIil9IC8+XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAvLyBpcyBlbGVtZW50IC8gY29tcG9uZW50XHJcbiAgICAgICAgaWNvbiA9IHByb3BzLmljb25cclxuICAgIH1cclxuXHJcbiAgICBsZXQgcGFzc2luZ1Byb3BzID0ge1xyXG4gICAgICAgIGlkOiBcImJsdWUtYWN0aW9uLW1lbnUtaXRlbS1cIiArIFV0aWxpdGllcy5ndWlkKClcclxuICAgIH0gYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfVxyXG5cclxuICAgIGNvbnN0IHJlbW92ZUZyb21BdHRycyA9IFtcImlzQWN0aXZlXCIsIFwiaXNIb21lXCIsIFwiY2hpbGRyZW5cIiwgXCJkcm9wZG93bkNsYXNzTmFtZVwiLCBcInNob3dEcm9wZG93blwiLCBcInN1cHBvcnRPdXRzaWRlXCIsIFwiZWxlbWVudFR5cGVcIl1cclxuXHJcbiAgICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgIGlmICghcmVtb3ZlRnJvbUF0dHJzLmluY2x1ZGVzKGtleSkpIHtcclxuICAgICAgICAgICAgcGFzc2luZ1Byb3BzW2tleV0gPSAocHJvcHMgYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfSlba2V5XVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7Y3JlYXRlRWxlbWVudChcclxuICAgICAgICAgICAgICAgIHByb3BzLmVsZW1lbnRUeXBlIHx8IChwcm9wcy5ocmVmID8gXCJhXCIgOiBcImJ1dHRvblwiKSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5wYXNzaW5nUHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUgKyAocHJvcHMuaXNBY3RpdmUgfHwgYWN0aXZlID8gXCIgYWN0aXZlXCIgOiBcIlwiKSArIChwcm9wcy5sYWJlbCA/IFwiIGhhcy1sYWJlbFwiIDogXCJcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGlja1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAge2ljb259IHtwcm9wcy5sYWJlbCAmJiA8c3BhbiBjbGFzc05hbWU9XCJibHVlLWFwcC1zaWRlYmFyLWxhYmVsIHRleHQtdHJ1bmNhdGVcIj57cHJvcHMubGFiZWx9PC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW4gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXtzaG93RHJvcGRvd259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaXJyb3JlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmx1ZS1hcHAtc2lkZWJhci1kcm9wZG93bi1jYXJldCBtdC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHtzaG93RHJvcGRvd24gJiYgKFxyXG4gICAgICAgICAgICAgICAgcHJvcHMuc3VwcG9ydE91dHNpZGUgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxPdXRzaWRlIGNsYXNzTmFtZT17YGJsdWUtYXBwLXNpZGViYXItZHJvcGRvd24gJHtwcm9wcy5kcm9wZG93bkNsYXNzTmFtZX1gfSBvbkNsaWNrT3V0c2lkZT17b25DbGlja091dHNpZGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9PdXRzaWRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGJsdWUtYXBwLXNpZGViYXItZHJvcGRvd24gJHtwcm9wcy5kcm9wZG93bkNsYXNzTmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51SXRlbSJdfQ==