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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

window.toggleSidebarEvent = new CustomEvent("toggleSidebar");

/**
 * The main component. As soon this component is mounted, it is globally available under `window.blueGridRef`.\
 * Also you can append your own event listeners with `blueGridRef.addEventListener(eventName, (prevProps, prevState) => { })`.
 * 
 * <br><br>
 * Allowed event listeners:
 * <table class="table">
 * <thead><tr><th>Event name</th><th>Description</th><th>Example</th></tr></thead>
 * <tbody>
 * <tr>
 * <th>componentDidUpdate</th>
 * <td>Component was updated.</td>
 * <td><code>blueGridRef.addEventListener("componentDidUpdate", (prevProps, prevState) => { })</code></td>
 * </tr>
 * 
 * <tr>
 * <th>pageDidShowAgain</th>
 * <td>Page appeared again with the same old state. In the callback function you can reinitialize things.</td>
 * <td><code>blueGridRef.addEventListener("pageDidShowAgain", "home", (prevProps, prevState) => { })</code></td>
 * </tr>
 * 
 * <tr>
 * <th>pageDidHide</th>
 * <td>This page disappeared and another page appears instead.</td>
 * <td><code>blueGridRef.addEventListener("pageDidHide", "home", (prevProps, prevState) => { })</code></td>
 * </tr>
 * </tbody>
 * </table>
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
      if (this.state.sidebarIns) {
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
        className: "fluent-btn blue-app-open-menu blue-app-sidebar-btn btn",
        onClick: function onClick() {
          _this4.setState({
            sidebarIn: !_this4.state.sidebarIn
          });
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "fluent-btn-ball blue-app-sidebar-exception"
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
}(_react.Component);

exports.default = Grid;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0dyaWQudHN4Il0sIm5hbWVzIjpbIndpbmRvdyIsInRvZ2dsZVNpZGViYXJFdmVudCIsIkN1c3RvbUV2ZW50IiwiR3JpZCIsInByb3BzIiwiYmx1ZUdyaWRSZWYiLCJkZWZhdWx0TWF0Y2giLCJzdGF0ZSIsInNpZGViYXJJbiIsIm1hdGNoIiwiaGlzdG9yeSIsImhhc2giLCJsb2NhdGlvbiIsImhpZGVTaWRlYmFyIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImluaXRNYXRjaCIsImV2ZW50TGlzdGVuZXJzIiwibWUiLCJkb2N1bWVudCIsInRvZ2dsZVNpZGViYXIiLCJ1bmRlZmluZWQiLCJ4UG9zIiwidG91Y2hlcyIsInBhZ2VYIiwiVXRpbGl0aWVzIiwicmVnaXN0ZXJGbHVlbnRCdG5zIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwiZm9yRWFjaCIsImV2ZW50TGlzdGVuZXIiLCJwYWdlSWQiLCJjYWxsYmFjayIsInNpZGViYXJJbnMiLCJzZXRTdGF0ZSIsImUiLCJoYXNDbGFzcyIsInRhcmdldCIsIm5ld01hdGNoIiwicmVwbGFjZSIsInNwbGl0IiwiZmlsdGVyIiwibiIsInVucm91dGVhYmxlIiwiaW5kZXhPZiIsInB1c2giLCJwYXJhbTEiLCJwYXJhbTIiLCJwYXJhbTMiLCJpZCIsInN0eWxlIiwiY2xhc3NOYW1lIiwiaGlkZVNpZGViYXJNZW51IiwiZXhwYW5kU2lkZWJhciIsImRpc2FibGVIZWFkZXJzIiwic2lkZWJhclRvZ2dsZUljb25Db21wb25lbnQiLCJjaGlsZHJlbiIsInBhZ2VzIiwibWFwIiwicGFnZSIsIm5hbWUiLCJjb21wb25lbnQiLCJzdGF0dXNJY29ucyIsInN1Y2Nlc3MiLCJpbmZvIiwid2FybmluZyIsImRhbmdlciIsImRpc2FibGVUaXRsZVNldCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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O0FBTlYsT0FBUDtBQWFIOzs7O0VBeEM2QkcsZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBDU1NQcm9wZXJ0aWVzIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IFV0aWxpdGllcyBmcm9tIFwiLi9VdGlsaXRpZXNcIlxyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gICAgaW50ZXJmYWNlIFdpbmRvdyB7XHJcbiAgICAgICAgYmx1ZUdyaWRSZWY6IGFueVxyXG4gICAgICAgIHRvZ2dsZVNpZGViYXJFdmVudDogYW55XHJcbiAgICB9XHJcbn1cclxuXHJcbndpbmRvdy50b2dnbGVTaWRlYmFyRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXCJ0b2dnbGVTaWRlYmFyXCIpXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdyaWRQcm9wcyB7XHJcbiAgICBpZD86IHN0cmluZ1xyXG4gICAgc2lkZWJhckluPzogYm9vbGVhblxyXG4gICAgc3R5bGU/OiBDU1NQcm9wZXJ0aWVzXHJcbiAgICAvKipcclxuICAgICAqIFNpZGViYXIgaXMgYXV0b21hdGljYWxseSBleHBhbmRlZCBvbiB3aWRlciB2aWV3cy5cclxuICAgICAqL1xyXG4gICAgZXhwYW5kU2lkZWJhcj86IGJvb2xlYW5cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc2FibGVzIHNpZGViYXIuXHJcbiAgICAgKi9cclxuICAgIGhpZGVTaWRlYmFyTWVudT86IGJvb2xlYW5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVycyBwYWdlcyBmb3IgdGhlIGJ1aWx0LWluIHJvdXRpbmcgc3lzdGVtLiBFeGFtcGxlOiBbe25hbWU6IFwiaG9tZVwiLCBjb21wb25lbnQ6IDxIb21lUGFnZSAvPn1dXHJcbiAgICAgKi9cclxuICAgIHBhZ2VzPzogeyBuYW1lOiBzdHJpbmc7IGNvbXBvbmVudDogSlNYLkVsZW1lbnQgfVtdXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGVuIGB0cnVlYCwgYWx3YXlzIHRoZSBcImhvbWVcIiByb3V0ZSB3aWxsIGJlIHJlbmRlcmVkLlxyXG4gICAgICovXHJcbiAgICB1bnJvdXRlYWJsZT86IGJvb2xlYW5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4dGVuZHMgYGNsYXNzTmFtZWAuXHJcbiAgICAgKi9cclxuICAgIGNsYXNzTmFtZT86IHN0cmluZ1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQnkgZGVmYXVsdCwgdGhlIGRvY3VtZW50IHRpdGxlIHdpbGwgYXV0b21hdGljYWxseSBzZXQuIFNldCB0aGlzIHByb3AgdG8gYHRydWVgIHRvIGRpc2FibGUgdGhpcyBiZWhhdmlvdXIuXHJcbiAgICAgKi9cclxuICAgIGRpc2FibGVUaXRsZVNldD86IGJvb2xlYW5cclxuXHJcbiAgICAvKipcclxuICAgICAqIElmIHlvdSBkb24ndCB1c2UgYmx1ZWljb24sIHlvdSBjYW4gZGVmaW5lIGFub3RoZXIgaWNvbiBlbGVtZW50IGZvciB0aGUgc2lkZWJhciB0b2dnbGUgYnV0dG9uLlxyXG4gICAgICovXHJcbiAgICBzaWRlYmFyVG9nZ2xlSWNvbkNvbXBvbmVudD86IGFueVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2lsbCByZXBsYWNlIHN0YXR1cyBpY29ucyB3aXRoIGN1c3RvbSBvbmVzLiBUaGlzIHdpbGwgYWxzbyBvdmVyd3JpdGUgdGhlIGB1c2VCbHVlaWNvbnNgIG9wdGlvbi5cclxuICAgICAqIFRoaXMgY2FuIGJlIGEgU1ZHIGNvbXBvbmVudCBvciBhIG5vcm1hbCBlbGVtZW50IGNvbXBvbmVudC5cclxuICAgICAqL1xyXG4gICAgc3RhdHVzSWNvbnM/OiB7XHJcbiAgICAgICAgZGFuZ2VyOiBhbnksXHJcbiAgICAgICAgaW5mbzogYW55LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGFueSxcclxuICAgICAgICB3YXJuaW5nOiBhbnlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc2FibGVzIHRoZSBoZWFkZXIgYmFycyBvbiBwYWdlcy5cclxuICAgICAqL1xyXG4gICAgZGlzYWJsZUhlYWRlcnM/OiBib29sZWFuXHJcbn1cclxuXHJcbnR5cGUgR3JpZFN0YXRlID0gYW55XHJcblxyXG4vKipcclxuICogVGhlIG1haW4gY29tcG9uZW50LiBBcyBzb29uIHRoaXMgY29tcG9uZW50IGlzIG1vdW50ZWQsIGl0IGlzIGdsb2JhbGx5IGF2YWlsYWJsZSB1bmRlciBgd2luZG93LmJsdWVHcmlkUmVmYC5cXFxyXG4gKiBBbHNvIHlvdSBjYW4gYXBwZW5kIHlvdXIgb3duIGV2ZW50IGxpc3RlbmVycyB3aXRoIGBibHVlR3JpZFJlZi5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgKHByZXZQcm9wcywgcHJldlN0YXRlKSA9PiB7IH0pYC5cclxuICogXHJcbiAqIDxicj48YnI+XHJcbiAqIEFsbG93ZWQgZXZlbnQgbGlzdGVuZXJzOlxyXG4gKiA8dGFibGUgY2xhc3M9XCJ0YWJsZVwiPlxyXG4gKiA8dGhlYWQ+PHRyPjx0aD5FdmVudCBuYW1lPC90aD48dGg+RGVzY3JpcHRpb248L3RoPjx0aD5FeGFtcGxlPC90aD48L3RyPjwvdGhlYWQ+XHJcbiAqIDx0Ym9keT5cclxuICogPHRyPlxyXG4gKiA8dGg+Y29tcG9uZW50RGlkVXBkYXRlPC90aD5cclxuICogPHRkPkNvbXBvbmVudCB3YXMgdXBkYXRlZC48L3RkPlxyXG4gKiA8dGQ+PGNvZGU+Ymx1ZUdyaWRSZWYuYWRkRXZlbnRMaXN0ZW5lcihcImNvbXBvbmVudERpZFVwZGF0ZVwiLCAocHJldlByb3BzLCBwcmV2U3RhdGUpID0+IHsgfSk8L2NvZGU+PC90ZD5cclxuICogPC90cj5cclxuICogXHJcbiAqIDx0cj5cclxuICogPHRoPnBhZ2VEaWRTaG93QWdhaW48L3RoPlxyXG4gKiA8dGQ+UGFnZSBhcHBlYXJlZCBhZ2FpbiB3aXRoIHRoZSBzYW1lIG9sZCBzdGF0ZS4gSW4gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHlvdSBjYW4gcmVpbml0aWFsaXplIHRoaW5ncy48L3RkPlxyXG4gKiA8dGQ+PGNvZGU+Ymx1ZUdyaWRSZWYuYWRkRXZlbnRMaXN0ZW5lcihcInBhZ2VEaWRTaG93QWdhaW5cIiwgXCJob21lXCIsIChwcmV2UHJvcHMsIHByZXZTdGF0ZSkgPT4geyB9KTwvY29kZT48L3RkPlxyXG4gKiA8L3RyPlxyXG4gKiBcclxuICogPHRyPlxyXG4gKiA8dGg+cGFnZURpZEhpZGU8L3RoPlxyXG4gKiA8dGQ+VGhpcyBwYWdlIGRpc2FwcGVhcmVkIGFuZCBhbm90aGVyIHBhZ2UgYXBwZWFycyBpbnN0ZWFkLjwvdGQ+XHJcbiAqIDx0ZD48Y29kZT5ibHVlR3JpZFJlZi5hZGRFdmVudExpc3RlbmVyKFwicGFnZURpZEhpZGVcIiwgXCJob21lXCIsIChwcmV2UHJvcHMsIHByZXZTdGF0ZSkgPT4geyB9KTwvY29kZT48L3RkPlxyXG4gKiA8L3RyPlxyXG4gKiA8L3Rib2R5PlxyXG4gKiA8L3RhYmxlPlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZCBleHRlbmRzIENvbXBvbmVudDxHcmlkUHJvcHMsIEdyaWRTdGF0ZT57XHJcbiAgICBkZWZhdWx0TWF0Y2g6IHN0cmluZ1tdXHJcbiAgICBldmVudExpc3RlbmVyczogYW55W11cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBHcmlkUHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICAgICAgd2luZG93LmJsdWVHcmlkUmVmID0gdGhpc1xyXG5cclxuICAgICAgICB0aGlzLmRlZmF1bHRNYXRjaCA9IFtcImhvbWVcIl1cclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2lkZWJhckluOiBwcm9wcy5zaWRlYmFySW4sXHJcbiAgICAgICAgICAgIG1hdGNoOiBudWxsLFxyXG4gICAgICAgICAgICBoaXN0b3J5OiBbXSxcclxuICAgICAgICAgICAgaGFzaDogd2luZG93LmxvY2F0aW9uLmhhc2hcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaGlkZVNpZGViYXIgPSB0aGlzLmhpZGVTaWRlYmFyLmJpbmQodGhpcylcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgd2luZG93LmJsdWVHcmlkUmVmLmluaXRNYXRjaCgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycyA9IFtdXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBkZWZhdWx0UHJvcHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZXhwYW5kU2lkZWJhcjogZmFsc2UsXHJcbiAgICAgICAgICAgIGhpZGVTaWRlYmFyTWVudTogZmFsc2UsXHJcbiAgICAgICAgICAgIHVucm91dGVhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgZGlzYWJsZVRpdGxlU2V0OiBmYWxzZSxcclxuICAgICAgICAgICAgc2lkZWJhclRvZ2dsZUljb25Db21wb25lbnQ6IDxzcGFuIGNsYXNzTmFtZT1cImJpLW1lbnVcIiAvPixcclxuICAgICAgICAgICAgc3RhdHVzSWNvbnM6IHtcclxuICAgICAgICAgICAgICAgIGRhbmdlcjogPHNwYW4gY2xhc3NOYW1lPVwiYmktZXJyb3JcIiAvPixcclxuICAgICAgICAgICAgICAgIGluZm86IDxzcGFuIGNsYXNzTmFtZT1cImJpLWluZm9ybWF0aW9uXCIgLz4sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiA8c3BhbiBjbGFzc05hbWU9XCJiaS1jaGVja1wiIC8+LFxyXG4gICAgICAgICAgICAgICAgd2FybmluZzogPHNwYW4gY2xhc3NOYW1lPVwiYmktc2lnbl93YXJuaW5nXCIgLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBjb25zdCBtZSA9IHRoaXNcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvZ2dsZVNpZGViYXJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVNpZGViYXIodW5kZWZpbmVkKVxyXG4gICAgICAgIH0sIGZhbHNlKVxyXG5cclxuICAgICAgICB0aGlzLmluaXRNYXRjaCgpXHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB4UG9zID0gZXZlbnQudG91Y2hlc1swXS5wYWdlWFxyXG5cclxuICAgICAgICAgICAgaWYgKHhQb3MgPCA1KSB7XHJcbiAgICAgICAgICAgICAgICBtZS50b2dnbGVTaWRlYmFyKGV2ZW50KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG1lLnN0YXRlLnNpZGViYXJJbiAmJiB4UG9zID4gMjApIHtcclxuICAgICAgICAgICAgICAgIG1lLnRvZ2dsZVNpZGViYXIoZXZlbnQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBVdGlsaXRpZXMucmVnaXN0ZXJGbHVlbnRCdG5zKClcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiBHcmlkUHJvcHMsIHByZXZTdGF0ZTogR3JpZFN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycy5mb3JFYWNoKChldmVudExpc3RlbmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldmVudExpc3RlbmVyWzBdID09PSBcImNvbXBvbmVudERpZFVwZGF0ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudExpc3RlbmVyWzFdKHByZXZQcm9wcywgcHJldlN0YXRlKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZXZlbnRMaXN0ZW5lclswXSA9PT0gXCJwYWdlRGlkU2hvd0FnYWluXCIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwYWdlSWQgPSBldmVudExpc3RlbmVyWzFdXHJcbiAgICAgICAgICAgICAgICBsZXQgY2FsbGJhY2sgPSBldmVudExpc3RlbmVyWzJdXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHByZXZTdGF0ZS5oYXNoICE9PSB0aGlzLnN0YXRlLmhhc2ggJiYgdGhpcy5zdGF0ZS5tYXRjaFswXSA9PT0gcGFnZUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socHJldlByb3BzLCBwcmV2U3RhdGUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChldmVudExpc3RlbmVyWzBdID09PSBcInBhZ2VEaWRIaWRlXCIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwYWdlSWQgPSBldmVudExpc3RlbmVyWzFdXHJcbiAgICAgICAgICAgICAgICBsZXQgY2FsbGJhY2sgPSBldmVudExpc3RlbmVyWzJdXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHByZXZTdGF0ZS5oYXNoICE9PSB0aGlzLnN0YXRlLmhhc2ggJiYgcHJldlN0YXRlLm1hdGNoWzBdID09PSBwYWdlSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhwcmV2UHJvcHMsIHByZXZTdGF0ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlU2lkZWJhcihldmVudDogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2lkZWJhcklucykge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGVTaWRlYmFyKGV2ZW50KVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2lkZWJhckluOiB0cnVlIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaGlkZVNpZGViYXIoZTogYW55KSB7XHJcbiAgICAgICAgaWYgKCEoXHJcbiAgICAgICAgICAgIFV0aWxpdGllcy5oYXNDbGFzcyhlLnRhcmdldCwgXCJibHVlLWFwcC1vcGVuLW1lbnVcIikgfHxcclxuICAgICAgICAgICAgVXRpbGl0aWVzLmhhc0NsYXNzKGUudGFyZ2V0LCBcImJpLW1lbnVcIikgfHxcclxuICAgICAgICAgICAgVXRpbGl0aWVzLmhhc0NsYXNzKGUudGFyZ2V0LCBcImJsdWUtYXBwLXNlYXJjaFwiKSB8fFxyXG4gICAgICAgICAgICBVdGlsaXRpZXMuaGFzQ2xhc3MoZS50YXJnZXQsIFwiYmx1ZS1hcHAtc2VhcmNoLWNvbnRyb2xcIikgfHxcclxuICAgICAgICAgICAgVXRpbGl0aWVzLmhhc0NsYXNzKGUudGFyZ2V0LCBcImJsdWUtYXBwLXNlYXJjaC1idG5cIikgfHxcclxuICAgICAgICAgICAgVXRpbGl0aWVzLmhhc0NsYXNzKGUudGFyZ2V0LCBcImJsdWUtYXBwLXNlYXJjaC1idG4taWNvblwiKSB8fFxyXG4gICAgICAgICAgICBVdGlsaXRpZXMuaGFzQ2xhc3MoZS50YXJnZXQsIFwiYmx1ZS1hcHAtc2lkZWJhci1kcm9wZG93bi10b2dnbGVcIikgfHxcclxuICAgICAgICAgICAgVXRpbGl0aWVzLmhhc0NsYXNzKGUudGFyZ2V0LCBcImJsdWUtYXBwLXNpZGViYXItZHJvcGRvd24tY2FyZXRcIikgfHxcclxuICAgICAgICAgICAgVXRpbGl0aWVzLmhhc0NsYXNzKGUudGFyZ2V0LCBcImJsdWUtYXBwLXNpZGViYXItZHJvcGRvd24taWNvblwiKSB8fFxyXG4gICAgICAgICAgICBVdGlsaXRpZXMuaGFzQ2xhc3MoZS50YXJnZXQsIFwiYmx1ZS1hcHAtc2lkZWJhci1leGNlcHRpb25cIilcclxuICAgICAgICApKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaWRlYmFySW46IGZhbHNlIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRNYXRjaCgpIHtcclxuICAgICAgICBsZXQgbmV3TWF0Y2hcclxuXHJcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoICYmIHdpbmRvdy5sb2NhdGlvbi5oYXNoICE9PSBcIlwiICYmIHdpbmRvdy5sb2NhdGlvbi5oYXNoICE9PSBcIiMvXCIpIHtcclxuICAgICAgICAgICAgbmV3TWF0Y2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKFwiI1wiLCBcIlwiKS5zcGxpdChcIi9cIikuZmlsdGVyKG4gPT4gbiAhPT0gXCJcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld01hdGNoID0gdGhpcy5kZWZhdWx0TWF0Y2hcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnVucm91dGVhYmxlKSB7XHJcbiAgICAgICAgICAgIG5ld01hdGNoID0gdGhpcy5kZWZhdWx0TWF0Y2hcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghKHRoaXMuc3RhdGUuaGlzdG9yeS5pbmRleE9mKG5ld01hdGNoWzBdKSA+IC0xKSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmhpc3RvcnkucHVzaChuZXdNYXRjaFswXSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtYXRjaDogbmV3TWF0Y2gsIGhpc3Rvcnk6IHRoaXMuc3RhdGUuaGlzdG9yeSwgaGFzaDogd2luZG93LmxvY2F0aW9uLmhhc2ggfSlcclxuICAgIH1cclxuXHJcbiAgICBhZGRFdmVudExpc3RlbmVyKHBhcmFtMTogYW55LCBwYXJhbTI6IGFueSwgcGFyYW0zOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLnB1c2goW3BhcmFtMSwgcGFyYW0yLCBwYXJhbTNdKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibHVlLWFwcC13cmFwcGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPXt0aGlzLnByb3BzLmlkID8gdGhpcy5wcm9wcy5pZCA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGUgPyB0aGlzLnByb3BzLnN0eWxlIDoge319XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImJsdWUtYXBwLWdyaWRcIiArICh0aGlzLnByb3BzLmNsYXNzTmFtZSA/IFwiIFwiICsgdGhpcy5wcm9wcy5jbGFzc05hbWUgOiBcIlwiKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLnNpZGViYXJJbiA/IFwiIG9wZW5cIiA6IFwiXCIpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMuaGlkZVNpZGViYXJNZW51ID8gXCIgaGFzTm9TaWRlYmFyTWVudVwiIDogXCIgaGFzU2lkZWJhck1lbnVcIikgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5leHBhbmRTaWRlYmFyID8gXCIgZXhwYW5kLXNpZGViYXJcIiA6IFwiXCIpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMuZGlzYWJsZUhlYWRlcnMgPyBcIiBkaXNhYmxlSGVhZGVyc1wiIDogXCJcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oaWRlU2lkZWJhcn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsdWUtYXBwLXNpZGViYXItdG9nZ2xlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5wcm9wcy5oaWRlU2lkZWJhck1lbnUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsdWVudC1idG4gYmx1ZS1hcHAtb3Blbi1tZW51IGJsdWUtYXBwLXNpZGViYXItYnRuIGJ0blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaWRlYmFySW46ICF0aGlzLnN0YXRlLnNpZGViYXJJbiB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbHVlbnQtYnRuLWJhbGwgYmx1ZS1hcHAtc2lkZWJhci1leGNlcHRpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zaWRlYmFyVG9nZ2xlSWNvbkNvbXBvbmVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5wYWdlcz8ubWFwKHBhZ2UgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5oaXN0b3J5LmluZGV4T2YocGFnZS5uYW1lKSA+IC0xICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cGFnZS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcInJvdXRlci1wYWdlIFwiICsgKHRoaXMuc3RhdGUubWF0Y2hbMF0gPT09IHBhZ2UubmFtZSA/IFwiYWN0aXZlXCIgOiBcIlwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3BhZ2UuY29tcG9uZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsdWUtYXBwLXN0YXR1cy1jaXJjbGUgYmx1ZS1hcHAtbG9hZGluZyBibHVlLWFwcC1zdGF0dXMtbG9hZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXItYm91bmNlLWNpcmNsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsdWUtYXBwLXN0YXR1cy1jaXJjbGUgYmx1ZS1hcHAtc3RhdHVzLXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc3RhdHVzSWNvbnMhLnN1Y2Nlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmx1ZS1hcHAtc3RhdHVzLWNpcmNsZSBibHVlLWFwcC1zdGF0dXMtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zdGF0dXNJY29ucyEuaW5mb31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibHVlLWFwcC1zdGF0dXMtY2lyY2xlIGJsdWUtYXBwLXN0YXR1cy13YXJuaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnN0YXR1c0ljb25zIS53YXJuaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsdWUtYXBwLXN0YXR1cy1jaXJjbGUgYmx1ZS1hcHAtc3RhdHVzLWRhbmdlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zdGF0dXNJY29ucyEuZGFuZ2VyfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsdWUtYXBwLXN0YXR1cy1hbGVydCBhbGVydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPiZ0aW1lczs8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydC1ib2R5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59Il19