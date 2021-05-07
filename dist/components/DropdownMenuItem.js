"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Utilities = _interopRequireDefault(require("./Utilities.js"));

var _Caret = _interopRequireDefault(require("./Caret.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Dropdown-Button und Link für die Sidebar.
 */
var DropdownMenuItem = /*#__PURE__*/function (_React$Component) {
  _inherits(DropdownMenuItem, _React$Component);

  var _super = _createSuper(DropdownMenuItem);

  function DropdownMenuItem() {
    var _this;

    _classCallCheck(this, DropdownMenuItem);

    _this = _super.call(this);
    _this.state = {
      active: false,
      showDropdown: false
    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DropdownMenuItem, [{
    key: "handleClick",
    value: function handleClick() {
      if (this.props.children) {
        this.setState({
          showDropdown: !this.state.showDropdown
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var icon;

      if (typeof this.props.icon === "string") {
        // is className
        icon = /*#__PURE__*/_react.default.createElement("span", {
          className: this.props.icon + (this.props.children ? " blue-app-sidebar-dropdown-icon" : "")
        });
      } else {
        // is element / component
        icon = this.props.icon;
      }

      var id = {
        id: "blue-action-menu-item-" + _Utilities.default.guid()
      };
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
        className: "btn-group w-100"
      }, /*#__PURE__*/_react.default.createElement("a", _extends({}, id, {
        className: "blue-app-toggle-page blue-app-sidebar-btn btn pr-0 " + (this.state.active ? "active" : ""),
        href: this.props.to
      }), icon, /*#__PURE__*/_react.default.createElement("span", {
        className: "blue-app-sidebar-label"
      }, this.props.label)), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: "btn blue-app-sidebar-btn w-auto pl-0",
        onClick: this.handleClick
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "sr-only"
      }, "Toggle Dropdown"), /*#__PURE__*/_react.default.createElement(_Caret.default, {
        open: this.state.showDropdown,
        mirrored: true,
        className: "w-auto pl-5 mt-2"
      }))), this.state.showDropdown && /*#__PURE__*/_react.default.createElement("div", {
        className: "blue-app-sidebar-dropdown"
      }, this.props.children));
    }
  }]);

  return DropdownMenuItem;
}(_react.default.Component);

