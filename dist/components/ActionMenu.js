"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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

function ActionMenu(_ref) {
  var hideToggleAction = _ref.hideToggleAction,
      children = _ref.children,
      _ref$toggleIcon = _ref.toggleIcon,
      toggleIcon = _ref$toggleIcon === void 0 ? "bi-iconmonstr-menu-7" : _ref$toggleIcon;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      actionsToggledIn = _useState2[0],
      setActionsToggledIn = _useState2[1];

  var toggleActions = function toggleActions() {
    _Utilities.default.toggleActions();

    initToggleStatus();
  };

  var initToggleStatus = function initToggleStatus() {
    setActionsToggledIn(_Utilities.default.hasClass(document.querySelector(".blue-app-actions"), "open"));
  };

  (0, _react.useEffect)(function () {
    initToggleStatus();
    var appWrapper = document.querySelector(".blue-app-wrapper");

    if (appWrapper) {
      appWrapper.onclick = toggleActions;
    }

    document.querySelectorAll(".blue-app-actions-menu .nav-link").forEach(function (link) {
      link.addEventListener("click", function () {
        if (actionsToggledIn) {
          toggleActions();
        }
      });
    });
  }, []);
  return /*#__PURE__*/_react.default.createElement("ul", {
    className: "blue-app-actions-menu nav navbar-nav navbar-right fluent-btn"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "fluent-btn-ball"
  }), !actionsToggledIn && !hideToggleAction ? /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
    className: "blue-app-actions-menu-toggle",
    onClick: function onClick() {
      return toggleActions();
    },
    icon: toggleIcon,
    "aria-label": "Toggle menu"
  }) : "", children);
}

