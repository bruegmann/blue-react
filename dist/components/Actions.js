"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

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

function collapseSection(element) {
  /* Source of these functions: https://css-tricks.com/using-css-transitions-auto-dimensions/ */
  var sectionHeight = element.scrollHeight;
  var elementTransition = element.style.transition;
  element.style.transition = "";
  requestAnimationFrame(function () {
    element.style.height = sectionHeight + "px";
    element.style.transition = elementTransition;
    requestAnimationFrame(function () {
      element.style.height = 84 + "px";
    });
  });
  element.setAttribute("data-collapsed", "true");
}

function expandSection(element) {
  var sectionHeight = element.scrollHeight;
  element.style.height = sectionHeight + "px";

  var fun = function fun(e) {
    element.removeEventListener("transitionend", fun);
    element.style.height = "";
  };

  element.addEventListener("transitionend", fun);
  element.setAttribute("data-collapsed", "false");
}

function Actions(props) {
  var _useState = (0, _react.useState)(props.open || false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var id = "Actions-".concat(_Utilities.default.guid());

  var toggle = function toggle() {
    var newOpen = !open;
    var element = document.getElementById(id);

    if (element) {
      setOpen(newOpen);

      if (newOpen) {
        expandSection(element);
      } else {
        collapseSection(element);
      }

      if (props.onToggle) {
        props.onToggle(open);
      }
    }
  };

  (0, _react.useEffect)(function () {
    if (props.open !== open && props.open !== undefined) {
      setOpen(props.open);
    }
  }, [props.open]);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: id,
    className: "blue-actions " + props.className + " " + (open ? "open" : "closed") + " break-".concat(props.break || "md")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "blue-actions-indicator d-".concat(props.break, "-none"),
    onClick: toggle
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "blue-actions-controls " + props.controlsClassName
  }, props.children), /*#__PURE__*/_react.default.createElement("div", {
    className: "blue-actions-featured d-".concat(props.break, "-none")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "fluent-btn"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "fluent-btn-ball"
  }), props.featured)));
}

