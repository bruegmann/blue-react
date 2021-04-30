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