"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DropdownMenuItem;

var _react = _interopRequireWildcard(require("react"));

var _Caret = _interopRequireDefault(require("./Caret"));

var _Utilities = _interopRequireDefault(require("./Utilities"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Dropdown with button for sidebar.
 */
function DropdownMenuItem(props) {
  var _useState = (0, _react.useState)(props.isActive || false),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showDropdown = _useState4[0],
      setShowDropdown = _useState4[1];

  var handleClick = function handleClick() {
    if (props.children) {
      setShowDropdown(!showDropdown);
    }
  };

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

  var id = {
    id: "blue-action-menu-item-" + _Utilities.default.guid()
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "btn-group w-100"
  }, /*#__PURE__*/_react.default.createElement("a", _extends({}, id, {
    className: "blue-app-toggle-page blue-app-sidebar-btn btn pr-0 " + (active ? "active" : ""),
    href: props.to
  }), icon, /*#__PURE__*/_react.default.createElement("span", {
    className: "blue-app-sidebar-label"
  }, props.label)), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn blue-app-sidebar-btn w-auto pl-0",
    onClick: handleClick
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "sr-only"
  }, "Toggle Dropdown"), /*#__PURE__*/_react.default.createElement(_Caret.default, {
    open: showDropdown,
    mirrored: true,
    className: "w-auto pl-5 mt-2"
  }))), showDropdown && /*#__PURE__*/_react.default.createElement("div", {
    className: "blue-app-sidebar-dropdown"
  }, props.children));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0Ryb3Bkb3duTWVudUl0ZW0udHN4Il0sIm5hbWVzIjpbIkRyb3Bkb3duTWVudUl0ZW0iLCJwcm9wcyIsImlzQWN0aXZlIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwic2hvd0Ryb3Bkb3duIiwic2V0U2hvd0Ryb3Bkb3duIiwiaGFuZGxlQ2xpY2siLCJjaGlsZHJlbiIsImljb24iLCJpZCIsIlV0aWxpdGllcyIsImd1aWQiLCJ0byIsImxhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNlLFNBQVNBLGdCQUFULENBQTBCQyxLQUExQixFQUF3RDtBQUNuRSxrQkFBNEIscUJBQWtCQSxLQUFLLENBQUNDLFFBQU4sSUFBa0IsS0FBcEMsQ0FBNUI7QUFBQTtBQUFBLE1BQU9DLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLG1CQUF3QyxxQkFBa0IsS0FBbEIsQ0FBeEM7QUFBQTtBQUFBLE1BQU9DLFlBQVA7QUFBQSxNQUFxQkMsZUFBckI7O0FBRUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0QixRQUFJTixLQUFLLENBQUNPLFFBQVYsRUFBb0I7QUFDaEJGLE1BQUFBLGVBQWUsQ0FBQyxDQUFDRCxZQUFGLENBQWY7QUFDSDtBQUNKLEdBSkQ7O0FBTUEsTUFBSUksSUFBSjs7QUFFQSxNQUFJLE9BQVFSLEtBQUssQ0FBQ1EsSUFBZCxLQUF3QixRQUE1QixFQUFzQztBQUNsQztBQUNBQSxJQUFBQSxJQUFJLGdCQUFHO0FBQU0sTUFBQSxTQUFTLEVBQUVSLEtBQUssQ0FBQ1EsSUFBTixJQUFjUixLQUFLLENBQUNPLFFBQU4sR0FBaUIsaUNBQWpCLEdBQXFELEVBQW5FO0FBQWpCLE1BQVA7QUFDSCxHQUhELE1BSUs7QUFDRDtBQUNBQyxJQUFBQSxJQUFJLEdBQUdSLEtBQUssQ0FBQ1EsSUFBYjtBQUNIOztBQUVELE1BQUlDLEVBQUUsR0FBRztBQUNMQSxJQUFBQSxFQUFFLEVBQUUsMkJBQTJCQyxtQkFBVUMsSUFBVjtBQUQxQixHQUFUO0FBR0Esc0JBQ0ksdURBQ0k7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUVJLCtDQUNRRixFQURSO0FBRUksSUFBQSxTQUFTLEVBQUUseURBQXlEUCxNQUFNLEdBQUcsUUFBSCxHQUFjLEVBQTdFLENBRmY7QUFHSSxJQUFBLElBQUksRUFBRUYsS0FBSyxDQUFDWTtBQUhoQixNQUtLSixJQUxMLGVBTUk7QUFBTSxJQUFBLFNBQVMsRUFBQztBQUFoQixLQUEwQ1IsS0FBSyxDQUFDYSxLQUFoRCxDQU5KLENBRkosZUFXSTtBQUNJLElBQUEsSUFBSSxFQUFDLFFBRFQ7QUFFSSxJQUFBLFNBQVMsRUFBQyxzQ0FGZDtBQUdJLElBQUEsT0FBTyxFQUFFUDtBQUhiLGtCQUtJO0FBQU0sSUFBQSxTQUFTLEVBQUM7QUFBaEIsdUJBTEosZUFNSSw2QkFBQyxjQUFEO0FBQ0ksSUFBQSxJQUFJLEVBQUVGLFlBRFY7QUFFSSxJQUFBLFFBQVEsTUFGWjtBQUdJLElBQUEsU0FBUyxFQUFDO0FBSGQsSUFOSixDQVhKLENBREosRUEyQktBLFlBQVksaUJBQ1Q7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0tKLEtBQUssQ0FBQ08sUUFEWCxDQTVCUixDQURKO0FBb0NIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IENhcmV0IGZyb20gXCIuL0NhcmV0XCJcclxuaW1wb3J0IFV0aWxpdGllcyBmcm9tIFwiLi9VdGlsaXRpZXNcIlxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEcm9wZG93bk1lbnVJdGVtUHJvcHMge1xyXG4gICAgdG8/OiBzdHJpbmdcclxuICAgIGljb24/OiBhbnlcclxuICAgIGxhYmVsPzogYW55XHJcbiAgICBpc0FjdGl2ZT86IGJvb2xlYW5cclxuICAgIGNoaWxkcmVuPzogYW55XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEcm9wZG93biB3aXRoIGJ1dHRvbiBmb3Igc2lkZWJhci5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERyb3Bkb3duTWVudUl0ZW0ocHJvcHM6IERyb3Bkb3duTWVudUl0ZW1Qcm9wcykge1xyXG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHByb3BzLmlzQWN0aXZlIHx8IGZhbHNlKVxyXG4gICAgY29uc3QgW3Nob3dEcm9wZG93biwgc2V0U2hvd0Ryb3Bkb3duXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9wcy5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBzZXRTaG93RHJvcGRvd24oIXNob3dEcm9wZG93bilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGljb25cclxuXHJcbiAgICBpZiAodHlwZW9mIChwcm9wcy5pY29uKSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIC8vIGlzIGNsYXNzTmFtZVxyXG4gICAgICAgIGljb24gPSA8c3BhbiBjbGFzc05hbWU9e3Byb3BzLmljb24gKyAocHJvcHMuY2hpbGRyZW4gPyBcIiBibHVlLWFwcC1zaWRlYmFyLWRyb3Bkb3duLWljb25cIiA6IFwiXCIpfSAvPlxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgLy8gaXMgZWxlbWVudCAvIGNvbXBvbmVudFxyXG4gICAgICAgIGljb24gPSBwcm9wcy5pY29uXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGlkID0ge1xyXG4gICAgICAgIGlkOiBcImJsdWUtYWN0aW9uLW1lbnUtaXRlbS1cIiArIFV0aWxpdGllcy5ndWlkKClcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXAgdy0xMDBcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5pZH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiYmx1ZS1hcHAtdG9nZ2xlLXBhZ2UgYmx1ZS1hcHAtc2lkZWJhci1idG4gYnRuIHByLTAgXCIgKyAoYWN0aXZlID8gXCJhY3RpdmVcIiA6IFwiXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e3Byb3BzLnRvfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpY29ufVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsdWUtYXBwLXNpZGViYXItbGFiZWxcIj57cHJvcHMubGFiZWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYmx1ZS1hcHAtc2lkZWJhci1idG4gdy1hdXRvIHBsLTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Ub2dnbGUgRHJvcGRvd248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e3Nob3dEcm9wZG93bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWlycm9yZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1hdXRvIHBsLTUgbXQtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7c2hvd0Ryb3Bkb3duICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsdWUtYXBwLXNpZGViYXItZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdfQ==