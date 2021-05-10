"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ActionMenu;

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
 * <span class="badge badge-info">Info</span> You can also use <strong>Actions</strong> instead.<br>
 * The Action Menu on the top right of a page. You can place Actions here which are in context of the current page.
 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FjdGlvbk1lbnUudHN4Il0sIm5hbWVzIjpbIkFjdGlvbk1lbnUiLCJoaWRlVG9nZ2xlQWN0aW9uIiwiY2hpbGRyZW4iLCJ0b2dnbGVJY29uIiwiYWN0aW9uc1RvZ2dsZWRJbiIsInNldEFjdGlvbnNUb2dnbGVkSW4iLCJ0b2dnbGVBY3Rpb25zIiwiVXRpbGl0aWVzIiwiaW5pdFRvZ2dsZVN0YXR1cyIsImhhc0NsYXNzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYXBwV3JhcHBlciIsIm9uY2xpY2siLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImxpbmsiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDZSxTQUFTQSxVQUFULE9BQTBHO0FBQUEsTUFBcEZDLGdCQUFvRixRQUFwRkEsZ0JBQW9GO0FBQUEsTUFBbEVDLFFBQWtFLFFBQWxFQSxRQUFrRTtBQUFBLDZCQUF4REMsVUFBd0Q7QUFBQSxNQUF4REEsVUFBd0QsZ0NBQTNDLHNCQUEyQzs7QUFDckgsa0JBQWdELHFCQUFrQixLQUFsQixDQUFoRDtBQUFBO0FBQUEsTUFBT0MsZ0JBQVA7QUFBQSxNQUF5QkMsbUJBQXpCOztBQUVBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUN4QkMsdUJBQVVELGFBQVY7O0FBQ0FFLElBQUFBLGdCQUFnQjtBQUNuQixHQUhEOztBQUtBLE1BQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUMzQkgsSUFBQUEsbUJBQW1CLENBQUNFLG1CQUFVRSxRQUFWLENBQW1CQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsbUJBQXZCLENBQW5CLEVBQWdFLE1BQWhFLENBQUQsQ0FBbkI7QUFDSCxHQUZEOztBQUlBLHdCQUFVLFlBQU07QUFDWkgsSUFBQUEsZ0JBQWdCO0FBRWhCLFFBQU1JLFVBQVUsR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLG1CQUF2QixDQUFuQjs7QUFDQSxRQUFJQyxVQUFKLEVBQWdCO0FBQ1pBLE1BQUFBLFVBQVUsQ0FBQ0MsT0FBWCxHQUFxQlAsYUFBckI7QUFDSDs7QUFFREksSUFBQUEsUUFBUSxDQUFDSSxnQkFBVCxDQUEwQixrQ0FBMUIsRUFBOERDLE9BQTlELENBQXNFLFVBQUFDLElBQUksRUFBSTtBQUMxRUEsTUFBQUEsSUFBSSxDQUFDQyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFNO0FBQ2pDLFlBQUliLGdCQUFKLEVBQXNCO0FBQ2xCRSxVQUFBQSxhQUFhO0FBQ2hCO0FBQ0osT0FKRDtBQUtILEtBTkQ7QUFPSCxHQWZELEVBZUcsRUFmSDtBQWlCQSxzQkFDSTtBQUFJLElBQUEsU0FBUyxFQUFDO0FBQWQsa0JBQ0k7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLElBREosRUFHSyxDQUFDRixnQkFBRCxJQUFxQixDQUFDSCxnQkFBdEIsZ0JBQ0csNkJBQUMsaUJBQUQ7QUFDSSxJQUFBLFNBQVMsRUFBQyw4QkFEZDtBQUVJLElBQUEsT0FBTyxFQUFFO0FBQUEsYUFBTUssYUFBYSxFQUFuQjtBQUFBLEtBRmI7QUFHSSxJQUFBLElBQUksRUFBRUgsVUFIVjtBQUlJLGtCQUFXO0FBSmYsSUFESCxHQU9LLEVBVlYsRUFhS0QsUUFiTCxDQURKO0FBaUJIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIi4vTWVudUl0ZW1cIlxyXG5pbXBvcnQgVXRpbGl0aWVzIGZyb20gXCIuL1V0aWxpdGllc1wiXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvbk1lbnVQcm9wcyB7XHJcbiAgICAvKipcclxuICAgICAqIEhpZGVzIHRoZSB0b2dnbGUgYnV0dG9uIGluIG1vYmlsZSB2aWV3LiBDYW4gYmUgdXNlZnVsIHdoZW4gdXNpbmcgbXVsdGlwbGUgQWN0aW9uTWVudXMgYW5kIG5vdCBzaG93IHRoZSB0b2dnbGUgYnV0dG9uIGZvciBlYWNoIG1lbnUuXHJcbiAgICAgKi9cclxuICAgIGhpZGVUb2dnbGVBY3Rpb24/OiBib29sZWFuXHJcblxyXG4gICAgY2hpbGRyZW4/OiBhbnlcclxuXHJcbiAgICAvKipcclxuICAgICAqIEljb24gY29tcG9uZW50IGZvciB0aGUgdG9nZ2xlIGljb24uXHJcbiAgICAgKi9cclxuICAgIHRvZ2dsZUljb24/OiBhbnlcclxufVxyXG5cclxuLyoqXHJcbiAqIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtaW5mb1wiPkluZm88L3NwYW4+IFlvdSBjYW4gYWxzbyB1c2UgPHN0cm9uZz5BY3Rpb25zPC9zdHJvbmc+IGluc3RlYWQuPGJyPlxyXG4gKiBUaGUgQWN0aW9uIE1lbnUgb24gdGhlIHRvcCByaWdodCBvZiBhIHBhZ2UuIFlvdSBjYW4gcGxhY2UgQWN0aW9ucyBoZXJlIHdoaWNoIGFyZSBpbiBjb250ZXh0IG9mIHRoZSBjdXJyZW50IHBhZ2UuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY3Rpb25NZW51KHsgaGlkZVRvZ2dsZUFjdGlvbiwgY2hpbGRyZW4sIHRvZ2dsZUljb24gPSBcImJpLWljb25tb25zdHItbWVudS03XCIgfTogQWN0aW9uTWVudVByb3BzKSB7XHJcbiAgICBjb25zdCBbYWN0aW9uc1RvZ2dsZWRJbiwgc2V0QWN0aW9uc1RvZ2dsZWRJbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcclxuXHJcbiAgICBjb25zdCB0b2dnbGVBY3Rpb25zID0gKCkgPT4ge1xyXG4gICAgICAgIFV0aWxpdGllcy50b2dnbGVBY3Rpb25zKClcclxuICAgICAgICBpbml0VG9nZ2xlU3RhdHVzKClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbml0VG9nZ2xlU3RhdHVzID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEFjdGlvbnNUb2dnbGVkSW4oVXRpbGl0aWVzLmhhc0NsYXNzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmx1ZS1hcHAtYWN0aW9uc1wiKSwgXCJvcGVuXCIpKVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaW5pdFRvZ2dsZVN0YXR1cygpXHJcblxyXG4gICAgICAgIGNvbnN0IGFwcFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJsdWUtYXBwLXdyYXBwZXJcIikgYXMgSFRNTEVsZW1lbnRcclxuICAgICAgICBpZiAoYXBwV3JhcHBlcikge1xyXG4gICAgICAgICAgICBhcHBXcmFwcGVyLm9uY2xpY2sgPSB0b2dnbGVBY3Rpb25zXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsdWUtYXBwLWFjdGlvbnMtbWVudSAubmF2LWxpbmtcIikuZm9yRWFjaChsaW5rID0+IHtcclxuICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbnNUb2dnbGVkSW4pIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVBY3Rpb25zKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYmx1ZS1hcHAtYWN0aW9ucy1tZW51IG5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodCBmbHVlbnQtYnRuXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmx1ZW50LWJ0bi1iYWxsXCIgLz5cclxuXHJcbiAgICAgICAgICAgIHshYWN0aW9uc1RvZ2dsZWRJbiAmJiAhaGlkZVRvZ2dsZUFjdGlvbiA/XHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibHVlLWFwcC1hY3Rpb25zLW1lbnUtdG9nZ2xlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVBY3Rpb25zKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj17dG9nZ2xlSWNvbn1cclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG1lbnVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC91bD5cclxuICAgIClcclxufSJdfQ==