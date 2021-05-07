"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOutside = useOutside;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutside(ref, callback) {
  (0, _react.useEffect)(function () {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      console.log({
        target: event.target
      });

      if (ref.current && !ref.current.contains(event.target) && callback) {
        callback(event);
      }
    } // Bind the event listener


    document.addEventListener("mousedown", handleClickOutside);
    return function () {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
/**
 * Component that fires an event if you click outside of it
 */


function Outside(_ref) {
  var children = _ref.children,
      className = _ref.className,
      onClickOutside = _ref.onClickOutside;
  var wrapperRef = (0, _react.useRef)(null);
  useOutside(wrapperRef, onClickOutside);
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: wrapperRef,
    className: className
  }, children);
}

Outside.propTypes = {
  children: _propTypes.default.element.isRequired,
  className: _propTypes.default.string,
  onClickOutside: _propTypes.default.func.isRequired
};
var _default = Outside;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL091dHNpZGUuanMiXSwibmFtZXMiOlsidXNlT3V0c2lkZSIsInJlZiIsImNhbGxiYWNrIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwiY3VycmVudCIsImNvbnRhaW5zIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIk91dHNpZGUiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2tPdXRzaWRlIiwid3JhcHBlclJlZiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnQiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNPLFNBQVNBLFVBQVQsQ0FBb0JDLEdBQXBCLEVBQXlCQyxRQUF6QixFQUFtQztBQUN0Qyx3QkFBVSxZQUFNO0FBQ1o7QUFDUjtBQUNBO0FBQ1EsYUFBU0Msa0JBQVQsQ0FBNEJDLEtBQTVCLEVBQW1DO0FBQy9CQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFQyxRQUFBQSxNQUFNLEVBQUVILEtBQUssQ0FBQ0c7QUFBaEIsT0FBWjs7QUFDQSxVQUFJTixHQUFHLENBQUNPLE9BQUosSUFBZSxDQUFDUCxHQUFHLENBQUNPLE9BQUosQ0FBWUMsUUFBWixDQUFxQkwsS0FBSyxDQUFDRyxNQUEzQixDQUFoQixJQUFzREwsUUFBMUQsRUFBb0U7QUFDaEVBLFFBQUFBLFFBQVEsQ0FBQ0UsS0FBRCxDQUFSO0FBQ0g7QUFDSixLQVRXLENBVVo7OztBQUNBTSxJQUFBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLFdBQTFCLEVBQXVDUixrQkFBdkM7QUFDQSxXQUFPLFlBQU07QUFDVDtBQUNBTyxNQUFBQSxRQUFRLENBQUNFLG1CQUFULENBQTZCLFdBQTdCLEVBQTBDVCxrQkFBMUM7QUFDSCxLQUhEO0FBSUgsR0FoQkQsRUFnQkcsQ0FBQ0YsR0FBRCxDQWhCSDtBQWlCSDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU1ksT0FBVCxPQUEwRDtBQUFBLE1BQXZDQyxRQUF1QyxRQUF2Q0EsUUFBdUM7QUFBQSxNQUE3QkMsU0FBNkIsUUFBN0JBLFNBQTZCO0FBQUEsTUFBbEJDLGNBQWtCLFFBQWxCQSxjQUFrQjtBQUN0RCxNQUFNQyxVQUFVLEdBQUcsbUJBQU8sSUFBUCxDQUFuQjtBQUNBakIsRUFBQUEsVUFBVSxDQUFDaUIsVUFBRCxFQUFhRCxjQUFiLENBQVY7QUFFQSxzQkFBTztBQUFLLElBQUEsR0FBRyxFQUFFQyxVQUFWO0FBQXNCLElBQUEsU0FBUyxFQUFFRjtBQUFqQyxLQUE2Q0QsUUFBN0MsQ0FBUDtBQUNIOztBQUVERCxPQUFPLENBQUNLLFNBQVIsR0FBb0I7QUFDaEJKLEVBQUFBLFFBQVEsRUFBRUssbUJBQVVDLE9BQVYsQ0FBa0JDLFVBRFo7QUFFaEJOLEVBQUFBLFNBQVMsRUFBRUksbUJBQVVHLE1BRkw7QUFHaEJOLEVBQUFBLGNBQWMsRUFBRUcsbUJBQVVJLElBQVYsQ0FBZUY7QUFIZixDQUFwQjtlQU1lUixPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBIb29rIHRoYXQgYWxlcnRzIGNsaWNrcyBvdXRzaWRlIG9mIHRoZSBwYXNzZWQgcmVmXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlT3V0c2lkZShyZWYsIGNhbGxiYWNrKSB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFsZXJ0IGlmIGNsaWNrZWQgb24gb3V0c2lkZSBvZiBlbGVtZW50XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2tPdXRzaWRlKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHsgdGFyZ2V0OiBldmVudC50YXJnZXQgfSlcclxuICAgICAgICAgICAgaWYgKHJlZi5jdXJyZW50ICYmICFyZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpICYmIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQmluZCB0aGUgZXZlbnQgbGlzdGVuZXJcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgLy8gVW5iaW5kIHRoZSBldmVudCBsaXN0ZW5lciBvbiBjbGVhbiB1cFxyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtyZWZdKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0aGF0IGZpcmVzIGFuIGV2ZW50IGlmIHlvdSBjbGljayBvdXRzaWRlIG9mIGl0XHJcbiAqL1xyXG5mdW5jdGlvbiBPdXRzaWRlKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgb25DbGlja091dHNpZGUgfSkge1xyXG4gICAgY29uc3Qgd3JhcHBlclJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIHVzZU91dHNpZGUod3JhcHBlclJlZiwgb25DbGlja091dHNpZGUpO1xyXG5cclxuICAgIHJldHVybiA8ZGl2IHJlZj17d3JhcHBlclJlZn0gY2xhc3NOYW1lPXtjbGFzc05hbWV9PntjaGlsZHJlbn08L2Rpdj47XHJcbn1cclxuXHJcbk91dHNpZGUucHJvcFR5cGVzID0ge1xyXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWQsXHJcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBvbkNsaWNrT3V0c2lkZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3V0c2lkZTsiXX0=