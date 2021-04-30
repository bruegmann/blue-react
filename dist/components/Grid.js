"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SidebarMenu = _interopRequireDefault(require("./SidebarMenu.js"));

var _Utilities = _interopRequireDefault(require("./Utilities.js"));

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

// Damit Events auch in IE funktionieren
// require("custom-event-polyfill/custom-event-polyfill.js");
window.toggleSidebarEvent = new CustomEvent("toggleSidebar");
/**
 * Das Grundgerüst. Sobald diese Komponente gemountet wurde, ist sie global über <code>window.blueGridRef</code> zugreifbar.<br>
 * Außerdem kann über <code>blueGridRef.addEventListener(eventName, (prevProps, prevState) => { })</code> ein Event-Listener angefügt werden.
 * <br><br>
 * Erlaubte Event-Listener:
 * <table class="table">
 * <thead><tr><th>Event name</th><th>Description</th><th>Beispiel</th></tr></thead>
 * <tbody>
 * <tr>
 * <th>componentDidUpdate</th>
 * <td>Komponente wurde aktualisiert.</td>
 * <td><code>blueGridRef.addEventListener("componentDidUpdate", (prevProps, prevState) => { })</code></td>
 * </tr>
 * 
 * <tr>
 * <th>pageDidShowAgain</th>
 * <td>Seite wurde erneut angezeigt, mit altem Stand. Im Callback kann Komponente neu initialisiert werden.</td>
 * <td><code>blueGridRef.addEventListener("pageDidShowAgain", "home", (prevProps, prevState) => { })</code></td>
 * </tr>
 * 
 * <tr>
 * <th>pageDidHide</th>
 * <td>Seite wurde versteckt (andere Seite wurde angezeigt).</td>
 * <td><code>blueGridRef.addEventListener("pageDidHide", "home", (prevProps, prevState) => { })</code></td>
 * </tr>
 * </tbody>
 * </table>
 */

var Grid = /*#__PURE__*/function (_React$Component) {
  _inherits(Grid, _React$Component);

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
      hash: window.location.hash
    };
    _this.hideSidebar = _this.hideSidebar.bind(_assertThisInitialized(_this));
    window.addEventListener("hashchange", function (event) {
      window.blueGridRef.initMatch();
    });
    _this.eventListeners = [];
    return _this;
  }

  _createClass(Grid, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var me = this;
      document.addEventListener("toggleSidebar", function () {
        _this2.toggleSidebar();
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
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this3 = this;

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

      if (!(this.state.history.indexOf(newMatch[0]) > -1)) {
        this.state.history.push(newMatch[0]);
      }

      this.setState({
        match: newMatch,
        history: this.state.history,
        hash: window.location.hash
      });
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(param1, param2, param3) {
      this.eventListeners.push([param1, param2, param3]);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

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
        className: "fluent-btn blue-app-open-menu blue-app-sidebar-btn btn",
        onClick: function onClick() {
          _this4.setState({
            sidebarIn: !_this4.state.sidebarIn
          });
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "fluent-btn-ball blue-app-sidebar-exception"
      }), this.props.sidebarToggleIconComponent) : ""), this.props.children, this.props.pages.map(function (page) {
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
        className: "close"
      }, "\xD7"), /*#__PURE__*/_react.default.createElement("div", {
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
}(_react.default.Component); // Grid.toggleSidebar = null;


Grid.SidebarMenu = _SidebarMenu.default;
Grid.propTypes = {
  /**
   * Die Sidebar ist bei Vollbild automatisch eingeklappt.
   */
  expandSidebar: _propTypes.default.bool,

  /**
   * Deaktiviert die Sidebar.
   */
  hideSidebarMenu: _propTypes.default.bool,

  /**
   * Registriert Seiten. Beispiel: [{name: "home", component: <HomePage />}]
   */
  pages: _propTypes.default.array,

  /**
   * Wenn <code>true</code> wird immer die "home"-Route geladen.
   */
  unrouteable: _propTypes.default.bool,

  /**
   * Erweitert die <code>className</code>-Eigenschaft.
   */
  className: _propTypes.default.string,

  /**
   * Normalerweise wird der Dokumenten-Titel automatisch gesetzt. Setze diese Property auf <code>true</code> um das zu
   * deaktivieren.
   */
  disableTitleSet: _propTypes.default.bool,

  /**
   * If you don't use blueicon, you can define another icon element for the sidebar toggle button.
   */
  sidebarToggleIconComponent: _propTypes.default.any,

  /**
   * Will replace status icons with custom ones. This can be a SVG component or a normal element component.
   */
  statusIcons: _propTypes.default.shape({
    danger: _propTypes.default.any,
    info: _propTypes.default.any,
    success: _propTypes.default.any,
    warning: _propTypes.default.any
  }),

  /**
   * Disables the header bars on pages.
   */
  disableHeaders: _propTypes.default.bool
};
var _default = Grid;
exports.default = _default;