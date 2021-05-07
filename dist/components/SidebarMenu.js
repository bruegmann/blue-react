"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
 * Die Seitenleiste für das Grid.
 */
var SidebarMenu = /*#__PURE__*/function (_React$Component) {
  _inherits(SidebarMenu, _React$Component);

  var _super = _createSuper(SidebarMenu);

  function SidebarMenu(props) {
    var _this;

    _classCallCheck(this, SidebarMenu);

    _this = _super.call(this, props);
    _this.state = {
      hasShadow: false,
      height: window.innerHeight,
      width: window.innerWidth
    };
    _this.updateDimensions = _this.updateDimensions.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SidebarMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var blueAppSidebar = document.querySelector(".blue-app-sidebar");
      window.addEventListener("resize", this.updateDimensions);

      if (blueAppSidebar.scrollHeight > blueAppSidebar.clientHeight) {
        console.log("has scroll bar!");
        this.setState({
          hasShadow: true
        });
      }

      blueAppSidebar.addEventListener("scroll", function () {
        if (blueAppSidebar.scrollHeight - blueAppSidebar.scrollTop === blueAppSidebar.clientHeight) {
          _this2.setState({
            hasShadow: false
          });
        } else {
          _this2.setState({
            hasShadow: true
          });
        }
      });
    }
  }, {
    key: "updateDimensions",
    value: function updateDimensions() {
      if (window.innerHeight > 500) {
        this.setState({
          hasShadow: false
        });
      }

      this.setState({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "blue-app-sidebar " + (this.props.sidebarClass ? this.props.sidebarClass : ""),
        style: this.props.sidebarStyle ? this.props.sidebarStyle : {}
      }, this.props.topContent && /*#__PURE__*/_react.default.createElement("div", {
        className: "blue-app-sidebar-top"
      }, this.props.topContent), /*#__PURE__*/_react.default.createElement("div", {
        className: "blue-app-menu " + (this.props.menuClass ? this.props.menuClass : ""),
        style: this.props.menuStyle ? this.props.menuStyle : {}
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: this.props.fluent === true ? "fluent-btn" : ""
      }, this.props.fluent === true ? /*#__PURE__*/_react.default.createElement("div", {
        className: "fluent-btn-ball"
      }) : /*#__PURE__*/_react.default.createElement(_react.Fragment, null), this.props.children)), this.props.bottomContent && /*#__PURE__*/_react.default.createElement("div", {
        className: "blue-app-sidebar-bottom " + (this.state.hasShadow ? " has-shadow" : "")
      }, this.props.bottomContent));
    }
  }], [{
    key: "defaultProps",
    get: function get() {
      return {
        fluent: true
      };
    }
  }]);

  return SidebarMenu;
}(_react.default.Component);

