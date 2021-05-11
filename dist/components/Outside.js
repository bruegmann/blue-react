"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOutside = useOutside;
exports.default = Outside;

var _react = _interopRequireWildcard(require("react"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL091dHNpZGUudHN4Il0sIm5hbWVzIjpbInVzZU91dHNpZGUiLCJyZWYiLCJjYWxsYmFjayIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImN1cnJlbnQiLCJjb250YWlucyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJPdXRzaWRlIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJvbkNsaWNrT3V0c2lkZSIsIndyYXBwZXJSZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ08sU0FBU0EsVUFBVCxDQUFvQkMsR0FBcEIsRUFBZ0RDLFFBQWhELEVBQXdGO0FBQzNGLHdCQUFVLFlBQU07QUFDWjtBQUNSO0FBQ0E7QUFDUSxhQUFTQyxrQkFBVCxDQUE0QkMsS0FBNUIsRUFBK0M7QUFDM0NDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUVDLFFBQUFBLE1BQU0sRUFBRUgsS0FBSyxDQUFDRztBQUFoQixPQUFaOztBQUNBLFVBQUlOLEdBQUcsQ0FBQ08sT0FBSixJQUFlLENBQUNQLEdBQUcsQ0FBQ08sT0FBSixDQUFZQyxRQUFaLENBQXFCTCxLQUFLLENBQUNHLE1BQTNCLENBQWhCLElBQXNETCxRQUExRCxFQUFvRTtBQUNoRUEsUUFBQUEsUUFBUSxDQUFDRSxLQUFELENBQVI7QUFDSDtBQUNKLEtBVFcsQ0FVWjs7O0FBQ0FNLElBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUNSLGtCQUF2QztBQUNBLFdBQU8sWUFBTTtBQUNUO0FBQ0FPLE1BQUFBLFFBQVEsQ0FBQ0UsbUJBQVQsQ0FBNkIsV0FBN0IsRUFBMENULGtCQUExQztBQUNILEtBSEQ7QUFJSCxHQWhCRCxFQWdCRyxDQUFDRixHQUFELENBaEJIO0FBaUJIOztBQVFEO0FBQ0E7QUFDQTtBQUNlLFNBQVNZLE9BQVQsT0FBd0U7QUFBQSxNQUFyREMsUUFBcUQsUUFBckRBLFFBQXFEO0FBQUEsTUFBM0NDLFNBQTJDLFFBQTNDQSxTQUEyQztBQUFBLE1BQWhDQyxjQUFnQyxRQUFoQ0EsY0FBZ0M7QUFDbkYsTUFBTUMsVUFBVSxHQUFHLG1CQUFPLElBQVAsQ0FBbkI7QUFDQWpCLEVBQUFBLFVBQVUsQ0FBQ2lCLFVBQUQsRUFBYUQsY0FBYixDQUFWO0FBRUEsc0JBQU87QUFBSyxJQUFBLEdBQUcsRUFBRUMsVUFBVjtBQUFzQixJQUFBLFNBQVMsRUFBRUY7QUFBakMsS0FBNkNELFFBQTdDLENBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBNdXRhYmxlUmVmT2JqZWN0LCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG4vKipcclxuICogSG9vayB0aGF0IGFsZXJ0cyBjbGlja3Mgb3V0c2lkZSBvZiB0aGUgcGFzc2VkIHJlZlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZU91dHNpZGUocmVmOiBNdXRhYmxlUmVmT2JqZWN0PGFueT4sIGNhbGxiYWNrPzogKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB2b2lkKSB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFsZXJ0IGlmIGNsaWNrZWQgb24gb3V0c2lkZSBvZiBlbGVtZW50XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2tPdXRzaWRlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHsgdGFyZ2V0OiBldmVudC50YXJnZXQgfSlcclxuICAgICAgICAgICAgaWYgKHJlZi5jdXJyZW50ICYmICFyZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpICYmIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhldmVudClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBCaW5kIHRoZSBldmVudCBsaXN0ZW5lclxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xpY2tPdXRzaWRlKVxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFVuYmluZCB0aGUgZXZlbnQgbGlzdGVuZXIgb24gY2xlYW4gdXBcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbGlja091dHNpZGUpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3JlZl0pXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgT3V0c2lkZVByb3BzIHtcclxuICAgIGNoaWxkcmVuOiBhbnlcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZ1xyXG4gICAgb25DbGlja091dHNpZGU/OiAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHZvaWRcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB0aGF0IGZpcmVzIGFuIGV2ZW50IGlmIHlvdSBjbGljayBvdXRzaWRlIG9mIGl0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPdXRzaWRlKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgb25DbGlja091dHNpZGUgfTogT3V0c2lkZVByb3BzKSB7XHJcbiAgICBjb25zdCB3cmFwcGVyUmVmID0gdXNlUmVmKG51bGwpXHJcbiAgICB1c2VPdXRzaWRlKHdyYXBwZXJSZWYsIG9uQ2xpY2tPdXRzaWRlKVxyXG5cclxuICAgIHJldHVybiA8ZGl2IHJlZj17d3JhcHBlclJlZn0gY2xhc3NOYW1lPXtjbGFzc05hbWV9PntjaGlsZHJlbn08L2Rpdj5cclxufSJdfQ==