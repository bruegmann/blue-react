"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SidebarMenu;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Sidebar for the `Grid` component.
 */
function SidebarMenu(props) {
  var _props$fluent = props.fluent,
      fluent = _props$fluent === void 0 ? true : _props$fluent;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      hasShadow = _useState2[0],
      setHasShadow = _useState2[1];

  var updateDimensions = function updateDimensions() {
    if (window.innerHeight > 500) {
      setHasShadow(false);
    }
  };

  (0, _react.useEffect)(function () {
    var blueAppSidebar = document.querySelector(".blue-app-sidebar");
    window.addEventListener("resize", updateDimensions);

    if (blueAppSidebar.scrollHeight > blueAppSidebar.clientHeight) {
      setHasShadow(true);
    }

    blueAppSidebar.addEventListener("scroll", function () {
      if (blueAppSidebar.scrollHeight - blueAppSidebar.scrollTop === blueAppSidebar.clientHeight) {
        setHasShadow(false);
      } else {
        setHasShadow(true);
      }
    });
    return function () {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "blue-app-sidebar " + (props.sidebarClass ? props.sidebarClass : ""),
    style: props.sidebarStyle ? props.sidebarStyle : {}
  }, props.topContent && /*#__PURE__*/_react.default.createElement("div", {
    className: "blue-app-sidebar-top"
  }, props.topContent), /*#__PURE__*/_react.default.createElement("div", {
    className: "blue-app-menu " + (props.menuClass ? props.menuClass : ""),
    style: props.menuStyle ? props.menuStyle : {}
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: fluent === true ? "fluent-btn" : ""
  }, fluent === true ? /*#__PURE__*/_react.default.createElement("div", {
    className: "fluent-btn-ball"
  }) : /*#__PURE__*/_react.default.createElement(_react.Fragment, null), props.children)), props.bottomContent && /*#__PURE__*/_react.default.createElement("div", {
    className: "blue-app-sidebar-bottom " + (hasShadow ? " has-shadow" : "")
  }, props.bottomContent));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1NpZGViYXJNZW51LnRzeCJdLCJuYW1lcyI6WyJTaWRlYmFyTWVudSIsInByb3BzIiwiZmx1ZW50IiwiaGFzU2hhZG93Iiwic2V0SGFzU2hhZG93IiwidXBkYXRlRGltZW5zaW9ucyIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiYmx1ZUFwcFNpZGViYXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsVG9wIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNpZGViYXJDbGFzcyIsInNpZGViYXJTdHlsZSIsInRvcENvbnRlbnQiLCJtZW51Q2xhc3MiLCJtZW51U3R5bGUiLCJjaGlsZHJlbiIsImJvdHRvbUNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5Q0E7QUFDQTtBQUNBO0FBQ2UsU0FBU0EsV0FBVCxDQUFxQkMsS0FBckIsRUFBOEM7QUFDekQsc0JBQTBCQSxLQUExQixDQUFRQyxNQUFSO0FBQUEsTUFBUUEsTUFBUiw4QkFBaUIsSUFBakI7O0FBRUEsa0JBQWtDLHFCQUFrQixLQUFsQixDQUFsQztBQUFBO0FBQUEsTUFBT0MsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFFQSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDM0IsUUFBSUMsTUFBTSxDQUFDQyxXQUFQLEdBQXFCLEdBQXpCLEVBQThCO0FBQzFCSCxNQUFBQSxZQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0g7QUFDSixHQUpEOztBQU1BLHdCQUFVLFlBQU07QUFDWixRQUFNSSxjQUFjLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixtQkFBdkIsQ0FBdkI7QUFFQUosSUFBQUEsTUFBTSxDQUFDSyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ04sZ0JBQWxDOztBQUVBLFFBQUlHLGNBQWMsQ0FBQ0ksWUFBZixHQUE4QkosY0FBYyxDQUFDSyxZQUFqRCxFQUErRDtBQUMzRFQsTUFBQUEsWUFBWSxDQUFDLElBQUQsQ0FBWjtBQUNIOztBQUVESSxJQUFBQSxjQUFjLENBQUNHLGdCQUFmLENBQWdDLFFBQWhDLEVBQTBDLFlBQU07QUFDNUMsVUFBSUgsY0FBYyxDQUFDSSxZQUFmLEdBQThCSixjQUFjLENBQUNNLFNBQTdDLEtBQTJETixjQUFjLENBQUNLLFlBQTlFLEVBQTRGO0FBQ3hGVCxRQUFBQSxZQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0gsT0FGRCxNQUVPO0FBQ0hBLFFBQUFBLFlBQVksQ0FBQyxJQUFELENBQVo7QUFDSDtBQUNKLEtBTkQ7QUFRQSxXQUFPLFlBQU07QUFDVEUsTUFBQUEsTUFBTSxDQUFDUyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ1YsZ0JBQXJDO0FBQ0gsS0FGRDtBQUdILEdBcEJELEVBb0JHLEVBcEJIO0FBc0JBLHNCQUNJO0FBQUssSUFBQSxTQUFTLEVBQUUsdUJBQXVCSixLQUFLLENBQUNlLFlBQU4sR0FBcUJmLEtBQUssQ0FBQ2UsWUFBM0IsR0FBMEMsRUFBakUsQ0FBaEI7QUFDSSxJQUFBLEtBQUssRUFBRWYsS0FBSyxDQUFDZ0IsWUFBTixHQUFxQmhCLEtBQUssQ0FBQ2dCLFlBQTNCLEdBQTBDO0FBRHJELEtBR0toQixLQUFLLENBQUNpQixVQUFOLGlCQUNHO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNLakIsS0FBSyxDQUFDaUIsVUFEWCxDQUpSLGVBU0k7QUFBSyxJQUFBLFNBQVMsRUFBRSxvQkFBb0JqQixLQUFLLENBQUNrQixTQUFOLEdBQWtCbEIsS0FBSyxDQUFDa0IsU0FBeEIsR0FBb0MsRUFBeEQsQ0FBaEI7QUFDSSxJQUFBLEtBQUssRUFBRWxCLEtBQUssQ0FBQ21CLFNBQU4sR0FBa0JuQixLQUFLLENBQUNtQixTQUF4QixHQUFvQztBQUQvQyxrQkFHSTtBQUFLLElBQUEsU0FBUyxFQUFFbEIsTUFBTSxLQUFLLElBQVgsR0FBa0IsWUFBbEIsR0FBaUM7QUFBakQsS0FDS0EsTUFBTSxLQUFLLElBQVgsZ0JBQWtCO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixJQUFsQixnQkFBd0QsNkJBQUMsZUFBRCxPQUQ3RCxFQUVLRCxLQUFLLENBQUNvQixRQUZYLENBSEosQ0FUSixFQWtCS3BCLEtBQUssQ0FBQ3FCLGFBQU4saUJBQ0c7QUFBSyxJQUFBLFNBQVMsRUFBRSw4QkFBOEJuQixTQUFTLEdBQUcsYUFBSCxHQUFtQixFQUExRDtBQUFoQixLQUNLRixLQUFLLENBQUNxQixhQURYLENBbkJSLENBREo7QUEwQkgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaWRlYmFyTWVudVByb3BzIHtcclxuICAgIC8qKlxyXG4gICAgICogU2hvdWxkIG1lbnUgaXRlbXMgaGF2ZSBhIEZsdWVudCBlZmZlY3QuIERlZmF1bHQ6IGB0cnVlYFxyXG4gICAgICovXHJcbiAgICBmbHVlbnQ/OiBib29sZWFuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFeHRlbmRzIHRoZSBjbGFzcyBuYW1lIGJ5IHRoZSBzaWRlYmFyLlxyXG4gICAgICovXHJcbiAgICBzaWRlYmFyQ2xhc3M/OiBzdHJpbmdcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGBzdHlsZWAgcHJvcCBieSB0aGUgc2lkZWJhci5cclxuICAgICAqL1xyXG4gICAgc2lkZWJhclN0eWxlPzogb2JqZWN0XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFeHRlbmRzIHRoZSBjbGFzcyBuYW1lIGJ5IHRoZSBtZW51LlxyXG4gICAgICovXHJcbiAgICBtZW51Q2xhc3M/OiBzdHJpbmdcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGBzdHlsZWAgcHJvcCBieSB0aGUgbWVudS5cclxuICAgICAqL1xyXG4gICAgbWVudVN0eWxlPzogb2JqZWN0XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb250ZW50IG9uIHRvcCBvZiB0aGUgbWVudS5cclxuICAgICAqL1xyXG4gICAgdG9wQ29udGVudD86IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udGVudCBmb3IgdGhlIGJvdHRvbSBwYXJ0IG9mIHRoZSBzaWRlYmFyLlxyXG4gICAgICovXHJcbiAgICBib3R0b21Db250ZW50PzogYW55XHJcblxyXG4gICAgY2hpbGRyZW4/OiBhbnlcclxufVxyXG5cclxuLyoqXHJcbiAqIFNpZGViYXIgZm9yIHRoZSBgR3JpZGAgY29tcG9uZW50LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZWJhck1lbnUocHJvcHM6IFNpZGViYXJNZW51UHJvcHMpIHtcclxuICAgIGNvbnN0IHsgZmx1ZW50ID0gdHJ1ZSB9ID0gcHJvcHNcclxuXHJcbiAgICBjb25zdCBbaGFzU2hhZG93LCBzZXRIYXNTaGFkb3ddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcblxyXG4gICAgY29uc3QgdXBkYXRlRGltZW5zaW9ucyA9ICgpID0+IHtcclxuICAgICAgICBpZiAod2luZG93LmlubmVySGVpZ2h0ID4gNTAwKSB7XHJcbiAgICAgICAgICAgIHNldEhhc1NoYWRvdyhmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBibHVlQXBwU2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmx1ZS1hcHAtc2lkZWJhclwiKSBhcyBIVE1MRWxlbWVudFxyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB1cGRhdGVEaW1lbnNpb25zKVxyXG5cclxuICAgICAgICBpZiAoYmx1ZUFwcFNpZGViYXIuc2Nyb2xsSGVpZ2h0ID4gYmx1ZUFwcFNpZGViYXIuY2xpZW50SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHNldEhhc1NoYWRvdyh0cnVlKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYmx1ZUFwcFNpZGViYXIuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChibHVlQXBwU2lkZWJhci5zY3JvbGxIZWlnaHQgLSBibHVlQXBwU2lkZWJhci5zY3JvbGxUb3AgPT09IGJsdWVBcHBTaWRlYmFyLmNsaWVudEhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgc2V0SGFzU2hhZG93KGZhbHNlKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0SGFzU2hhZG93KHRydWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB1cGRhdGVEaW1lbnNpb25zKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYmx1ZS1hcHAtc2lkZWJhciBcIiArIChwcm9wcy5zaWRlYmFyQ2xhc3MgPyBwcm9wcy5zaWRlYmFyQ2xhc3MgOiBcIlwiKX1cclxuICAgICAgICAgICAgc3R5bGU9e3Byb3BzLnNpZGViYXJTdHlsZSA/IHByb3BzLnNpZGViYXJTdHlsZSA6IHt9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge3Byb3BzLnRvcENvbnRlbnQgJiZcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmx1ZS1hcHAtc2lkZWJhci10b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMudG9wQ29udGVudH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJibHVlLWFwcC1tZW51IFwiICsgKHByb3BzLm1lbnVDbGFzcyA/IHByb3BzLm1lbnVDbGFzcyA6IFwiXCIpfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3Byb3BzLm1lbnVTdHlsZSA/IHByb3BzLm1lbnVTdHlsZSA6IHt9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Zmx1ZW50ID09PSB0cnVlID8gXCJmbHVlbnQtYnRuXCIgOiBcIlwifT5cclxuICAgICAgICAgICAgICAgICAgICB7Zmx1ZW50ID09PSB0cnVlID8gPGRpdiBjbGFzc05hbWU9XCJmbHVlbnQtYnRuLWJhbGxcIiAvPiA6IDxGcmFnbWVudCAvPn1cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7cHJvcHMuYm90dG9tQ29udGVudCAmJlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYmx1ZS1hcHAtc2lkZWJhci1ib3R0b20gXCIgKyAoaGFzU2hhZG93ID8gXCIgaGFzLXNoYWRvd1wiIDogXCJcIil9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5ib3R0b21Db250ZW50fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdfQ==