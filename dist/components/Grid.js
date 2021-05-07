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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0dyaWQuanMiXSwibmFtZXMiOlsid2luZG93IiwidG9nZ2xlU2lkZWJhckV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJHcmlkIiwicHJvcHMiLCJibHVlR3JpZFJlZiIsImRlZmF1bHRNYXRjaCIsInN0YXRlIiwic2lkZWJhckluIiwibWF0Y2giLCJoaXN0b3J5IiwiaGFzaCIsImxvY2F0aW9uIiwiaGlkZVNpZGViYXIiLCJiaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiaW5pdE1hdGNoIiwiZXZlbnRMaXN0ZW5lcnMiLCJtZSIsImRvY3VtZW50IiwidG9nZ2xlU2lkZWJhciIsInhQb3MiLCJ0b3VjaGVzIiwicGFnZVgiLCJVdGlsaXRpZXMiLCJyZWdpc3RlckZsdWVudEJ0bnMiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJmb3JFYWNoIiwiZXZlbnRMaXN0ZW5lciIsInBhZ2VJZCIsImNhbGxiYWNrIiwic2V0U3RhdGUiLCJlIiwiaGFzQ2xhc3MiLCJ0YXJnZXQiLCJuZXdNYXRjaCIsInJlcGxhY2UiLCJzcGxpdCIsImZpbHRlciIsIm4iLCJ1bnJvdXRlYWJsZSIsImluZGV4T2YiLCJwdXNoIiwicGFyYW0xIiwicGFyYW0yIiwicGFyYW0zIiwiaWQiLCJzdHlsZSIsImNsYXNzTmFtZSIsImhpZGVTaWRlYmFyTWVudSIsImV4cGFuZFNpZGViYXIiLCJkaXNhYmxlSGVhZGVycyIsInNpZGViYXJUb2dnbGVJY29uQ29tcG9uZW50IiwiY2hpbGRyZW4iLCJwYWdlcyIsIm1hcCIsInBhZ2UiLCJuYW1lIiwiY29tcG9uZW50Iiwic3RhdHVzSWNvbnMiLCJzdWNjZXNzIiwiaW5mbyIsIndhcm5pbmciLCJkYW5nZXIiLCJkaXNhYmxlVGl0bGVTZXQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlNpZGViYXJNZW51IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsImFycmF5Iiwic3RyaW5nIiwiYW55Iiwic2hhcGUi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RTtBQUFNLFlBQUEsU0FBUyxFQUFDO0FBQWhCO0FBSkE7QUFOVixPQUFQO0FBYUg7Ozs7RUF0Q2NHLGVBQU1DLFMsR0F5TnpCOzs7QUFFQWpFLElBQUksQ0FBQ2tFLFdBQUwsR0FBbUJBLG9CQUFuQjtBQUVBbEUsSUFBSSxDQUFDbUUsU0FBTCxHQUFpQjtBQUNiO0FBQ0o7QUFDQTtBQUNJbEIsRUFBQUEsYUFBYSxFQUFFbUIsbUJBQVVDLElBSlo7O0FBTWI7QUFDSjtBQUNBO0FBQ0lyQixFQUFBQSxlQUFlLEVBQUVvQixtQkFBVUMsSUFUZDs7QUFXYjtBQUNKO0FBQ0E7QUFDSWhCLEVBQUFBLEtBQUssRUFBRWUsbUJBQVVFLEtBZEo7O0FBZ0JiO0FBQ0o7QUFDQTtBQUNJL0IsRUFBQUEsV0FBVyxFQUFFNkIsbUJBQVVDLElBbkJWOztBQXFCYjtBQUNKO0FBQ0E7QUFDSXRCLEVBQUFBLFNBQVMsRUFBRXFCLG1CQUFVRyxNQXhCUjs7QUEwQmI7QUFDSjtBQUNBO0FBQ0E7QUFDSVIsRUFBQUEsZUFBZSxFQUFFSyxtQkFBVUMsSUE5QmQ7O0FBZ0NiO0FBQ0o7QUFDQTtBQUNJbEIsRUFBQUEsMEJBQTBCLEVBQUVpQixtQkFBVUksR0FuQ3pCOztBQXFDYjtBQUNKO0FBQ0E7QUFDSWQsRUFBQUEsV0FBVyxFQUFFVSxtQkFBVUssS0FBVixDQUFnQjtBQUN6QlgsSUFBQUEsTUFBTSxFQUFFTSxtQkFBVUksR0FETztBQUV6QlosSUFBQUEsSUFBSSxFQUFFUSxtQkFBVUksR0FGUztBQUd6QmIsSUFBQUEsT0FBTyxFQUFFUyxtQkFBVUksR0FITTtBQUl6QlgsSUFBQUEsT0FBTyxFQUFFTyxtQkFBVUk7QUFKTSxHQUFoQixDQXhDQTs7QUErQ2I7QUFDSjtBQUNBO0FBQ0l0QixFQUFBQSxjQUFjLEVBQUVrQixtQkFBVUM7QUFsRGIsQ0FBakI7ZUFxRGVyRSxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG5pbXBvcnQgU2lkZWJhck1lbnUgZnJvbSBcIi4vU2lkZWJhck1lbnUuanNcIjtcclxuaW1wb3J0IFV0aWxpdGllcyBmcm9tIFwiLi9VdGlsaXRpZXMuanNcIjtcclxuXHJcbi8vIERhbWl0IEV2ZW50cyBhdWNoIGluIElFIGZ1bmt0aW9uaWVyZW5cclxuLy8gcmVxdWlyZShcImN1c3RvbS1ldmVudC1wb2x5ZmlsbC9jdXN0b20tZXZlbnQtcG9seWZpbGwuanNcIik7XHJcblxyXG53aW5kb3cudG9nZ2xlU2lkZWJhckV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KFwidG9nZ2xlU2lkZWJhclwiKTtcclxuXHJcbi8qKlxyXG4gKiBEYXMgR3J1bmRnZXLDvHN0LiBTb2JhbGQgZGllc2UgS29tcG9uZW50ZSBnZW1vdW50ZXQgd3VyZGUsIGlzdCBzaWUgZ2xvYmFsIMO8YmVyIDxjb2RlPndpbmRvdy5ibHVlR3JpZFJlZjwvY29kZT4genVncmVpZmJhci48YnI+XHJcbiAqIEF1w59lcmRlbSBrYW5uIMO8YmVyIDxjb2RlPmJsdWVHcmlkUmVmLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCAocHJldlByb3BzLCBwcmV2U3RhdGUpID0+IHsgfSk8L2NvZGU+IGVpbiBFdmVudC1MaXN0ZW5lciBhbmdlZsO8Z3Qgd2VyZGVuLlxyXG4gKiA8YnI+PGJyPlxyXG4gKiBFcmxhdWJ0ZSBFdmVudC1MaXN0ZW5lcjpcclxuICogPHRhYmxlIGNsYXNzPVwidGFibGVcIj5cclxuICogPHRoZWFkPjx0cj48dGg+RXZlbnQgbmFtZTwvdGg+PHRoPkRlc2NyaXB0aW9uPC90aD48dGg+QmVpc3BpZWw8L3RoPjwvdHI+PC90aGVhZD5cclxuICogPHRib2R5PlxyXG4gKiA8dHI+XHJcbiAqIDx0aD5jb21wb25lbnREaWRVcGRhdGU8L3RoPlxyXG4gKiA8dGQ+S29tcG9uZW50ZSB3dXJkZSBha3R1YWxpc2llcnQuPC90ZD5cclxuICogPHRkPjxjb2RlPmJsdWVHcmlkUmVmLmFkZEV2ZW50TGlzdGVuZXIoXCJjb21wb25lbnREaWRVcGRhdGVcIiwgKHByZXZQcm9wcywgcHJldlN0YXRlKSA9PiB7IH0pPC9jb2RlPjwvdGQ+XHJcbiAqIDwvdHI+XHJcbiAqIFxyXG4gKiA8dHI+XHJcbiAqIDx0aD5wYWdlRGlkU2hvd0FnYWluPC90aD5cclxuICogPHRkPlNlaXRlIHd1cmRlIGVybmV1dCBhbmdlemVpZ3QsIG1pdCBhbHRlbSBTdGFuZC4gSW0gQ2FsbGJhY2sga2FubiBLb21wb25lbnRlIG5ldSBpbml0aWFsaXNpZXJ0IHdlcmRlbi48L3RkPlxyXG4gKiA8dGQ+PGNvZGU+Ymx1ZUdyaWRSZWYuYWRkRXZlbnRMaXN0ZW5lcihcInBhZ2VEaWRTaG93QWdhaW5cIiwgXCJob21lXCIsIChwcmV2UHJvcHMsIHByZXZTdGF0ZSkgPT4geyB9KTwvY29kZT48L3RkPlxyXG4gKiA8L3RyPlxyXG4gKiBcclxuICogPHRyPlxyXG4gKiA8dGg+cGFnZURpZEhpZGU8L3RoPlxyXG4gKiA8dGQ+U2VpdGUgd3VyZGUgdmVyc3RlY2t0IChhbmRlcmUgU2VpdGUgd3VyZGUgYW5nZXplaWd0KS48L3RkPlxyXG4gKiA8dGQ+PGNvZGU+Ymx1ZUdyaWRSZWYuYWRkRXZlbnRMaXN0ZW5lcihcInBhZ2VEaWRIaWRlXCIsIFwiaG9tZVwiLCAocHJldlByb3BzLCBwcmV2U3RhdGUpID0+IHsgfSk8L2NvZGU+PC90ZD5cclxuICogPC90cj5cclxuICogPC90Ym9keT5cclxuICogPC90YWJsZT5cclxuICovXHJcbmNsYXNzIEdyaWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5ibHVlR3JpZFJlZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHRoaXMuZGVmYXVsdE1hdGNoID0gW1wiaG9tZVwiXTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2lkZWJhckluOiBwcm9wcy5zaWRlYmFySW4sXHJcbiAgICAgICAgICAgIG1hdGNoOiBudWxsLFxyXG4gICAgICAgICAgICBoaXN0b3J5OiBbXSxcclxuICAgICAgICAgICAgaGFzaDogd2luZG93LmxvY2F0aW9uLmhhc2hcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmhpZGVTaWRlYmFyID0gdGhpcy5oaWRlU2lkZWJhci5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cuYmx1ZUdyaWRSZWYuaW5pdE1hdGNoKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGRlZmF1bHRQcm9wcygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBleHBhbmRTaWRlYmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgaGlkZVNpZGViYXJNZW51OiBmYWxzZSxcclxuICAgICAgICAgICAgdW5yb3V0ZWFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBkaXNhYmxlVGl0bGVTZXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaWRlYmFyVG9nZ2xlSWNvbkNvbXBvbmVudDogPHNwYW4gY2xhc3NOYW1lPVwiYmktbWVudVwiIC8+LFxyXG4gICAgICAgICAgICBzdGF0dXNJY29uczoge1xyXG4gICAgICAgICAgICAgICAgZGFuZ2VyOiA8c3BhbiBjbGFzc05hbWU9XCJiaS1lcnJvclwiIC8+LFxyXG4gICAgICAgICAgICAgICAgaW5mbzogPHNwYW4gY2xhc3NOYW1lPVwiYmktaW5mb3JtYXRpb25cIiAvPixcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IDxzcGFuIGNsYXNzTmFtZT1cImJpLWNoZWNrXCIgLz4sXHJcbiAgICAgICAgICAgICAgICB3YXJuaW5nOiA8c3BhbiBjbGFzc05hbWU9XCJiaS1zaWduX3dhcm5pbmdcIiAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b2dnbGVTaWRlYmFyXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVTaWRlYmFyKCk7XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRNYXRjaCgpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeFBvcyA9IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVg7XHJcblxyXG4gICAgICAgICAgICBpZiAoeFBvcyA8IDUpIHtcclxuICAgICAgICAgICAgICAgIG1lLnRvZ2dsZVNpZGViYXIoZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG1lLnN0YXRlLnNpZGViYXJJbiAmJiB4UG9zID4gMjApIHtcclxuICAgICAgICAgICAgICAgIG1lLnRvZ2dsZVNpZGViYXIoZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFV0aWxpdGllcy5yZWdpc3RlckZsdWVudEJ0bnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcclxuICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLmZvckVhY2goZXZlbnRMaXN0ZW5lciA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldmVudExpc3RlbmVyWzBdID09PSBcImNvbXBvbmVudERpZFVwZGF0ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudExpc3RlbmVyWzFdKHByZXZQcm9wcywgcHJldlN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGV2ZW50TGlzdGVuZXJbMF0gPT09IFwicGFnZURpZFNob3dBZ2FpblwiKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGFnZUlkID0gZXZlbnRMaXN0ZW5lclsxXTtcclxuICAgICAgICAgICAgICAgIGxldCBjYWxsYmFjayA9IGV2ZW50TGlzdGVuZXJbMl07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHByZXZTdGF0ZS5oYXNoICE9PSB0aGlzLnN0YXRlLmhhc2ggJiYgdGhpcy5zdGF0ZS5tYXRjaFswXSA9PT0gcGFnZUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socHJldlByb3BzLCBwcmV2U3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZXZlbnRMaXN0ZW5lclswXSA9PT0gXCJwYWdlRGlkSGlkZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGFnZUlkID0gZXZlbnRMaXN0ZW5lclsxXTtcclxuICAgICAgICAgICAgICAgIGxldCBjYWxsYmFjayA9IGV2ZW50TGlzdGVuZXJbMl07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHByZXZTdGF0ZS5oYXNoICE9PSB0aGlzLnN0YXRlLmhhc2ggJiYgcHJldlN0YXRlLm1hdGNoWzBdID09PSBwYWdlSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhwcmV2UHJvcHMsIHByZXZTdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVTaWRlYmFyKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2lkZWJhckluKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZVNpZGViYXIoZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2lkZWJhckluOiB0cnVlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVTaWRlYmFyKGUpIHtcclxuICAgICAgICBpZiAoIShcclxuICAgICAgICAgICAgVXRpbGl0aWVzLmhhc0NsYXNzKGUudGFyZ2V0LCBcImJsdWUtYXBwLW9wZW4tbWVudVwiKSB8fFxyXG4gICAgICAgICAgICBVdGlsaXRpZXMuaGFzQ2xhc3MoZS50YXJnZXQsIFwiYmktbWVudVwiKSB8fFxyXG4gICAgICAgICAgICBVdGlsaXRpZXMuaGFzQ2xhc3MoZS50YXJnZXQsIFwiYmx1ZS1hcHAtc2VhcmNoXCIpIHx8XHJcbiAgICAgICAgICAgIFV0aWxpdGllcy5oYXNDbGFzcyhlLnRhcmdldCwgXCJibHVlLWFwcC1zZWFyY2gtY29udHJvbFwiKSB8fFxyXG4gICAgICAgICAgICBVdGlsaXRpZXMuaGFzQ2xhc3MoZS50YXJnZXQsIFwiYmx1ZS1hcHAtc2VhcmNoLWJ0blwiKSB8fFxyXG4gICAgICAgICAgICBVdGlsaXRpZXMuaGFzQ2xhc3MoZS50YXJnZXQsIFwiYmx1ZS1hcHAtc2VhcmNoLWJ0bi1pY29uXCIpIHx8XHJcbiAgICAgICAgICAgIFV0aWxpdGllcy5oYXNDbGFzcyhlLnRhcmdldCwgXCJibHVlLWFwcC1zaWRlYmFyLWRyb3Bkb3duLXRvZ2dsZVwiKSB8fFxyXG4gICAgICAgICAgICBVdGlsaXRpZXMuaGFzQ2xhc3MoZS50YXJnZXQsIFwiYmx1ZS1hcHAtc2lkZWJhci1kcm9wZG93bi1jYXJldFwiKSB8fFxyXG4gICAgICAgICAgICBVdGlsaXRpZXMuaGFzQ2xhc3MoZS50YXJnZXQsIFwiYmx1ZS1hcHAtc2lkZWJhci1kcm9wZG93bi1pY29uXCIpIHx8XHJcbiAgICAgICAgICAgIFV0aWxpdGllcy5oYXNDbGFzcyhlLnRhcmdldCwgXCJibHVlLWFwcC1zaWRlYmFyLWV4Y2VwdGlvblwiKVxyXG4gICAgICAgICkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNpZGViYXJJbjogZmFsc2UgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRNYXRjaCgpIHtcclxuICAgICAgICBsZXQgbmV3TWF0Y2g7XHJcblxyXG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCAmJiB3aW5kb3cubG9jYXRpb24uaGFzaCAhPT0gXCJcIiAmJiB3aW5kb3cubG9jYXRpb24uaGFzaCAhPT0gXCIjL1wiKSB7XHJcbiAgICAgICAgICAgIG5ld01hdGNoID0gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZShcIiNcIiwgXCJcIikuc3BsaXQoXCIvXCIpLmZpbHRlcihuID0+IG4gIT09IFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbmV3TWF0Y2ggPSB0aGlzLmRlZmF1bHRNYXRjaDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnVucm91dGVhYmxlKSB7XHJcbiAgICAgICAgICAgIG5ld01hdGNoID0gdGhpcy5kZWZhdWx0TWF0Y2g7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoISh0aGlzLnN0YXRlLmhpc3RvcnkuaW5kZXhPZihuZXdNYXRjaFswXSkgPiAtMSkpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5oaXN0b3J5LnB1c2gobmV3TWF0Y2hbMF0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1hdGNoOiBuZXdNYXRjaCwgaGlzdG9yeTogdGhpcy5zdGF0ZS5oaXN0b3J5LCBoYXNoOiB3aW5kb3cubG9jYXRpb24uaGFzaCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRFdmVudExpc3RlbmVyKHBhcmFtMSwgcGFyYW0yLCBwYXJhbTMpIHtcclxuICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLnB1c2goW3BhcmFtMSwgcGFyYW0yLCBwYXJhbTNdKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmx1ZS1hcHAtd3JhcHBlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD17dGhpcy5wcm9wcy5pZCA/IHRoaXMucHJvcHMuaWQgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlID8gdGhpcy5wcm9wcy5zdHlsZSA6IHt9fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJibHVlLWFwcC1ncmlkXCIgKyAodGhpcy5wcm9wcy5jbGFzc05hbWUgPyBcIiBcIiArIHRoaXMucHJvcHMuY2xhc3NOYW1lIDogXCJcIikgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS5zaWRlYmFySW4gPyBcIiBvcGVuXCIgOiBcIlwiKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLmhpZGVTaWRlYmFyTWVudSA/IFwiIGhhc05vU2lkZWJhck1lbnVcIiA6IFwiIGhhc1NpZGViYXJNZW51XCIpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMuZXhwYW5kU2lkZWJhciA/IFwiIGV4cGFuZC1zaWRlYmFyXCIgOiBcIlwiKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLmRpc2FibGVIZWFkZXJzID8gXCIgZGlzYWJsZUhlYWRlcnNcIiA6IFwiXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGlkZVNpZGViYXJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibHVlLWFwcC1zaWRlYmFyLXRvZ2dsZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMucHJvcHMuaGlkZVNpZGViYXJNZW51ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbHVlbnQtYnRuIGJsdWUtYXBwLW9wZW4tbWVudSBibHVlLWFwcC1zaWRlYmFyLWJ0biBidG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2lkZWJhckluOiAhdGhpcy5zdGF0ZS5zaWRlYmFySW4gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsdWVudC1idG4tYmFsbCBibHVlLWFwcC1zaWRlYmFyLWV4Y2VwdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnNpZGViYXJUb2dnbGVJY29uQ29tcG9uZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnBhZ2VzLm1hcChwYWdlID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaGlzdG9yeS5pbmRleE9mKHBhZ2UubmFtZSkgPiAtMSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3BhZ2UubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJyb3V0ZXItcGFnZSBcIiArICh0aGlzLnN0YXRlLm1hdGNoWzBdID09PSBwYWdlLm5hbWUgPyBcImFjdGl2ZVwiIDogXCJcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYWdlLmNvbXBvbmVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibHVlLWFwcC1zdGF0dXMtY2lyY2xlIGJsdWUtYXBwLWxvYWRpbmcgYmx1ZS1hcHAtc3RhdHVzLWxvYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGlubmVyLWJvdW5jZS1jaXJjbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibHVlLWFwcC1zdGF0dXMtY2lyY2xlIGJsdWUtYXBwLXN0YXR1cy1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnN0YXR1c0ljb25zLnN1Y2Nlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmx1ZS1hcHAtc3RhdHVzLWNpcmNsZSBibHVlLWFwcC1zdGF0dXMtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zdGF0dXNJY29ucy5pbmZvfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsdWUtYXBwLXN0YXR1cy1jaXJjbGUgYmx1ZS1hcHAtc3RhdHVzLXdhcm5pbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc3RhdHVzSWNvbnMud2FybmluZ31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibHVlLWFwcC1zdGF0dXMtY2lyY2xlIGJsdWUtYXBwLXN0YXR1cy1kYW5nZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc3RhdHVzSWNvbnMuZGFuZ2VyfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsdWUtYXBwLXN0YXR1cy1hbGVydCBhbGVydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPiZ0aW1lczs8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydC1ib2R5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBHcmlkLnRvZ2dsZVNpZGViYXIgPSBudWxsO1xyXG5cclxuR3JpZC5TaWRlYmFyTWVudSA9IFNpZGViYXJNZW51O1xyXG5cclxuR3JpZC5wcm9wVHlwZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIERpZSBTaWRlYmFyIGlzdCBiZWkgVm9sbGJpbGQgYXV0b21hdGlzY2ggZWluZ2VrbGFwcHQuXHJcbiAgICAgKi9cclxuICAgIGV4cGFuZFNpZGViYXI6IFByb3BUeXBlcy5ib29sLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVha3RpdmllcnQgZGllIFNpZGViYXIuXHJcbiAgICAgKi9cclxuICAgIGhpZGVTaWRlYmFyTWVudTogUHJvcFR5cGVzLmJvb2wsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RyaWVydCBTZWl0ZW4uIEJlaXNwaWVsOiBbe25hbWU6IFwiaG9tZVwiLCBjb21wb25lbnQ6IDxIb21lUGFnZSAvPn1dXHJcbiAgICAgKi9cclxuICAgIHBhZ2VzOiBQcm9wVHlwZXMuYXJyYXksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXZW5uIDxjb2RlPnRydWU8L2NvZGU+IHdpcmQgaW1tZXIgZGllIFwiaG9tZVwiLVJvdXRlIGdlbGFkZW4uXHJcbiAgICAgKi9cclxuICAgIHVucm91dGVhYmxlOiBQcm9wVHlwZXMuYm9vbCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEVyd2VpdGVydCBkaWUgPGNvZGU+Y2xhc3NOYW1lPC9jb2RlPi1FaWdlbnNjaGFmdC5cclxuICAgICAqL1xyXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTm9ybWFsZXJ3ZWlzZSB3aXJkIGRlciBEb2t1bWVudGVuLVRpdGVsIGF1dG9tYXRpc2NoIGdlc2V0enQuIFNldHplIGRpZXNlIFByb3BlcnR5IGF1ZiA8Y29kZT50cnVlPC9jb2RlPiB1bSBkYXMgenVcclxuICAgICAqIGRlYWt0aXZpZXJlbi5cclxuICAgICAqL1xyXG4gICAgZGlzYWJsZVRpdGxlU2V0OiBQcm9wVHlwZXMuYm9vbCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIElmIHlvdSBkb24ndCB1c2UgYmx1ZWljb24sIHlvdSBjYW4gZGVmaW5lIGFub3RoZXIgaWNvbiBlbGVtZW50IGZvciB0aGUgc2lkZWJhciB0b2dnbGUgYnV0dG9uLlxyXG4gICAgICovXHJcbiAgICBzaWRlYmFyVG9nZ2xlSWNvbkNvbXBvbmVudDogUHJvcFR5cGVzLmFueSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFdpbGwgcmVwbGFjZSBzdGF0dXMgaWNvbnMgd2l0aCBjdXN0b20gb25lcy4gVGhpcyBjYW4gYmUgYSBTVkcgY29tcG9uZW50IG9yIGEgbm9ybWFsIGVsZW1lbnQgY29tcG9uZW50LlxyXG4gICAgICovXHJcbiAgICBzdGF0dXNJY29uczogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBkYW5nZXI6IFByb3BUeXBlcy5hbnksXHJcbiAgICAgICAgaW5mbzogUHJvcFR5cGVzLmFueSxcclxuICAgICAgICBzdWNjZXNzOiBQcm9wVHlwZXMuYW55LFxyXG4gICAgICAgIHdhcm5pbmc6IFByb3BUeXBlcy5hbnlcclxuICAgIH0pLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzYWJsZXMgdGhlIGhlYWRlciBiYXJzIG9uIHBhZ2VzLlxyXG4gICAgICovXHJcbiAgICBkaXNhYmxlSGVhZGVyczogUHJvcFR5cGVzLmJvb2xcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyaWQ7Il19