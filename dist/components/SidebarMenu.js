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