var _default = Actions;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FjdGlvbnMudHN4Il0sIm5hbWVzIjpbImNvbGxhcHNlU2VjdGlvbiIsImVsZW1lbnQiLCJzZWN0aW9uSGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiZWxlbWVudFRyYW5zaXRpb24iLCJzdHlsZSIsInRyYW5zaXRpb24iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJoZWlnaHQiLCJzZXRBdHRyaWJ1dGUiLCJleHBhbmRTZWN0aW9uIiwiZnVuIiwiZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiQWN0aW9ucyIsInByb3BzIiwib3BlbiIsInNldE9wZW4iLCJpZCIsIlV0aWxpdGllcyIsImd1aWQiLCJ0b2dnbGUiLCJuZXdPcGVuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9uVG9nZ2xlIiwidW5kZWZpbmVkIiwiY2xhc3NOYW1lIiwiYnJlYWsiLCJjb250cm9sc0NsYXNzTmFtZSIsImNoaWxkcmVuIiwiZmVhdHVyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdDQSxTQUFTQSxlQUFULENBQXlCQyxPQUF6QixFQUErQztBQUMzQztBQUNBLE1BQUlDLGFBQWEsR0FBR0QsT0FBTyxDQUFDRSxZQUE1QjtBQUNBLE1BQUlDLGlCQUFpQixHQUFHSCxPQUFPLENBQUNJLEtBQVIsQ0FBY0MsVUFBdEM7QUFDQUwsRUFBQUEsT0FBTyxDQUFDSSxLQUFSLENBQWNDLFVBQWQsR0FBMkIsRUFBM0I7QUFFQUMsRUFBQUEscUJBQXFCLENBQUMsWUFBWTtBQUM5Qk4sSUFBQUEsT0FBTyxDQUFDSSxLQUFSLENBQWNHLE1BQWQsR0FBdUJOLGFBQWEsR0FBRyxJQUF2QztBQUNBRCxJQUFBQSxPQUFPLENBQUNJLEtBQVIsQ0FBY0MsVUFBZCxHQUEyQkYsaUJBQTNCO0FBQ0FHLElBQUFBLHFCQUFxQixDQUFDLFlBQVk7QUFDOUJOLE1BQUFBLE9B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LE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGJyZWFrT3B0aW9uIH0gZnJvbSBcIi4vc2hhcmVkXCJcclxuaW1wb3J0IFV0aWxpdGllcyBmcm9tIFwiLi9VdGlsaXRpZXNcIlxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb25zUHJvcHMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb250ZW50IHRoYXQgd2lsbCBhcHBlYXIgb24gdGhlIG1lbnUgd2hlbiBpdCdzIGV4cGFuZGVkLlxyXG4gICAgICovXHJcbiAgICBjaGlsZHJlbj86IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXh0ZW5kcyB0aGUgYGNsYXNzTmFtZWAgb2YgYC5ibHVlLWFjdGlvbnNgLlxyXG4gICAgICovXHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmdcclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4dGVuZHMgdGhlIDxjb2RlPmNsYXNzTmFtZTwvY29kZT4gb2YgPGNvZGU+LmJsdWUtYWN0aW9ucy1jb250cm9sczwvY29kZT4uXHJcbiAgICAgKi9cclxuICAgIGNvbnRyb2xzQ2xhc3NOYW1lPzogc3RyaW5nXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb250ZW50IHRoYXQgd2lsbCBhcHBlYXIgd2hlbiB0aGUgbWVudSBpcyBzaHJ1bmtlbi5cclxuICAgICAqL1xyXG4gICAgZmVhdHVyZWQ/OiBhbnlcclxuICAgIG9wZW4/OiBib29sZWFuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaWxsIGZpcmUgd2hlbiB0aGUgc3RhdGUgb2YgYG9wZW5gIHdpbGwgY2hhbmdlIGluc2lkZSBvZiB0aGUgY29tcG9uZW50LlxyXG4gICAgICogKipFeGFtcGxlOioqIGBvblRvZ2dsZT17b3BlbiA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbiB9KX1gXHJcbiAgICAgKi9cclxuICAgIG9uVG9nZ2xlPzogKG9wZW46IGJvb2xlYW4pID0+IHZvaWRcclxuICAgIGJyZWFrPzogYnJlYWtPcHRpb25cclxufVxyXG5cclxuZnVuY3Rpb24gY29sbGFwc2VTZWN0aW9uKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAvKiBTb3VyY2Ugb2YgdGhlc2UgZnVuY3Rpb25zOiBodHRwczovL2Nzcy10cmlja3MuY29tL3VzaW5nLWNzcy10cmFuc2l0aW9ucy1hdXRvLWRpbWVuc2lvbnMvICovXHJcbiAgICB2YXIgc2VjdGlvbkhlaWdodCA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0XHJcbiAgICB2YXIgZWxlbWVudFRyYW5zaXRpb24gPSBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb25cclxuICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9IFwiXCJcclxuXHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gc2VjdGlvbkhlaWdodCArIFwicHhcIlxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9IGVsZW1lbnRUcmFuc2l0aW9uXHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSA4NCArIFwicHhcIlxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbGxhcHNlZFwiLCBcInRydWVcIilcclxufVxyXG5cclxuZnVuY3Rpb24gZXhwYW5kU2VjdGlvbihlbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgdmFyIHNlY3Rpb25IZWlnaHQgPSBlbGVtZW50LnNjcm9sbEhlaWdodFxyXG4gICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBzZWN0aW9uSGVpZ2h0ICsgXCJweFwiXHJcblxyXG4gICAgY29uc3QgZnVuID0gZnVuY3Rpb24gKGU6IFRyYW5zaXRpb25FdmVudCkge1xyXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgZnVuKVxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gXCJcIlxyXG4gICAgfVxyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBmdW4pXHJcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtY29sbGFwc2VkXCIsIFwiZmFsc2VcIilcclxufVxyXG5cclxuZnVuY3Rpb24gQWN0aW9ucyhwcm9wczogQWN0aW9uc1Byb3BzKSB7XHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihwcm9wcy5vcGVuIHx8IGZhbHNlKVxyXG4gICAgY29uc3QgaWQgPSBgQWN0aW9ucy0ke1V0aWxpdGllcy5ndWlkKCl9YFxyXG5cclxuICAgIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdPcGVuID0gIW9wZW5cclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpIGFzIEhUTUxFbGVtZW50XHJcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgc2V0T3BlbihuZXdPcGVuKVxyXG4gICAgICAgICAgICBpZiAobmV3T3Blbikge1xyXG4gICAgICAgICAgICAgICAgZXhwYW5kU2VjdGlvbihlbGVtZW50KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29sbGFwc2VTZWN0aW9uKGVsZW1lbnQpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChwcm9wcy5vblRvZ2dsZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMub25Ub2dnbGUob3BlbilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9wcy5vcGVuICE9PSBvcGVuICYmIHByb3BzLm9wZW4gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzZXRPcGVuKHByb3BzLm9wZW4pXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLm9wZW5dKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XCJibHVlLWFjdGlvbnMgXCIgKyBwcm9wcy5jbGFzc05hbWUgKyBcIiBcIiArIChvcGVuID8gXCJvcGVuXCIgOiBcImNsb3NlZFwiKSArIGAgYnJlYWstJHtwcm9wcy5icmVhayB8fCBcIm1kXCJ9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYmx1ZS1hY3Rpb25zLWluZGljYXRvciBkLSR7cHJvcHMuYnJlYWt9LW5vbmVgfSBvbkNsaWNrPXt0b2dnbGV9IC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJibHVlLWFjdGlvbnMtY29udHJvbHMgXCIgKyBwcm9wcy5jb250cm9sc0NsYXNzTmFtZX0+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BibHVlLWFjdGlvbnMtZmVhdHVyZWQgZC0ke3Byb3BzLmJyZWFrfS1ub25lYH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsdWVudC1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsdWVudC1idG4tYmFsbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmZlYXR1cmVkfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25zIl19