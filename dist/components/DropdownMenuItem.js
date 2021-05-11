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
  var _useState = (0, _react.useState)(false),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0Ryb3Bkb3duTWVudUl0ZW0udHN4Il0sIm5hbWVzIjpbIkRyb3Bkb3duTWVudUl0ZW0iLCJwcm9wcyIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInNob3dEcm9wZG93biIsInNldFNob3dEcm9wZG93biIsImhhbmRsZUNsaWNrIiwiY2hpbGRyZW4iLCJpY29uIiwiaWQiLCJVdGlsaXRpZXMiLCJndWlkIiwidG8iLCJsYWJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDZSxTQUFTQSxnQkFBVCxDQUEwQkMsS0FBMUIsRUFBd0Q7QUFDbkUsa0JBQTRCLHFCQUFrQixLQUFsQixDQUE1QjtBQUFBO0FBQUEsTUFBT0MsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQXdDLHFCQUFrQixLQUFsQixDQUF4QztBQUFBO0FBQUEsTUFBT0MsWUFBUDtBQUFBLE1BQXFCQyxlQUFyQjs7QUFFQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCLFFBQUlMLEtBQUssQ0FBQ00sUUFBVixFQUFvQjtBQUNoQkYsTUFBQUEsZUFBZSxDQUFDLENBQUNELFlBQUYsQ0FBZjtBQUNIO0FBQ0osR0FKRDs7QUFNQSxNQUFJSSxJQUFKOztBQUVBLE1BQUksT0FBUVAsS0FBSyxDQUFDTyxJQUFkLEtBQXdCLFFBQTVCLEVBQXNDO0FBQ2xDO0FBQ0FBLElBQUFBLElBQUksZ0JBQUc7QUFBTSxNQUFBLFNBQVMsRUFBRVAsS0FBSyxDQUFDTyxJQUFOLElBQWNQLEtBQUssQ0FBQ00sUUFBTixHQUFpQixpQ0FBakIsR0FBcUQsRUFBbkU7QUFBakIsTUFBUDtBQUNILEdBSEQsTUFJSztBQUNEO0FBQ0FDLElBQUFBLElBQUksR0FBR1AsS0FBSyxDQUFDTyxJQUFiO0FBQ0g7O0FBRUQsTUFBSUMsRUFBRSxHQUFHO0FBQ0xBLElBQUFBLEVBQUUsRUFBRSwyQkFBMkJDLG1CQUFVQyxJQUFWO0FBRDFCLEdBQVQ7QUFHQSxzQkFDSSx1REFDSTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsa0JBRUksK0NBQ1FGLEVBRFI7QUFFSSxJQUFBLFNBQVMsRUFBRSx5REFBeURQLE1BQU0sR0FBRyxRQUFILEdBQWMsRUFBN0UsQ0FGZjtBQUdJLElBQUEsSUFBSSxFQUFFRCxLQUFLLENBQUNXO0FBSGhCLE1BS0tKLElBTEwsZUFNSTtBQUFNLElBQUEsU0FBUyxFQUFDO0FBQWhCLEtBQTBDUCxLQUFLLENBQUNZLEtBQWhELENBTkosQ0FGSixlQVdJO0FBQ0ksSUFBQSxJQUFJLEVBQUMsUUFEVDtBQUVJLElBQUEsU0FBUyxFQUFDLHNDQUZkO0FBR0ksSUFBQSxPQUFPLEVBQUVQO0FBSGIsa0JBS0k7QUFBTSxJQUFBLFNBQVMsRUFBQztBQUFoQix1QkFMSixlQU1JLDZCQUFDLGNBQUQ7QUFDSSxJQUFBLElBQUksRUFBRUYsWUFEVjtBQUVJLElBQUEsUUFBUSxNQUZaO0FBR0ksSUFBQSxTQUFTLEVBQUM7QUFIZCxJQU5KLENBWEosQ0FESixFQTJCS0EsWUFBWSxpQkFDVDtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDS0gsS0FBSyxDQUFDTSxRQURYLENBNUJSLENBREo7QUFvQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgQ2FyZXQgZnJvbSBcIi4vQ2FyZXRcIjtcclxuaW1wb3J0IFV0aWxpdGllcyBmcm9tIFwiLi9VdGlsaXRpZXNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25NZW51SXRlbVByb3BzIHtcclxuICAgIHRvPzogc3RyaW5nXHJcbiAgICBpY29uPzogYW55XHJcbiAgICBsYWJlbD86IGFueVxyXG4gICAgaXNBY3RpdmU/OiBib29sZWFuXHJcbiAgICBjaGlsZHJlbj86IGFueVxyXG59XHJcblxyXG4vKipcclxuICogRHJvcGRvd24gd2l0aCBidXR0b24gZm9yIHNpZGViYXIuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEcm9wZG93bk1lbnVJdGVtKHByb3BzOiBEcm9wZG93bk1lbnVJdGVtUHJvcHMpIHtcclxuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcclxuICAgIGNvbnN0IFtzaG93RHJvcGRvd24sIHNldFNob3dEcm9wZG93bl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgICAgICBpZiAocHJvcHMuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgc2V0U2hvd0Ryb3Bkb3duKCFzaG93RHJvcGRvd24pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBpY29uO1xyXG5cclxuICAgIGlmICh0eXBlb2YgKHByb3BzLmljb24pID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgLy8gaXMgY2xhc3NOYW1lXHJcbiAgICAgICAgaWNvbiA9IDxzcGFuIGNsYXNzTmFtZT17cHJvcHMuaWNvbiArIChwcm9wcy5jaGlsZHJlbiA/IFwiIGJsdWUtYXBwLXNpZGViYXItZHJvcGRvd24taWNvblwiIDogXCJcIil9IC8+O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgLy8gaXMgZWxlbWVudCAvIGNvbXBvbmVudFxyXG4gICAgICAgIGljb24gPSBwcm9wcy5pY29uO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBpZCA9IHtcclxuICAgICAgICBpZDogXCJibHVlLWFjdGlvbi1tZW51LWl0ZW0tXCIgKyBVdGlsaXRpZXMuZ3VpZCgpXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cCB3LTEwMFwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgey4uLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJibHVlLWFwcC10b2dnbGUtcGFnZSBibHVlLWFwcC1zaWRlYmFyLWJ0biBidG4gcHItMCBcIiArIChhY3RpdmUgPyBcImFjdGl2ZVwiIDogXCJcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17cHJvcHMudG99XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2ljb259XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmx1ZS1hcHAtc2lkZWJhci1sYWJlbFwiPntwcm9wcy5sYWJlbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBibHVlLWFwcC1zaWRlYmFyLWJ0biB3LWF1dG8gcGwtMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlRvZ2dsZSBEcm9wZG93bjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17c2hvd0Ryb3Bkb3dufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaXJyb3JlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWF1dG8gcGwtNSBtdC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtzaG93RHJvcGRvd24gJiZcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmx1ZS1hcHAtc2lkZWJhci1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il19