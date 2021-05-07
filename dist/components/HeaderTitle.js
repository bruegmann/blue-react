"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Utilities = _interopRequireDefault(require("./Utilities"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
 * Der Titel-Bereich in der Kopf-Leiste.
 * Anhand dessen wird auch der Dokumenten-Titel gesetzt (was in der Browser Titelzeile gezeigt wird).
 */
var HeaderTitle = /*#__PURE__*/function (_React$Component) {
  _inherits(HeaderTitle, _React$Component);

  var _super = _createSuper(HeaderTitle);

  function HeaderTitle() {
    var _this;

    _classCallCheck(this, HeaderTitle);

    _this = _super.call(this);
    _this.uniqueId = "HeaderTitle-" + _Utilities.default.guid();
    return _this;
  }

  _createClass(HeaderTitle, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setDocumentTitle();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.children !== this.props.children) {
        this.setDocumentTitle();
      }
    }
  }, {
    key: "setDocumentTitle",
    value: function setDocumentTitle() {
      if (window.blueGridRef && window.blueGridRef.props && window.blueGridRef.props.disableTitleSet === false) {
        var element = document.querySelector("#".concat(this.uniqueId, " .blue-app-header-logo-title-labels"));

        if (element && element.innerText) {
          document.querySelector("title").innerText = element.innerText;
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("h3", {
        id: this.uniqueId,
        className: "blue-app-header-logo" + (this.props.className ? " ".concat(this.props.className) : "") + (this.props.sidebar ? " sidebar" : "")
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "blue-app-header-logo-title"
      }, this.props.logo ? /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("a", {
        href: "#"
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: this.props.logo,
        className: "blue-app-header-logo-image"
      })), "\xA0") : "", /*#__PURE__*/_react.default.createElement("span", {
        className: "blue-app-header-logo-title-labels " + (this.props.keepAppTitle ? "keep" : "")
      }, this.props.appTitle ? /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("a", {
        href: "#"
      }, this.props.appTitle), " ", this.props.children ? "/" : "", "\xA0") : "", this.props.children)));
    }
  }], [{
    key: "defaultProps",
    get: function get() {
      return {
        keepAppTitle: false
      };
    }
  }]);

  return HeaderTitle;
}(_react.default.Component);