DropdownMenuItem.propTypes = {
  /**
   * Beschriftung des Links
   */
  label: _propTypes.default.any,

  /**
  * Soll Item als "aktiv" markiert werden? Ist die to-Property gesetzt, wird Item automatisch als "aktiv" markiert, wenn entsprechende Seite aktiv ist.
  */
  isActive: _propTypes.default.bool,

  /**
  * Setzt to-Property der NavLink-Komponente aus React Router.
  */
  to: _propTypes.default.string,

  /**
   * Werden in einem Dropdown-Menü angezeigt.
   */
  children: _propTypes.default.any,

  /**
   * Klasse eines Icons oder Element, z.B. von blueicon-colored.
   */
  icon: _propTypes.default.any
};
var _default = DropdownMenuItem;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0Ryb3Bkb3duTWVudUl0ZW0uanMiXSwibmFtZXMiOlsiRHJvcGRvd25NZW51SXRlbSIsInN0YXRlIiwiYWN0aXZlIiwic2hvd0Ryb3Bkb3duIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwicHJvcHMiLCJjaGlsZHJlbiIsInNldFN0YXRlIiwiaWNvbiIsImlkIiwiVXRpbGl0aWVzIiwiZ3VpZCIsInRvIiwibGFiZWwiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFueSIsImlzQWN0aXZlIiwiYm9vbCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0lBQ01BLGdCOzs7OztBQUNGLDhCQUFjO0FBQUE7O0FBQUE7O0FBQ1Y7QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsTUFBQUEsTUFBTSxFQUFFLEtBREM7QUFFVEMsTUFBQUEsWUFBWSxFQUFFO0FBRkwsS0FBYjtBQUtBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsK0JBQW5CO0FBUlU7QUFVYjs7OztXQUVELHVCQUFjO0FBQ1YsVUFBSSxLQUFLQyxLQUFMLENBQVdDLFFBQWYsRUFBeUI7QUFDckIsYUFBS0MsUUFBTCxDQUFjO0FBQUVMLFVBQUFBLFlBQVksRUFBRSxDQUFDLEtBQUtGLEtBQUwsQ0FBV0U7QUFBNUIsU0FBZDtBQUNIO0FBQ0o7OztXQUVELGtCQUFTO0FBRUwsVUFBSU0sSUFBSjs7QUFFQSxVQUFJLE9BQVEsS0FBS0gsS0FBTCxDQUFXRyxJQUFuQixLQUE2QixRQUFqQyxFQUEyQztBQUN2QztBQUNBQSxRQUFBQSxJQUFJLGdCQUFHO0FBQU0sVUFBQSxTQUFTLEVBQUUsS0FBS0gsS0FBTCxDQUFXRyxJQUFYLElBQW1CLEtBQUtILEtBQUwsQ0FBV0MsUUFBWCxHQUFzQixpQ0FBdEIsR0FBMEQsRUFBN0U7QUFBakIsVUFBUDtBQUNILE9BSEQsTUFJSztBQUNEO0FBQ0FFLFFBQUFBLElBQUksR0FBRyxLQUFLSCxLQUFMLENBQVdHLElBQWxCO0FBQ0g7O0FBRUQsVUFBSUMsRUFBRSxHQUFHO0FBQ0xBLFFBQUFBLEVBQUUsRUFBRSwyQkFBMkJDLG1CQUFVQyxJQUFWO0FBRDFCLE9BQVQ7QUFHQSwwQkFDSSx1REFDSTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsc0JBRUksK0NBQ1FGLEVBRFI7QUFFSSxRQUFBLFNBQVMsRUFBRSx5REFBeUQsS0FBS1QsS0FBTCxDQUFXQyxNQUFYLEdBQW9CLFFBQXBCLEdBQStCLEVBQXhGLENBRmY7QUFHSSxRQUFBLElBQUksRUFBRSxLQUFLSSxLQUFMLENBQVdPO0FBSHJCLFVBS0tKLElBTEwsZUFNSTtBQUFNLFFBQUEsU0FBUyxFQUFDO0FBQWhCLFNBQTBDLEtBQUtILEtBQUwsQ0FBV1EsS0FBckQsQ0FOSixDQUZKLGVBV0k7QUFDSSxRQUFBLElBQUksRUFBQyxRQURUO0FBRUksUUFBQSxTQUFTLEVBQUMsc0NBRmQ7QUFHSSxRQUFBLE9BQU8sRUFBRSxLQUFLVjtBQUhsQixzQkFLSTtBQUFNLFFBQUEsU0FBUyxFQUFDO0FBQWhCLDJCQUxKLGVBTUksNkJBQUMsY0FBRDtBQUNJLFFBQUEsSUFBSSxFQUFFLEtBQUtILEtBQUwsQ0FBV0UsWUFEckI7QUFFSSxRQUFBLFFBQVEsTUFGWjtBQUdJLFFBQUEsU0FBUyxFQUFDO0FBSGQsUUFOSixDQVhKLENBREosRUEyQkssS0FBS0YsS0FBTCxDQUFXRSxZQUFYLGlCQUNHO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixTQUNLLEtBQUtHLEtBQUwsQ0FBV0MsUUFEaEIsQ0E1QlIsQ0FESjtBQW9DSDs7OztFQXZFMEJRLGVBQU1DLFM7O0FBMEVyQ2hCLGdCQUFnQixDQUFDaUIsU0FBakIsR0FBNkI7QUFFekI7QUFDSjtBQUNBO0FBQ0lILEVBQUFBLEtBQUssRUFBRUksbUJBQVVDLEdBTFE7O0FBT3pCO0FBQ0o7QUFDQTtBQUNJQyxFQUFBQSxRQUFRLEVBQUVGLG1CQUFVRyxJQVZLOztBQVl6QjtBQUNKO0FBQ0E7QUFDSVIsRUFBQUEsRUFBRSxFQUFFSyxtQkFBVUksTUFmVzs7QUFpQnpCO0FBQ0o7QUFDQTtBQUNJZixFQUFBQSxRQUFRLEVBQUVXLG1CQUFVQyxHQXBCSzs7QUFzQnpCO0FBQ0o7QUFDQTtBQUNJVixFQUFBQSxJQUFJLEVBQUVTLG1CQUFVQztBQXpCUyxDQUE3QjtlQTRCZW5CLGdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBVdGlsaXRpZXMgZnJvbSBcIi4vVXRpbGl0aWVzLmpzXCI7XHJcbmltcG9ydCBDYXJldCBmcm9tIFwiLi9DYXJldC5qc1wiO1xyXG5cclxuLyoqXHJcbiAqIERyb3Bkb3duLUJ1dHRvbiB1bmQgTGluayBmw7xyIGRpZSBTaWRlYmFyLlxyXG4gKi9cclxuY2xhc3MgRHJvcGRvd25NZW51SXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93RHJvcGRvd246IGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbGljaygpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0Ryb3Bkb3duOiAhdGhpcy5zdGF0ZS5zaG93RHJvcGRvd24gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgbGV0IGljb247XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgKHRoaXMucHJvcHMuaWNvbikgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgLy8gaXMgY2xhc3NOYW1lXHJcbiAgICAgICAgICAgIGljb24gPSA8c3BhbiBjbGFzc05hbWU9e3RoaXMucHJvcHMuaWNvbiArICh0aGlzLnByb3BzLmNoaWxkcmVuID8gXCIgYmx1ZS1hcHAtc2lkZWJhci1kcm9wZG93bi1pY29uXCIgOiBcIlwiKX0gLz47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBpcyBlbGVtZW50IC8gY29tcG9uZW50XHJcbiAgICAgICAgICAgIGljb24gPSB0aGlzLnByb3BzLmljb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaWQgPSB7XHJcbiAgICAgICAgICAgIGlkOiBcImJsdWUtYWN0aW9uLW1lbnUtaXRlbS1cIiArIFV0aWxpdGllcy5ndWlkKClcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cCB3LTEwMFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJibHVlLWFwcC10b2dnbGUtcGFnZSBibHVlLWFwcC1zaWRlYmFyLWJ0biBidG4gcHItMCBcIiArICh0aGlzLnN0YXRlLmFjdGl2ZSA/IFwiYWN0aXZlXCIgOiBcIlwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17dGhpcy5wcm9wcy50b31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibHVlLWFwcC1zaWRlYmFyLWxhYmVsXCI+e3RoaXMucHJvcHMubGFiZWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJsdWUtYXBwLXNpZGViYXItYnRuIHctYXV0byBwbC0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Ub2dnbGUgRHJvcGRvd248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5zaG93RHJvcGRvd259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaXJyb3JlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1hdXRvIHBsLTUgbXQtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd0Ryb3Bkb3duICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibHVlLWFwcC1zaWRlYmFyLWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5Ecm9wZG93bk1lbnVJdGVtLnByb3BUeXBlcyA9IHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEJlc2NocmlmdHVuZyBkZXMgTGlua3NcclxuICAgICAqL1xyXG4gICAgbGFiZWw6IFByb3BUeXBlcy5hbnksXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFNvbGwgSXRlbSBhbHMgXCJha3RpdlwiIG1hcmtpZXJ0IHdlcmRlbj8gSXN0IGRpZSB0by1Qcm9wZXJ0eSBnZXNldHp0LCB3aXJkIEl0ZW0gYXV0b21hdGlzY2ggYWxzIFwiYWt0aXZcIiBtYXJraWVydCwgd2VubiBlbnRzcHJlY2hlbmRlIFNlaXRlIGFrdGl2IGlzdC5cclxuICAgICovXHJcbiAgICBpc0FjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFNldHp0IHRvLVByb3BlcnR5IGRlciBOYXZMaW5rLUtvbXBvbmVudGUgYXVzIFJlYWN0IFJvdXRlci5cclxuICAgICovXHJcbiAgICB0bzogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFdlcmRlbiBpbiBlaW5lbSBEcm9wZG93bi1NZW7DvCBhbmdlemVpZ3QuXHJcbiAgICAgKi9cclxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogS2xhc3NlIGVpbmVzIEljb25zIG9kZXIgRWxlbWVudCwgei5CLiB2b24gYmx1ZWljb24tY29sb3JlZC5cclxuICAgICAqL1xyXG4gICAgaWNvbjogUHJvcFR5cGVzLmFueVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bk1lbnVJdGVtOyJdfQ==