var _default = ActionMenu;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FjdGlvbk1lbnUudHN4Il0sIm5hbWVzIjpbIkFjdGlvbk1lbnUiLCJoaWRlVG9nZ2xlQWN0aW9uIiwiY2hpbGRyZW4iLCJ0b2dnbGVJY29uIiwiYWN0aW9uc1RvZ2dsZWRJbiIsInNldEFjdGlvbnNUb2dnbGVkSW4iLCJ0b2dnbGVBY3Rpb25zIiwiVXRpbGl0aWVzIiwiaW5pdFRvZ2dsZVN0YXR1cyIsImhhc0NsYXNzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYXBwV3JhcHBlciIsIm9uY2xpY2siLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImxpbmsiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkEsU0FBU0EsVUFBVCxPQUEwRztBQUFBLE1BQXBGQyxnQkFBb0YsUUFBcEZBLGdCQUFvRjtBQUFBLE1BQWxFQyxRQUFrRSxRQUFsRUEsUUFBa0U7QUFBQSw2QkFBeERDLFVBQXdEO0FBQUEsTUFBeERBLFVBQXdELGdDQUEzQyxzQkFBMkM7O0FBQ3RHLGtCQUFnRCxxQkFBa0IsS0FBbEIsQ0FBaEQ7QUFBQTtBQUFBLE1BQU9DLGdCQUFQO0FBQUEsTUFBeUJDLG1CQUF6Qjs7QUFFQSxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDeEJDLHVCQUFVRCxhQUFWOztBQUNBRSxJQUFBQSxnQkFBZ0I7QUFDbkIsR0FIRDs7QUFLQSxNQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDM0JILElBQUFBLG1CQUFtQixDQUFDRSxtQkFBVUUsUUFBVixDQUFtQkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLG1CQUF2QixDQUFuQixFQUFnRSxNQUFoRSxDQUFELENBQW5CO0FBQ0gsR0FGRDs7QUFJQSx3QkFBVSxZQUFNO0FBQ1pILElBQUFBLGdCQUFnQjtBQUVoQixRQUFNSSxVQUFVLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixtQkFBdkIsQ0FBbkI7O0FBQ0EsUUFBSUMsVUFBSixFQUFnQjtBQUNaQSxNQUFBQSxVQUFVLENBQUNDLE9BQVgsR0FBcUJQLGFBQXJCO0FBQ0g7O0FBRURJLElBQUFBLFFBQVEsQ0FBQ0ksZ0JBQVQsQ0FBMEIsa0NBQTFCLEVBQThEQyxPQUE5RCxDQUFzRSxVQUFBQyxJQUFJLEVBQUk7QUFDMUVBLE1BQUFBLElBQUksQ0FBQ0MsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBTTtBQUNqQyxZQUFJYixnQkFBSixFQUFzQjtBQUNsQkUsVUFBQUEsYUFBYTtBQUNoQjtBQUNKLE9BSkQ7QUFLSCxLQU5EO0FBT0gsR0FmRCxFQWVHLEVBZkg7QUFpQkEsc0JBQ0k7QUFBSSxJQUFBLFNBQVMsRUFBQztBQUFkLGtCQUNJO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixJQURKLEVBR0ssQ0FBQ0YsZ0JBQUQsSUFBcUIsQ0FBQ0gsZ0JBQXRCLGdCQUNHLDZCQUFDLGlCQUFEO0FBQ0ksSUFBQSxTQUFTLEVBQUMsOEJBRGQ7QUFFSSxJQUFBLE9BQU8sRUFBRTtBQUFBLGFBQU1LLGFBQWEsRUFBbkI7QUFBQSxLQUZiO0FBR0ksSUFBQSxJQUFJLEVBQUVILFVBSFY7QUFJSSxrQkFBVztBQUpmLElBREgsR0FPSyxFQVZWLEVBYUtELFFBYkwsQ0FESjtBQWlCSDs7ZUFFY0YsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCIuL01lbnVJdGVtXCJcclxuaW1wb3J0IFV0aWxpdGllcyBmcm9tIFwiLi9VdGlsaXRpZXNcIlxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb25NZW51UHJvcHMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBIaWRlcyB0aGUgdG9nZ2xlIGJ1dHRvbiBpbiBtb2JpbGUgdmlldy4gQ2FuIGJlIHVzZWZ1bCB3aGVuIHVzaW5nIG11bHRpcGxlIEFjdGlvbk1lbnVzIGFuZCBub3Qgc2hvdyB0aGUgdG9nZ2xlIGJ1dHRvbiBmb3IgZWFjaCBtZW51LlxyXG4gICAgICovXHJcbiAgICBoaWRlVG9nZ2xlQWN0aW9uPzogYm9vbGVhblxyXG5cclxuICAgIGNoaWxkcmVuPzogYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJY29uIGNvbXBvbmVudCBmb3IgdGhlIHRvZ2dsZSBpY29uLlxyXG4gICAgICovXHJcbiAgICB0b2dnbGVJY29uPzogYW55XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFjdGlvbk1lbnUoeyBoaWRlVG9nZ2xlQWN0aW9uLCBjaGlsZHJlbiwgdG9nZ2xlSWNvbiA9IFwiYmktaWNvbm1vbnN0ci1tZW51LTdcIiB9OiBBY3Rpb25NZW51UHJvcHMpIHtcclxuICAgIGNvbnN0IFthY3Rpb25zVG9nZ2xlZEluLCBzZXRBY3Rpb25zVG9nZ2xlZEluXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IHRvZ2dsZUFjdGlvbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgVXRpbGl0aWVzLnRvZ2dsZUFjdGlvbnMoKVxyXG4gICAgICAgIGluaXRUb2dnbGVTdGF0dXMoKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGluaXRUb2dnbGVTdGF0dXMgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0QWN0aW9uc1RvZ2dsZWRJbihVdGlsaXRpZXMuaGFzQ2xhc3MoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ibHVlLWFwcC1hY3Rpb25zXCIpLCBcIm9wZW5cIikpXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpbml0VG9nZ2xlU3RhdHVzKClcclxuXHJcbiAgICAgICAgY29uc3QgYXBwV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmx1ZS1hcHAtd3JhcHBlclwiKSBhcyBIVE1MRWxlbWVudFxyXG4gICAgICAgIGlmIChhcHBXcmFwcGVyKSB7XHJcbiAgICAgICAgICAgIGFwcFdyYXBwZXIub25jbGljayA9IHRvZ2dsZUFjdGlvbnNcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmx1ZS1hcHAtYWN0aW9ucy1tZW51IC5uYXYtbGlua1wiKS5mb3JFYWNoKGxpbmsgPT4ge1xyXG4gICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uc1RvZ2dsZWRJbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUFjdGlvbnMoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJibHVlLWFwcC1hY3Rpb25zLW1lbnUgbmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0IGZsdWVudC1idG5cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbHVlbnQtYnRuLWJhbGxcIiAvPlxyXG5cclxuICAgICAgICAgICAgeyFhY3Rpb25zVG9nZ2xlZEluICYmICFoaWRlVG9nZ2xlQWN0aW9uID9cclxuICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsdWUtYXBwLWFjdGlvbnMtbWVudS10b2dnbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUFjdGlvbnMoKX1cclxuICAgICAgICAgICAgICAgICAgICBpY29uPXt0b2dnbGVJY29ufVxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbWVudVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L3VsPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25NZW51Il19