SidebarMenu.propTypes = {
  /**
   * Should menu items have a Fluent effect. Default: `true`
   */
  fluent: _propTypes.default.bool,

  /**
   * Erweiterung der className-Property der Seitenleiste.
   */
  sidebarClass: _propTypes.default.string,

  /**
   * Setzt die style-Property der Seitenleiste.
   */
  sidebarStyle: _propTypes.default.object,

  /**
   * Erweiterung der className-Property des Menüs.
   */
  menuClass: _propTypes.default.string,

  /**
   * Setzt die style-Property des Menüs.
   */
  menuStyle: _propTypes.default.object,

  /**
   * Inhalte oberhalb des Sidebar-Menüs
   */
  topContent: _propTypes.default.any,

  /**
   * Inhalte für den Footer der Sidebar
   */
  bottomContent: _propTypes.default.any
};
var _default = SidebarMenu;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1NpZGViYXJNZW51LmpzIl0sIm5hbWVzIjpbIlNpZGViYXJNZW51IiwicHJvcHMiLCJzdGF0ZSIsImhhc1NoYWRvdyIsImhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwidXBkYXRlRGltZW5zaW9ucyIsImJpbmQiLCJibHVlQXBwU2lkZWJhciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJzY3JvbGxUb3AiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2lkZWJhckNsYXNzIiwic2lkZWJhclN0eWxlIiwidG9wQ29udGVudCIsIm1lbnVDbGFzcyIsIm1lbnVTdHlsZSIsImZsdWVudCIsImNoaWxkcmVuIiwiYm90dG9tQ29udGVudCIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsIm9iamVjdCIsImFueSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7SUFDTUEsVzs7Ozs7QUFDRix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLE1BQUFBLFNBQVMsRUFBRSxLQURGO0FBRVRDLE1BQUFBLE1BQU0sRUFBRUMsTUFBTSxDQUFDQyxXQUZOO0FBR1RDLE1BQUFBLEtBQUssRUFBRUYsTUFBTSxDQUFDRztBQUhMLEtBQWI7QUFLQSxVQUFLQyxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQkMsSUFBdEIsK0JBQXhCO0FBUGU7QUFRbEI7Ozs7V0FRRCw2QkFBb0I7QUFBQTs7QUFFaEIsVUFBTUMsY0FBYyxH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QUU7QUFETCxPQUFQO0FBR0g7Ozs7RUFmcUJHLGVBQU1DLFM7O0FBa0ZoQy9CLFdBQVcsQ0FBQ2dDLFNBQVosR0FBd0I7QUFDcEI7QUFDSjtBQUNBO0FBQ0lMLEVBQUFBLE1BQU0sRUFBRU0sbUJBQVVDLElBSkU7O0FBTXBCO0FBQ0o7QUFDQTtBQUNJWixFQUFBQSxZQUFZLEVBQUVXLG1CQUFVRSxNQVRKOztBQVdwQjtBQUNKO0FBQ0E7QUFDSVosRUFBQUEsWUFBWSxFQUFFVSxtQkFBVUcsTUFkSjs7QUFnQnBCO0FBQ0o7QUFDQTtBQUNJWCxFQUFBQSxTQUFTLEVBQUVRLG1CQUFVRSxNQW5CRDs7QUFxQnBCO0FBQ0o7QUFDQTtBQUNJVCxFQUFBQSxTQUFTLEVBQUVPLG1CQUFVRyxNQXhCRDs7QUEwQnBCO0FBQ0o7QUFDQTtBQUNJWixFQUFBQSxVQUFVLEVBQUVTLG1CQUFVSSxHQTdCRjs7QUErQnBCO0FBQ0o7QUFDQTtBQUNJUixFQUFBQSxhQUFhLEVBQUVJLG1CQUFVSTtBQWxDTCxDQUF4QjtlQXNDZXJDLFciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuLyoqXHJcbiAqIERpZSBTZWl0ZW5sZWlzdGUgZsO8ciBkYXMgR3JpZC5cclxuICovXHJcbmNsYXNzIFNpZGViYXJNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGhhc1NoYWRvdzogZmFsc2UsXHJcbiAgICAgICAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlRGltZW5zaW9ucyA9IHRoaXMudXBkYXRlRGltZW5zaW9ucy5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgZGVmYXVsdFByb3BzKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGZsdWVudDogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGJsdWVBcHBTaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ibHVlLWFwcC1zaWRlYmFyXCIpO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnVwZGF0ZURpbWVuc2lvbnMpXHJcblxyXG4gICAgICAgIGlmIChibHVlQXBwU2lkZWJhci5zY3JvbGxIZWlnaHQgPiBibHVlQXBwU2lkZWJhci5jbGllbnRIZWlnaHQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoYXMgc2Nyb2xsIGJhciFcIik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoYXNTaGFkb3c6IHRydWUgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJsdWVBcHBTaWRlYmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYmx1ZUFwcFNpZGViYXIuc2Nyb2xsSGVpZ2h0IC0gYmx1ZUFwcFNpZGViYXIuc2Nyb2xsVG9wID09PSBibHVlQXBwU2lkZWJhci5jbGllbnRIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoYXNTaGFkb3c6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhhc1NoYWRvdzogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVEaW1lbnNpb25zKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJIZWlnaHQgPiA1MDApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhhc1NoYWRvdzogZmFsc2UgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgICAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMudXBkYXRlRGltZW5zaW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImJsdWUtYXBwLXNpZGViYXIgXCIgKyAodGhpcy5wcm9wcy5zaWRlYmFyQ2xhc3MgPyB0aGlzLnByb3BzLnNpZGViYXJDbGFzcyA6IFwiXCIpfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuc2lkZWJhclN0eWxlID8gdGhpcy5wcm9wcy5zaWRlYmFyU3R5bGUgOiB7fX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMudG9wQ29udGVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmx1ZS1hcHAtc2lkZWJhci10b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMudG9wQ29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJibHVlLWFwcC1tZW51IFwiICsgKHRoaXMucHJvcHMubWVudUNsYXNzID8gdGhpcy5wcm9wcy5tZW51Q2xhc3MgOiBcIlwiKX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5tZW51U3R5bGUgPyB0aGlzLnByb3BzLm1lbnVTdHlsZSA6IHt9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmZsdWVudCA9PT0gdHJ1ZSA/IFwiZmx1ZW50LWJ0blwiIDogXCJcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmZsdWVudCA9PT0gdHJ1ZSA/IDxkaXYgY2xhc3NOYW1lPVwiZmx1ZW50LWJ0bi1iYWxsXCIgLz4gOiA8RnJhZ21lbnQgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYm90dG9tQ29udGVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImJsdWUtYXBwLXNpZGViYXItYm90dG9tIFwiICsgKHRoaXMuc3RhdGUuaGFzU2hhZG93ID8gXCIgaGFzLXNoYWRvd1wiIDogXCJcIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5ib3R0b21Db250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5TaWRlYmFyTWVudS5wcm9wVHlwZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIFNob3VsZCBtZW51IGl0ZW1zIGhhdmUgYSBGbHVlbnQgZWZmZWN0LiBEZWZhdWx0OiBgdHJ1ZWBcclxuICAgICAqL1xyXG4gICAgZmx1ZW50OiBQcm9wVHlwZXMuYm9vbCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEVyd2VpdGVydW5nIGRlciBjbGFzc05hbWUtUHJvcGVydHkgZGVyIFNlaXRlbmxlaXN0ZS5cclxuICAgICAqL1xyXG4gICAgc2lkZWJhckNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0enQgZGllIHN0eWxlLVByb3BlcnR5IGRlciBTZWl0ZW5sZWlzdGUuXHJcbiAgICAgKi9cclxuICAgIHNpZGViYXJTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEVyd2VpdGVydW5nIGRlciBjbGFzc05hbWUtUHJvcGVydHkgZGVzIE1lbsO8cy5cclxuICAgICAqL1xyXG4gICAgbWVudUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0enQgZGllIHN0eWxlLVByb3BlcnR5IGRlcyBNZW7DvHMuXHJcbiAgICAgKi9cclxuICAgIG1lbnVTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaGFsdGUgb2JlcmhhbGIgZGVzIFNpZGViYXItTWVuw7xzXHJcbiAgICAgKi9cclxuICAgIHRvcENvbnRlbnQ6IFByb3BUeXBlcy5hbnksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbmhhbHRlIGbDvHIgZGVuIEZvb3RlciBkZXIgU2lkZWJhclxyXG4gICAgICovXHJcbiAgICBib3R0b21Db250ZW50OiBQcm9wVHlwZXMuYW55XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhck1lbnU7Il19