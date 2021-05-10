"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Actions;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FjdGlvbnMudHN4Il0sIm5hbWVzIjpbImNvbGxhcHNlU2VjdGlvbiIsImVsZW1lbnQiLCJzZWN0aW9uSGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiZWxlbWVudFRyYW5zaXRpb24iLCJzdHlsZSIsInRyYW5zaXRpb24iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJoZWlnaHQiLCJzZXRBdHRyaWJ1dGUiLCJleHBhbmRTZWN0aW9uIiwiZnVuIiwiZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiQWN0aW9ucyIsInByb3BzIiwib3BlbiIsInNldE9wZW4iLCJpZCIsIlV0aWxpdGllcyIsImd1aWQiLCJ0b2dnbGUiLCJuZXdPcGVuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9uVG9nZ2xlIiwidW5kZWZpbmVkIiwiY2xhc3NOYW1lIiwiYnJlYWsiLCJjb250cm9sc0NsYXNzTmFtZSIsImNoaWxkcmVuIiwiZmVhdHVyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdDQSxTQUFTQSxlQUFULENBQXlCQyxPQUF6QixFQUErQztBQUMzQztBQUNBLE1BQUlDLGFBQWEsR0FBR0QsT0FBTyxDQUFDRSxZQUE1QjtBQUNBLE1BQUlDLGlCQUFpQixHQUFHSCxPQUFPLENBQUNJLEtBQVIsQ0FBY0MsVUFBdEM7QUFDQUwsRUFBQUEsT0FBTyxDQUFDSSxLQUFSLENBQWNDLFVBQWQsR0FBMkIsRUFBM0I7QUFFQUMsRUFBQUEscUJBQXFCLENBQUMsWUFBWTtBQUM5Qk4sSUFBQUEsT0FBTyxDQUFDSSxLQUFSLENBQWNHLE1BQWQsR0FBdUJOLGFBQWEsR0FBRyxJQUF2QztBQUNBRCxJQUFBQSxPQUFPLENBQUNJLEtBQVIsQ0FBY0MsVUFBZCxHQUEyQkYsaUJBQTNCO0FBQ0FHLElBQUFBLHFCQUFxQixDQUFDLFlBQVk7QUFDOUJOLE1BQUFBLE9B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ZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgYnJlYWtPcHRpb24gfSBmcm9tIFwiLi9zaGFyZWRcIlxyXG5pbXBvcnQgVXRpbGl0aWVzIGZyb20gXCIuL1V0aWxpdGllc1wiXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvbnNQcm9wcyB7XHJcbiAgICAvKipcclxuICAgICAqIENvbnRlbnQgdGhhdCB3aWxsIGFwcGVhciBvbiB0aGUgbWVudSB3aGVuIGl0J3MgZXhwYW5kZWQuXHJcbiAgICAgKi9cclxuICAgIGNoaWxkcmVuPzogYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFeHRlbmRzIHRoZSBgY2xhc3NOYW1lYCBvZiBgLmJsdWUtYWN0aW9uc2AuXHJcbiAgICAgKi9cclxuICAgIGNsYXNzTmFtZT86IHN0cmluZ1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXh0ZW5kcyB0aGUgPGNvZGU+Y2xhc3NOYW1lPC9jb2RlPiBvZiA8Y29kZT4uYmx1ZS1hY3Rpb25zLWNvbnRyb2xzPC9jb2RlPi5cclxuICAgICAqL1xyXG4gICAgY29udHJvbHNDbGFzc05hbWU/OiBzdHJpbmdcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnRlbnQgdGhhdCB3aWxsIGFwcGVhciB3aGVuIHRoZSBtZW51IGlzIHNocnVua2VuLlxyXG4gICAgICovXHJcbiAgICBmZWF0dXJlZD86IGFueVxyXG4gICAgb3Blbj86IGJvb2xlYW5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFdpbGwgZmlyZSB3aGVuIHRoZSBzdGF0ZSBvZiBgb3BlbmAgd2lsbCBjaGFuZ2UgaW5zaWRlIG9mIHRoZSBjb21wb25lbnQuXHJcbiAgICAgKiAqKkV4YW1wbGU6KiogYG9uVG9nZ2xlPXtvcGVuID0+IHRoaXMuc2V0U3RhdGUoeyBvcGVuIH0pfWBcclxuICAgICAqL1xyXG4gICAgb25Ub2dnbGU/OiAob3BlbjogYm9vbGVhbikgPT4gdm9pZFxyXG4gICAgYnJlYWs/OiBicmVha09wdGlvblxyXG59XHJcblxyXG5mdW5jdGlvbiBjb2xsYXBzZVNlY3Rpb24oZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuICAgIC8qIFNvdXJjZSBvZiB0aGVzZSBmdW5jdGlvbnM6IGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vdXNpbmctY3NzLXRyYW5zaXRpb25zLWF1dG8tZGltZW5zaW9ucy8gKi9cclxuICAgIHZhciBzZWN0aW9uSGVpZ2h0ID0gZWxlbWVudC5zY3JvbGxIZWlnaHRcclxuICAgIHZhciBlbGVtZW50VHJhbnNpdGlvbiA9IGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvblxyXG4gICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gXCJcIlxyXG5cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBzZWN0aW9uSGVpZ2h0ICsgXCJweFwiXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gZWxlbWVudFRyYW5zaXRpb25cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IDg0ICsgXCJweFwiXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtY29sbGFwc2VkXCIsIFwidHJ1ZVwiKVxyXG59XHJcblxyXG5mdW5jdGlvbiBleHBhbmRTZWN0aW9uKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICB2YXIgc2VjdGlvbkhlaWdodCA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0XHJcbiAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IHNlY3Rpb25IZWlnaHQgKyBcInB4XCJcclxuXHJcbiAgICBjb25zdCBmdW4gPSBmdW5jdGlvbiAoZTogVHJhbnNpdGlvbkV2ZW50KSB7XHJcbiAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBmdW4pXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBcIlwiXHJcbiAgICB9XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIGZ1bilcclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1jb2xsYXBzZWRcIiwgXCJmYWxzZVwiKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY3Rpb25zKHByb3BzOiBBY3Rpb25zUHJvcHMpIHtcclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHByb3BzLm9wZW4gfHwgZmFsc2UpXHJcbiAgICBjb25zdCBpZCA9IGBBY3Rpb25zLSR7VXRpbGl0aWVzLmd1aWQoKX1gXHJcblxyXG4gICAgY29uc3QgdG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld09wZW4gPSAhb3BlblxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkgYXMgSFRNTEVsZW1lbnRcclxuICAgICAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICBzZXRPcGVuKG5ld09wZW4pXHJcbiAgICAgICAgICAgIGlmIChuZXdPcGVuKSB7XHJcbiAgICAgICAgICAgICAgICBleHBhbmRTZWN0aW9uKGVsZW1lbnQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xsYXBzZVNlY3Rpb24oZWxlbWVudClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHByb3BzLm9uVG9nZ2xlKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5vblRvZ2dsZShvcGVuKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLm9wZW4gIT09IG9wZW4gJiYgcHJvcHMub3BlbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHNldE9wZW4ocHJvcHMub3BlbilcclxuICAgICAgICB9XHJcbiAgICB9LCBbcHJvcHMub3Blbl0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGlkPXtpZH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcImJsdWUtYWN0aW9ucyBcIiArIHByb3BzLmNsYXNzTmFtZSArIFwiIFwiICsgKG9wZW4gPyBcIm9wZW5cIiA6IFwiY2xvc2VkXCIpICsgYCBicmVhay0ke3Byb3BzLmJyZWFrIHx8IFwibWRcIn1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BibHVlLWFjdGlvbnMtaW5kaWNhdG9yIGQtJHtwcm9wcy5icmVha30tbm9uZWB9IG9uQ2xpY2s9e3RvZ2dsZX0gLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImJsdWUtYWN0aW9ucy1jb250cm9scyBcIiArIHByb3BzLmNvbnRyb2xzQ2xhc3NOYW1lfT5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGJsdWUtYWN0aW9ucy1mZWF0dXJlZCBkLSR7cHJvcHMuYnJlYWt9LW5vbmVgfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmx1ZW50LWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmx1ZW50LWJ0bi1iYWxsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZmVhdHVyZWR9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXX0=