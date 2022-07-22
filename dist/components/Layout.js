"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Utilities = _interopRequireDefault(require("./Utilities"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

window.toggleSidebarEvent = new CustomEvent("toggleSidebar");

/**
 * The main component. As soon this component is mounted, it is globally available under `window.blueLayoutRef`.
 * You can also append your own event listeners.
 *
 * Allowed events:
 *
 * * **componentDidUpdate** - Component was updated.
 *   Example: `window.blueLayoutRef.addEventListener("componentDidUpdate", (prevProps, prevState) => { })`
 * * **pageDidShowAgain** - Page appeared again with the same old state. In the callback function you can reinitialize things.
 *   Example: `window.blueLayoutRef.addEventListener("pageDidShowAgain", "home", (prevProps, prevState) => { })`
 * * **pageDidHide** - This page disappeared and another page appears instead.
 *   Example: `window.blueLayoutRef.addEventListener("pageDidHide", "home", (prevProps, prevState) => { })`
 *
 * Method to add event listeners:
 * * `window.blueLayoutRef.`**addEventListener**`(eventName: string, param2: any, param3: any, listenerId?: string)`
 *
 * Methods to remove event listeners:
 * * `window.blueLayoutRef.`**removeEventListener**`(eventName: string, listenerId: string)`
 * * `window.blueLayoutRef.`**removeDuplicatedEventListeners**`()` - Will automatically be called when running `addEventListener`
 */
var Layout = /*#__PURE__*/function (_Component) {
  _inherits(Layout, _Component);

  var _super = _createSuper(Layout);

  function Layout(props) {
    var _this;

    _classCallCheck(this, Layout);

    _this = _super.call(this, props);
    window.blueLayoutRef = _assertThisInitialized(_this);
    _this.state = {
      sidebarIn: props.sidebarIn
    };
    _this.hideSidebar = _this.hideSidebar.bind(_assertThisInitialized(_this));
    _this.eventListeners = [];
    return _this;
  }

  _createClass(Layout, [{
    key: "onHashChange",
    value: function onHashChange() {
      window.blueLayoutRef.initMatch();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var me = this;
      document.addEventListener("toggleSidebar", function () {
        _this2.toggleSidebar(undefined);
      }, false);
      document.addEventListener("touchstart", function (event) {
        var xPos = event.touches[0].pageX;

        if (xPos < 5) {
          me.toggleSidebar(event);
        } else if (me.state.sidebarIn && xPos > 20) {
          me.toggleSidebar(event);
        }
      });
    }
  }, {
    key: "toggleSidebar",
    value: function toggleSidebar(event) {
      if (this.state.sidebarIn) {
        this.hideSidebar(event);
      }

      this.setState({
        sidebarIn: true
      });
    }
  }, {
    key: "hideSidebar",
    value: function hideSidebar(e) {
      if (!(_Utilities.default.hasClass(e.target, "blue-open-menu") || _Utilities.default.hasClass(e.target, "bi-menu") || _Utilities.default.hasClass(e.target, "blue-search") || _Utilities.default.hasClass(e.target, "blue-search-control") || _Utilities.default.hasClass(e.target, "blue-search-btn") || _Utilities.default.hasClass(e.target, "blue-search-btn-icon") || _Utilities.default.hasClass(e.target, "blue-menu-item-dropdown-toggle") || _Utilities.default.hasClass(e.target, "blue-menu-item-dropdown-caret") || _Utilities.default.hasClass(e.target, "blue-menu-item-dropdown-icon") || _Utilities.default.hasClass(e.target, "blue-sidebar-exception"))) {
        this.setState({
          sidebarIn: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
        className: "blue-wrapper"
      }), /*#__PURE__*/_react.default.createElement("div", {
        id: this.props.id ? this.props.id : "",
        style: this.props.style ? this.props.style : {},
        className: "blue-layout" + (this.props.className ? " " + this.props.className : "") + (this.state.sidebarIn ? " open" : "") + (this.props.hideSidebarMenu ? " hasNoSidebarMenu" : " hasSidebarMenu") + (this.props.expandSidebar ? " expandSidebar" : "") + (this.props.disableHeaders ? " disableHeaders" : ""),
        onClick: this.hideSidebar
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "blue-sidebar-toggler"
      }, !this.props.hideSidebarMenu ? /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: "blue-open-menu blue-menu-item btn",
        onClick: function onClick() {
          _this3.setState({
            sidebarIn: !_this3.state.sidebarIn
          });
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "blue-sidebar-exception position-absolute w-100 h-100"
      }), this.props.sidebarToggleIconComponent) : ""), this.props.children, /*#__PURE__*/_react.default.createElement("div", {
        className: "blue-status-circle blue-loading blue-status-loading"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "spinner-bounce-circle"
      }, /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", null))), /*#__PURE__*/_react.default.createElement("div", {
        className: "blue-status-circle blue-status-success"
      }, this.props.statusIcons.success), /*#__PURE__*/_react.default.createElement("div", {
        className: "blue-status-circle blue-status-info"
      }, this.props.statusIcons.info), /*#__PURE__*/_react.default.createElement("div", {
        className: "blue-status-circle blue-status-warning"
      }, this.props.statusIcons.warning), /*#__PURE__*/_react.default.createElement("div", {
        className: "blue-status-circle blue-status-danger"
      }, this.props.statusIcons.danger), /*#__PURE__*/_react.default.createElement("div", {
        className: "blue-status-alert alert"
      }, /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: "btn-close float-end mb-1",
        "aria-label": "Close"
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "alert-body"
      }))));
    }
  }], [{
    key: "defaultProps",
    get: function get() {
      return {
        expandSidebar: false,
        hideSidebarMenu: false,
        disableTitleSet: false,
        sidebarToggleIconComponent: /*#__PURE__*/_react.default.createElement("span", {
          className: "bi-menu"
        }),
        statusIcons: {
          danger: /*#__PURE__*/_react.default.createElement("span", {
            className: "bi-error"
          }),
          info: /*#__PURE__*/_react.default.createElement("span", {
            className: "bi-information"
          }),
          success: /*#__PURE__*/_react.default.createElement("span", {
            className: "bi-check"
          }),
          warning: /*#__PURE__*/_react.default.createElement("span", {
            className: "bi-sign_warning"
          })
        }
      };
    }
  }]);

  return Layout;
}(_react.Component);

exports.default = Layout;