"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ActionMenuSwitch;

var _react = _interopRequireDefault(require("react"));

var _Switch = _interopRequireDefault(require("./Switch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * <span class="badge badge-secondary">Deprecated</span> When using <strong>Actions</strong>, please use <strong>SwitchMenuItem</strong> instead.<br>
 * Switch for the Action Menu.
 */
function ActionMenuSwitch(props) {
  return /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "javascript:void(0)",
    className: "nav-link blue-app-actions-menu-item",
    onClick: function onClick() {
      if (props.onChange) props.onChange();
    }
  }, /*#__PURE__*/_react.default.createElement(_Switch.default, _extends({}, props, {
    elementType: "span"
  })), props.label && /*#__PURE__*/_react.default.createElement("span", {
    className: "blue-app-actions-label"
  }, "\xA0", props.label)));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FjdGlvbk1lbnVTd2l0Y2gudHN4Il0sIm5hbWVzIjpbIkFjdGlvbk1lbnVTd2l0Y2giLCJwcm9wcyIsIm9uQ2hhbmdlIiwibGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDZSxTQUFTQSxnQkFBVCxDQUEwQkMsS0FBMUIsRUFBd0Q7QUFDbkUsc0JBQ0k7QUFBSSxJQUFBLFNBQVMsRUFBQztBQUFkLGtCQUNJO0FBQ0ksSUFBQSxJQUFJLEVBQUMsb0JBRFQ7QUFFSSxJQUFBLFNBQVMsRUFBQyxxQ0FGZDtBQUdJLElBQUEsT0FBTyxFQUFFLG1CQUFNO0FBQ1gsVUFBSUEsS0FBSyxDQUFDQyxRQUFWLEVBQW9CRCxLQUFLLENBQUNDLFFBQU47QUFDdkI7QUFMTCxrQkFPSSw2QkFBQyxlQUFELGVBQ1FELEtBRFI7QUFFSSxJQUFBLFdBQVcsRUFBQztBQUZoQixLQVBKLEVBWUtBLEtBQUssQ0FBQ0UsS0FBTixpQkFDRztBQUFNLElBQUEsU0FBUyxFQUFDO0FBQWhCLGFBQWdERixLQUFLLENBQUNFLEtBQXRELENBYlIsQ0FESixDQURKO0FBb0JIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBTd2l0Y2ggZnJvbSBcIi4vU3dpdGNoXCJcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uTWVudVN3aXRjaFByb3BzIHtcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZ1xyXG4gICAgY2hlY2tlZD86IGJvb2xlYW5cclxuICAgIG9uQ2hhbmdlPzogKCkgPT4gdm9pZFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQmVzY2hyaWZ0dW5nIGRlcyBDb250cm9sc1xyXG4gICAgICovXHJcbiAgICBsYWJlbD86IGFueVxyXG59XHJcblxyXG4vKipcclxuICogPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1zZWNvbmRhcnlcIj5EZXByZWNhdGVkPC9zcGFuPiBXaGVuIHVzaW5nIDxzdHJvbmc+QWN0aW9uczwvc3Ryb25nPiwgcGxlYXNlIHVzZSA8c3Ryb25nPlN3aXRjaE1lbnVJdGVtPC9zdHJvbmc+IGluc3RlYWQuPGJyPlxyXG4gKiBTd2l0Y2ggZm9yIHRoZSBBY3Rpb24gTWVudS5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjdGlvbk1lbnVTd2l0Y2gocHJvcHM6IEFjdGlvbk1lbnVTd2l0Y2hQcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmsgYmx1ZS1hcHAtYWN0aW9ucy1tZW51LWl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wcy5vbkNoYW5nZSkgcHJvcHMub25DaGFuZ2UoKVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZT1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICB7cHJvcHMubGFiZWwgJiZcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibHVlLWFwcC1hY3Rpb25zLWxhYmVsXCI+Jm5ic3A7e3Byb3BzLmxhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICApXHJcbn0iXX0=