"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ActionMenuItem;

var _react = _interopRequireDefault(require("react"));

var _MenuItem = _interopRequireDefault(require("./MenuItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * @deprecated This is only an alias to MenuItem, please use MenuItem instead.
 * <span class="badge badge-warning">Deprecated</span> This is just an alias for <code>MenuItem</code>, so you should use that component instead.
 * If you need the older <code>ActionMenuItem</code>, make sure to the prop <code>useDeprecated</code>.<br/>
 * List Item and Link for the current Action Menu.
 */
function ActionMenuItem(props) {
  if (props.useDeprecated) {
    var _props = {};
    Object.keys(props).map(function (key) {
      if (key !== "navItemClassName" && key !== "icon" && key !== "label") {
        _props[key] = props[key];
      }
    });
    return /*#__PURE__*/_react.default.createElement("li", {
      className: "nav-item " + props.navItemClassName
    }, /*#__PURE__*/_react.default.createElement("a", _extends({}, _props, {
      href: props.href,
      className: "nav-link blue-app-actions-menu-item " + props.className
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: props.icon
    }), props.label && /*#__PURE__*/_react.default.createElement("span", {
      className: "blue-app-actions-label"
    }, props.icon && /*#__PURE__*/_react.default.createElement("span", null, "\xA0"), props.label)));
  } else {
    return /*#__PURE__*/_react.default.createElement(_MenuItem.default, props);
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FjdGlvbk1lbnVJdGVtLnRzeCJdLCJuYW1lcyI6WyJBY3Rpb25NZW51SXRlbSIsInByb3BzIiwidXNlRGVwcmVjYXRlZCIsIl9wcm9wcyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJuYXZJdGVtQ2xhc3NOYW1lIiwiaHJlZiIsImNsYXNzTmFtZSIsImljb24iLCJsYWJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7QUE2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsU0FBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBb0Q7QUFDL0QsTUFBSUEsS0FBSyxDQUFDQyxhQUFWLEVBQXlCO0FBQ3JCLFFBQUlDLE1BQU0sR0FBRyxFQUFiO0FBRUFDLElBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSixLQUFaLEVBQW1CSyxHQUFuQixDQUF1QixVQUFBQyxHQUFHLEVBQUk7QUFDMUIsVUFBSUEsR0FBRyxLQUFLLGtCQUFSLElBQThCQSxHQUFHLEtBQUssTUFBdEMsSUFBZ0RBLEdBQUcsS0FBSyxPQUE1RCxFQUFxRTtBQUNqRUosUUFBQUEsTUFBTSxDQUFDSSxHQUFELENBQU4sR0FBZU4sS0FBRCxDQUFrQ00sR0FBbEMsQ0FBZDtBQUNIO0FBQ0osS0FKRDtBQU1BLHdCQUNJO0FBQUksTUFBQSxTQUFTLEVBQUUsY0FBY04sS0FBSyxDQUFDTztBQUFuQyxvQkFDSSwrQ0FBT0wsTUFBUDtBQUFlLE1BQUEsSUFBSSxFQUFFRixLQUFLLENBQUNRLElBQTNCO0FBQWlDLE1BQUEsU0FBUyxFQUFFLHlDQUF5Q1IsS0FBSyxDQUFDUztBQUEzRixxQkFDSTtBQUFNLE1BQUEsU0FBUyxFQUFFVCxLQUFLLENBQUNVO0FBQXZCLE1BREosRUFFS1YsS0FBSyxDQUFDVyxLQUFOLGlCQUNHO0FBQU0sTUFBQSxTQUFTLEVBQUM7QUFBaEIsT0FDS1gsS0FBSyxDQUFDVSxJQUFOLGlCQUNHLGtEQUZSLEVBSUtWLEtBQUssQ0FBQ1csS0FKWCxDQUhSLENBREosQ0FESjtBQWVILEdBeEJELE1BeUJLO0FBQ0Qsd0JBQU8sNkJBQUMsaUJBQUQsRUFBY1gsS0FBZCxDQUFQO0FBQ0g7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIi4vTWVudUl0ZW1cIlxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb25NZW51SXRlbVByb3BzIHtcclxuICAgIC8qKlxyXG4gICAgICogRXh0ZW5kcyBjbGFzc05hbWUgb2YgdGhlIGAubmF2LWl0ZW1gIGVsZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIG5hdkl0ZW1DbGFzc05hbWU/OiBzdHJpbmdcclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4dGVuZHMgY2xhc3NOYW1lIG9mIHRoZSBgLm5hdi1saW5rYCBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmdcclxuXHJcbiAgICAvKipcclxuICAgICogVVJMLlxyXG4gICAgKi9cclxuICAgIGhyZWY/OiBzdHJpbmdcclxuXHJcbiAgICAvKipcclxuICAgICogb25DbGljayBFdmVudGhhbmRsZXIuXHJcbiAgICAqL1xyXG4gICAgb25DbGljaz86IChlPzogYW55KSA9PiB2b2lkXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjbGFzc05hbWUgZm9yIHRoZSBpY29uLlxyXG4gICAgICovXHJcbiAgICBpY29uPzogc3RyaW5nXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMYWJlbCBmb3IgdGhlIGxpbmsuXHJcbiAgICAgKi9cclxuICAgIGxhYmVsPzogYW55XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUb29sdGlwIG9uIGhvdmVyLlxyXG4gICAgICovXHJcbiAgICB0aXRsZT86IHN0cmluZ1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IGB0cnVlYCB0byB1c2UgdGhlIG9sZCBBY3Rpb25NZW51SXRlbS4gT3RoZXJ3aXNlIHRoaXMgY29tcG9uZW50IGlzIGp1c3QgYW4gYWxpYXMgdG8gTWVudUl0ZW0uXHJcbiAgICAgKi9cclxuICAgIHVzZURlcHJlY2F0ZWQ/OiBib29sZWFuXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgVGhpcyBpcyBvbmx5IGFuIGFsaWFzIHRvIE1lbnVJdGVtLCBwbGVhc2UgdXNlIE1lbnVJdGVtIGluc3RlYWQuXHJcbiAqIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2Utd2FybmluZ1wiPkRlcHJlY2F0ZWQ8L3NwYW4+IFRoaXMgaXMganVzdCBhbiBhbGlhcyBmb3IgPGNvZGU+TWVudUl0ZW08L2NvZGU+LCBzbyB5b3Ugc2hvdWxkIHVzZSB0aGF0IGNvbXBvbmVudCBpbnN0ZWFkLlxyXG4gKiBJZiB5b3UgbmVlZCB0aGUgb2xkZXIgPGNvZGU+QWN0aW9uTWVudUl0ZW08L2NvZGU+LCBtYWtlIHN1cmUgdG8gdGhlIHByb3AgPGNvZGU+dXNlRGVwcmVjYXRlZDwvY29kZT4uPGJyLz5cclxuICogTGlzdCBJdGVtIGFuZCBMaW5rIGZvciB0aGUgY3VycmVudCBBY3Rpb24gTWVudS5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjdGlvbk1lbnVJdGVtKHByb3BzOiBBY3Rpb25NZW51SXRlbVByb3BzKSB7XHJcbiAgICBpZiAocHJvcHMudXNlRGVwcmVjYXRlZCkge1xyXG4gICAgICAgIGxldCBfcHJvcHMgPSB7fSBhcyB7IFtrZXk6IHN0cmluZ106IGFueSB9XHJcblxyXG4gICAgICAgIE9iamVjdC5rZXlzKHByb3BzKS5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgICAgaWYgKGtleSAhPT0gXCJuYXZJdGVtQ2xhc3NOYW1lXCIgJiYga2V5ICE9PSBcImljb25cIiAmJiBrZXkgIT09IFwibGFiZWxcIikge1xyXG4gICAgICAgICAgICAgICAgX3Byb3BzW2tleV0gPSAocHJvcHMgYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfSlba2V5XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17XCJuYXYtaXRlbSBcIiArIHByb3BzLm5hdkl0ZW1DbGFzc05hbWV9PlxyXG4gICAgICAgICAgICAgICAgPGEgey4uLl9wcm9wc30gaHJlZj17cHJvcHMuaHJlZn0gY2xhc3NOYW1lPXtcIm5hdi1saW5rIGJsdWUtYXBwLWFjdGlvbnMtbWVudS1pdGVtIFwiICsgcHJvcHMuY2xhc3NOYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3Byb3BzLmljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmxhYmVsICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsdWUtYXBwLWFjdGlvbnMtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5pY29uICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Jm5ic3A7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiA8TWVudUl0ZW0gey4uLnByb3BzfSAvPlxyXG4gICAgfVxyXG59Il19