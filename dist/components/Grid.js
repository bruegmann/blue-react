"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

window.toggleSidebarEvent = new CustomEvent("toggleSidebar");

/**
 * The main component. As soon this component is mounted, it is globally available under `window.blueGridRef`.
 * Also you can append your own event listeners with `blueGridRef.addEventListener(eventName, (prevProps, prevState) => { })`.
 *
 * Allowed event listeners:
 *
 * * **componentDidUpdate** - Component was updated.
 *   Example: `blueGridRef.addEventListener("componentDidUpdate", (prevProps, prevState) => { })`
 * * **pageDidShowAgain** - Page appeared again with the same old state. In the callback function you can reinitialize things.
 *   Example: `blueGridRef.addEventListener("pageDidShowAgain", "home", (prevProps, prevState) => { })`
 * * **pageDidHide** - This page disappeared and another page appears instead.
 *   Example: `blueGridRef.addEventListener("pageDidHide", "home", (prevProps, prevState) => { })`
 */
var Grid = /*#__PURE__*/function (_Component) {
  _inherits(Grid, _Component);

  var _super = _createSuper(Grid);

  function Grid(props) {
    var _this;

    _classCallCheck(this, Grid);

    _this = _super.call(this, props);
    window.blueGridRef = _assertThisInitialized(_this);
    _this.defaultMatch = ["home"];
    _this.state = {
      sidebarIn: props.sidebarIn,
      match: null,
      history: [],
      hash: window.location.hash,
      hashHistory: [],
      blockRouting: props.blockRouting || undefined
    };
    _this.hideSidebar = _this.hideSidebar.bind(_assertThisInitialized(_this));
    _this.eventListeners = [];
    return _this;
  }

  _createClass(Grid, [{
    key: "onHashChange",
    value: function onHashChange(event) {
      window.blueGridRef.initMatch();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var me = this;
      document.addEventListener("toggleSidebar", function () {
        _this2.toggleSidebar(undefined);
      }, false);
      this.initMatch();
      document.addEventListener("touchstart", function (event) {
        var xPos = event.touches[0].pageX;

        if (xPos < 5) {
          me.toggleSidebar(event);
        } else if (me.state.sidebarIn && xPos > 20) {
          me.toggleSidebar(event);
        }
      });

      _Utilities.default.registerFluentBtns();

      window.addEventListener("hashchange", this.onHashChange);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("hashchange", this.onHashChange);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this3 = this;

      if (prevProps.blockRouting !== this.props.blockRouting && this.props.blockRouting !== this.state.blockRouting) {
        this.setState({
          blockRouting: this.props.blockRouting
        });
      }

      this.eventListeners.forEach(function (eventListener) {
        if (eventListener[0] === "componentDidUpdate") {
          eventListener[1](prevProps, prevState);
        }

        if (eventListener[0] === "pageDidShowAgain") {
          var pageId = eventListener[1];
          var callback = eventListener[2];

          if (prevState.hash !== _this3.state.hash && _this3.state.match[0] === pageId) {
            callback(prevProps, prevState);
          }
        }

        if (eventListener[0] === "pageDidHide") {
          var _pageId = eventListener[1];
          var _callback = eventListener[2];

          if (prevState.hash !== _this3.state.hash && prevState.match[0] === _pageId) {
            _callback(prevProps, prevState);
          }
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
      if (!(_Utilities.default.hasClass(e.target, "blue-app-open-menu") || _Utilities.default.hasClass(e.target, "bi-menu") || _Utilities.default.hasClass(e.target, "blue-app-search") || _Utilities.default.hasClass(e.target, "blue-app-search-control") || _Utilities.default.hasClass(e.target, "blue-app-search-btn") || _Utilities.default.hasClass(e.target, "blue-app-search-btn-icon") || _Utilities.default.hasClass(e.target, "blue-app-sidebar-dropdown-toggle") || _Utilities.default.hasClass(e.target, "blue-app-sidebar-dropdown-caret") || _Utilities.default.hasClass(e.target, "blue-app-sidebar-dropdown-icon") || _Utilities.default.hasClass(e.target, "blue-app-sidebar-exception"))) {
        this.setState({
          sidebarIn: false
        });
      }
    }
  }, {
    key: "initMatch",
    value: function initMatch() {
      var newMatch;

      if (window.location.hash && window.location.hash !== "" && window.location.hash !== "#/") {
        newMatch = window.location.hash.replace("#", "").split("/").filter(function (n) {
          return n !== "";
        });
      } else {
        newMatch = this.defaultMatch;
      }

      if (this.props.unrouteable) {
        newMatch = this.defaultMatch;
      }

      if (this.state.blockRouting && this.state.blockRouting(newMatch, this.state.match) === true) {
        window.location.hash = this.state.hash;
      } else {
        if (!(this.state.history.indexOf(newMatch[0]) > -1)) {
          this.state.history.push(newMatch[0]);
        }

        this.setState({
          match: newMatch,
          history: this.state.history,
          hash: window.location.hash,
          hashHistory: this.state.hashHistory.concat([window.location.hash])
        });
      }
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(param1, param2, param3) {
      this.eventListeners.push([param1, param2, param3]);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this,
          _this$props$pages;

      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
        className: "blue-app-wrapper"
      }), /*#__PURE__*/_react.default.createElement("div", {
        id: this.props.id ? this.props.id : "",
        style: this.props.style ? this.props.style : {},
        className: "blue-app-grid" + (this.props.className ? " " + this.props.className : "") + (this.state.sidebarIn ? " open" : "") + (this.props.hideSidebarMenu ? " hasNoSidebarMenu" : " hasSidebarMenu") + (this.props.expandSidebar ? " expand-sidebar" : "") + (this.props.disableHeaders ? " disableHeaders" : ""),
        onClick: this.hideSidebar
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "blue-app-sidebar-toggler"
      }, !this.props.hideSidebarMenu ? /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: "blue-app-open-menu blue-app-sidebar-btn btn",
        onClick: function onClick() {
          _this4.setState({
            sidebarIn: !_this4.state.sidebarIn
          });
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "blue-app-sidebar-exception position-absolute w-100 h-100"
      }), this.props.sidebarToggleIconComponent) : ""), this.props.children, (_this$props$pages = this.props.pages) === null || _this$props$pages === void 0 ? void 0 : _this$props$pages.map(function (page) {
        return _this4.state.history.indexOf(page.name) > -1 && /*#__PURE__*/_react.default.createElement("div", {
          key: page.name,
          className: "router-page " + (_this4.state.match[0] === page.name ? "active" : "")
        }, page.component);
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "blue-app-status-circle blue-app-loading blue-app-status-loading"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "spinner-bounce-circle"
      }, /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", null))), /*#__PURE__*/_react.default.createElement("div", {
        className: "blue-app-status-circle blue-app-status-success"
      }, this.props.statusIcons.success), /*#__PURE__*/_react.default.createElement("div", {
        className: "blue-app-status-circle blue-app-status-info"
      }, this.props.statusIcons.info), /*#__PURE__*/_react.default.createElement("div", {
        className: "blue-app-status-circle blue-app-status-warning"
      }, this.props.statusIcons.warning), /*#__PURE__*/_react.default.createElement("div", {
        className: "blue-app-status-circle blue-app-status-danger"
      }, this.props.statusIcons.danger), /*#__PURE__*/_react.default.createElement("div", {
        className: "blue-app-status-alert alert"
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
        unrouteable: false,
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

  return Grid;
}(_react.Component);

exports.default = Grid;