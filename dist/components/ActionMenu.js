"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Utilities = _interopRequireDefault(require("./Utilities.js"));

var _MenuItem = _interopRequireDefault(require("./MenuItem.js"));

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
 * <span class="badge badge-info">Info</span> You can also use <strong>Actions</strong> instead.<br>
 * The Action Menu on the top right of a page. You can place Actions here which are in context of the current page.
 */
var ActionMenu = /*#__PURE__*/function (_React$Component) {
  _inherits(ActionMenu, _React$Component);

  var _super = _createSuper(ActionMenu);

  function ActionMenu() {
    var _this;

    _classCallCheck(this, ActionMenu);

    _this = _super.call(this);
    _this.state = {
      actionsToggledIn: null
    };
    return _this;
  }

  _createClass(ActionMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.initToggleStatus();

      document.querySelector(".blue-app-wrapper").onclick = function (event) {
        _this2.toggleActions();
      };

      document.querySelectorAll(".blue-app-actions-menu .nav-link").forEach(function (link) {
        link.addEventListener("click", function () {
          if (_this2.state.actionsToggledIn) {
            _this2.toggleActions();
          }
        });
      });
    }
  }, {
    key: "toggleActions",
    value: function toggleActions() {
      _Utilities.default.toggleActions();

      this.initToggleStatus();
    }
  }, {
    key: "initToggleStatus",
    value: function initToggleStatus() {
      this.setState({
        actionsToggledIn: _Utilities.default.hasClass(document.querySelector(".blue-app-actions"), "open")
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/_react.default.createElement("ul", {
        className: "blue-app-actions-menu nav navbar-nav navbar-right fluent-btn"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "fluent-btn-ball"
      }), !this.state.actionsToggledIn && !this.props.hideToggleAction ? /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
        className: "blue-app-actions-menu-toggle",
        onClick: function onClick() {
          return _this3.toggleActions();
        },
        icon: this.props.toggleIcon,
        "aria-label": "Toggle menu"
      }) : "", this.props.children);
    }
  }], [{
    key: "defaultProps",
    get: function get() {
      return {
        hideToggleAction: false,
        toggleIcon: "bi-iconmonstr-menu-7"
      };
    }
  }]);

  return ActionMenu;
}(_react.default.Component);

ActionMenu.propTypes = {
  /**
   * Hides the three points in mobile view.
   * Can be useful when you use multiple ActionMenus, but don't want all of them have the toggle button.
   */
  hideToggleAction: _propTypes.default.bool,

  /**
   * Icon component for the toggle icon.
   */
  toggleIcon: _propTypes.default.any
};
var _default = ActionMenu;
exports.default = _default;