HeaderTitle.propTypes = {
  /**
   * Kann ein Bild sein. Wird im src-Attribute implementiert.
   */
  logo: _propTypes.default.string,

  /**
   * Der Text, der neben dem Logo steht.
   */
  appTitle: _propTypes.default.string,

  /**
   * Deaktiviert, dass der App-Titel bei bestimmer Bildschirmgröße ausgeblendet wird.
   */
  keepAppTitle: _propTypes.default.bool,

  /**
   * Extends `className` from parent element.
   */
  className: _propTypes.default.string,

  /**
   * Is the component used on the sidebar?
   */
  sidebar: _propTypes.default.bool
};
var _default = HeaderTitle;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0hlYWRlclRpdGxlLmpzIl0sIm5hbWVzIjpbIkhlYWRlclRpdGxlIiwidW5pcXVlSWQiLCJVdGlsaXRpZXMiLCJndWlkIiwic2V0RG9jdW1lbnRUaXRsZSIsInByZXZQcm9wcyIsImNoaWxkcmVuIiwicHJvcHMiLCJ3aW5kb3ciLCJibHVlR3JpZFJlZiIsImRpc2FibGVUaXRsZVNldCIsImVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lclRleHQiLCJjbGFzc05hbWUiLCJzaWRlYmFyIiwibG9nbyIsImtlZXBBcHBUaXRsZSIsImFwcFRpdGxlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7SUFDTUEsVzs7Ozs7QUFPRix5QkFBYztBQUFBOztBQUFBOztBQUNWO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQixpQkFBaUJDLG1CQUFVQyxJQUFWLEVBQWpDO0FBRlU7QUFHYjs7OztXQUVELDZCQUFvQjtBQUNoQixXQUFLQyxnQkFBTDtBQUNIOzs7V0FFRCw0QkFBbUJDLFNBQW5CLEVBQThCO0FBQzFCLFVBQUlBLFNBQVMsQ0FBQ0MsUUFBVixLQUF1QixLQUFLQyxLQUFMLENBQVdELFFBQXRDLEVBQWdEO0FBQzVDLGFBQUtGLGdCQUFMO0FBQ0g7QUFDSjs7O1dBRUQsNEJBQW1CO0FBQ2YsVUFBSUksTUFBTSxDQUFDQyxXQUFQLElBQXNCRCxNQUFNLENBQUNDLFdBQVAsQ0FBbUJGLEtBQXpDLElBQWtEQyxNQUFNLENBQUNDLFdBQVAsQ0FBbUJGLEtBQW5CLENBQXlCRyxlQUF6QixLQUE2QyxLQUFuRyxFQUEwRztBQUN0RyxZQUFNQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxZQUEyQixLQUFLWixRQUFoQyx5Q0FBaEI7O0FBQ0EsWUFBSVUsT0FBTyxJQUFJQSxPQUFPLENBQUNHLFNBQXZCLEVBQWtDO0FBQzlCRixVQUFBQSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsRUFBZ0NDLFNBQWhDLEdBQTRDSCxPQUFPLENBQUNHLFNBQXBEO0FBQ0g7QUFDSjtBQUNKOzs7V0FFRCxrQkFBUztBQUNMLDBCQUNJO0FBQUksUUFBQSxFQUFFLEVBQUUsS0FBS2IsUUFBYjtBQUF1QixRQUFBLFNBQVMsRUFBRSwwQkFBMEIsS0FBS00sS0FBTCxDQUFXUSxTQUFYLGNBQTJCLEtBQUtSLEtBQUwsQ0FBV1EsU0FBdEMsSUFBb0QsRUFBOUUsS0FBcUYsS0FBS1IsS0FBTCxDQUFXUyxPQUFYLEdBQXFCLFVBQXJCLEdBQWtDLEVBQXZIO0FBQWxDLHNCQUNJO0FBQU0sUUFBQSxTQUFTLEVBQUM7QUFBaEIsU0FDSyxLQUFLVCxLQUFMLENBQVdVLElBQVgsZ0JBQWtCLHdEQUFNO0FBQUcsUUFBQSxJQUFJLEVBQUM7QUFBUixzQkFBWTtBQUFLLFFBQUEsR0FBRyxFQUFFLEtBQUtWLEtBQUwsQ0FBV1UsSUFBckI7QUFBMkIsUUFBQSxTQUFTLEVBQUM7QUFBckMsUUFBWixDQUFOLFNBQWxCLEdBQTRILEVBRGpJLGVBRUk7QUFBTSxRQUFBLFNBQVMsRUFBRSx3Q0FBd0MsS0FBS1YsS0FBTCxDQUFXVyxZQUFYLEdBQTBCLE1BQTFCLEdBQW1DLEVBQTNFO0FBQWpCLFNBQ0ssS0FBS1gsS0FBTCxDQUFXWSxRQUFYLGdCQUFzQix3REFBTTtBQUFHLFFBQUEsSUFBSSxFQUFDO0FBQVIsU0FBYSxLQUFLWixLQUFMLENBQVdZLFFBQXhCLENBQU4sT0FBOEMsS0FBS1osS0FBTCxDQUFXRCxRQUFYLEdBQXNCLEdBQXRCLEdBQTRCLEVBQTFFLFNBQXRCLEdBQW9ILEVBRHpILEVBRUssS0FBS0MsS0FBTCxDQUFXRCxRQUZoQixDQUZKLENBREosQ0FESjtBQVdIOzs7U0ExQ0QsZUFBMEI7QUFDdEIsYUFBTztBQUNIWSxRQUFBQSxZQUFZLEVBQUU7QUFEWCxPQUFQO0FBR0g7Ozs7RUFMcUJFLGVBQU1DLFM7O0FBOENoQ3JCLFdBQVcsQ0FBQ3NCLFNBQVosR0FBd0I7QUFDcEI7QUFDSjtBQUNBO0FBQ0lMLEVBQUFBLElBQUksRUFBRU0sbUJBQVVDLE1BSkk7O0FBTXBCO0FBQ0o7QUFDQTtBQUNJTCxFQUFBQSxRQUFRLEVBQUVJLG1CQUFVQyxNQVRBOztBQVdwQjtBQUNKO0FBQ0E7QUFDSU4sRUFBQUEsWUFBWSxFQUFFSyxtQkFBVUUsSUFkSjs7QUFnQnBCO0FBQ0o7QUFDQTtBQUNJVixFQUFBQSxTQUFTLEVBQUVRLG1CQUFVQyxNQW5CRDs7QUFxQnBCO0FBQ0o7QUFDQTtBQUNJUixFQUFBQSxPQUFPLEVBQUVPLG1CQUFVRTtBQXhCQyxDQUF4QjtlQTJCZXpCLFciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmltcG9ydCBVdGlsaXRpZXMgZnJvbSBcIi4vVXRpbGl0aWVzXCI7XHJcblxyXG4vKipcclxuICogRGVyIFRpdGVsLUJlcmVpY2ggaW4gZGVyIEtvcGYtTGVpc3RlLlxyXG4gKiBBbmhhbmQgZGVzc2VuIHdpcmQgYXVjaCBkZXIgRG9rdW1lbnRlbi1UaXRlbCBnZXNldHp0ICh3YXMgaW4gZGVyIEJyb3dzZXIgVGl0ZWx6ZWlsZSBnZXplaWd0IHdpcmQpLlxyXG4gKi9cclxuY2xhc3MgSGVhZGVyVGl0bGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIGdldCBkZWZhdWx0UHJvcHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAga2VlcEFwcFRpdGxlOiBmYWxzZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnVuaXF1ZUlkID0gXCJIZWFkZXJUaXRsZS1cIiArIFV0aWxpdGllcy5ndWlkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXREb2N1bWVudFRpdGxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgICAgIGlmIChwcmV2UHJvcHMuY2hpbGRyZW4gIT09IHRoaXMucHJvcHMuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREb2N1bWVudFRpdGxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldERvY3VtZW50VGl0bGUoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5ibHVlR3JpZFJlZiAmJiB3aW5kb3cuYmx1ZUdyaWRSZWYucHJvcHMgJiYgd2luZG93LmJsdWVHcmlkUmVmLnByb3BzLmRpc2FibGVUaXRsZVNldCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMudW5pcXVlSWR9IC5ibHVlLWFwcC1oZWFkZXItbG9nby10aXRsZS1sYWJlbHNgKTtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5pbm5lclRleHQpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0aXRsZVwiKS5pbm5lclRleHQgPSBlbGVtZW50LmlubmVyVGV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGgzIGlkPXt0aGlzLnVuaXF1ZUlkfSBjbGFzc05hbWU9e1wiYmx1ZS1hcHAtaGVhZGVyLWxvZ29cIiArICh0aGlzLnByb3BzLmNsYXNzTmFtZSA/IGAgJHt0aGlzLnByb3BzLmNsYXNzTmFtZX1gIDogXCJcIikgKyAodGhpcy5wcm9wcy5zaWRlYmFyID8gXCIgc2lkZWJhclwiIDogXCJcIil9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmx1ZS1hcHAtaGVhZGVyLWxvZ28tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5sb2dvID8gPHNwYW4+PGEgaHJlZj1cIiNcIj48aW1nIHNyYz17dGhpcy5wcm9wcy5sb2dvfSBjbGFzc05hbWU9XCJibHVlLWFwcC1oZWFkZXItbG9nby1pbWFnZVwiIC8+PC9hPiZuYnNwOzwvc3Bhbj4gOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJibHVlLWFwcC1oZWFkZXItbG9nby10aXRsZS1sYWJlbHMgXCIgKyAodGhpcy5wcm9wcy5rZWVwQXBwVGl0bGUgPyBcImtlZXBcIiA6IFwiXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYXBwVGl0bGUgPyA8c3Bhbj48YSBocmVmPVwiI1wiPnt0aGlzLnByb3BzLmFwcFRpdGxlfTwvYT4geyh0aGlzLnByb3BzLmNoaWxkcmVuID8gXCIvXCIgOiBcIlwiKX0mbmJzcDs8L3NwYW4+IDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkhlYWRlclRpdGxlLnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogS2FubiBlaW4gQmlsZCBzZWluLiBXaXJkIGltIHNyYy1BdHRyaWJ1dGUgaW1wbGVtZW50aWVydC5cclxuICAgICAqL1xyXG4gICAgbG9nbzogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlciBUZXh0LCBkZXIgbmViZW4gZGVtIExvZ28gc3RlaHQuXHJcbiAgICAgKi9cclxuICAgIGFwcFRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVha3RpdmllcnQsIGRhc3MgZGVyIEFwcC1UaXRlbCBiZWkgYmVzdGltbWVyIEJpbGRzY2hpcm1ncsO2w59lIGF1c2dlYmxlbmRldCB3aXJkLlxyXG4gICAgICovXHJcbiAgICBrZWVwQXBwVGl0bGU6IFByb3BUeXBlcy5ib29sLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXh0ZW5kcyBgY2xhc3NOYW1lYCBmcm9tIHBhcmVudCBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyB0aGUgY29tcG9uZW50IHVzZWQgb24gdGhlIHNpZGViYXI/XHJcbiAgICAgKi9cclxuICAgIHNpZGViYXI6IFByb3BUeXBlcy5ib29sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJUaXRsZTsiXX0=