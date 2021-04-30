"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Utilities = _interopRequireDefault(require("./Utilities"));

var _MenuItem = _interopRequireDefault(require("./MenuItem"));

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
 * Eine Suchleiste, die zur Seitenleiste hinzugefügt werden kann.
 */
var Search = /*#__PURE__*/function (_React$Component) {
  _inherits(Search, _React$Component);

  var _super = _createSuper(Search);

  function Search() {
    var _this;

    _classCallCheck(this, Search);

    _this = _super.call(this);
    _this.state = {
      value: "",
      focus: false
    };
    _this.SearchControlId = "blue-app-search-control-" + _Utilities.default.guid();
    return _this;
  }

  _createClass(Search, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.value !== this.props.value) {
        this.setState({
          value: this.props.value
        });
      }
    }
  }, {
    key: "toggleSidebar",
    value: function toggleSidebar() {
      if (this.props.sidebar) {
        document.dispatchEvent(window.toggleSidebarEvent);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react.default.createElement("form", {
        className: "blue-app-search " + (this.props.body ? "blue-app-search-body " : "") + (this.state.focus ? "focus " : "") + this.props.className,
        onSubmit: function onSubmit(event) {
          event.preventDefault();

          _this2.toggleSidebar();

          _this2.props.onSubmit(event);
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "blue-app-search-input-group input-group"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "input-group-prepend",
        onClick: function onClick() {
          return document.getElementById(_this2.SearchControlId).focus();
        }
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "input-group-text"
      }, this.props.icon)), /*#__PURE__*/_react.default.createElement("input", {
        type: "search",
        value: this.state.value,
        onChange: function onChange(event) {
          _this2.setState({
            value: event.target.value
          });

          _this2.props.onChange(event);
        },
        id: this.SearchControlId,
        className: "blue-app-search-control form-control default input-lg",
        placeholder: this.props.placeholder,
        autoFocus: this.props.autoFocus,
        style: {
          zIndex: this.props.body ? "0" : ""
        },
        onFocus: function onFocus() {
          return _this2.setState({
            focus: true
          });
        },
        onBlur: function onBlur() {
          return _this2.setState({
            focus: false
          });
        }
      }), this.props.reset && this.state.value.length > 0 && /*#__PURE__*/_react.default.createElement("div", {
        className: "input-group-btn"
      }, /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: "blue-app-search-reset-btn btn btn-link btn-lg",
        onClick: function onClick() {
          _this2.setState({
            value: ""
          }, function () {
            document.getElementById(_this2.SearchControlId).focus();
          });

          _this2.props.onChange({
            target: {
              value: ""
            }
          });
        }
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "bi-navigate_cross"
      })))), this.props.sidebar && /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
        href: "#",
        className: "blue-app-search-btn",
        icon: this.props.icon,
        onClick: function onClick(event) {
          event.preventDefault();

          _this2.toggleSidebar();

          setTimeout(function () {
            document.querySelector(".blue-app-search-control").select();
          }, 200);
        }
      }));
    }
  }], [{
    key: "defaultProps",
    get: function get() {
      return {
        autoFocus: false,
        body: false,
        className: "",
        icon: /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("svg", {
          width: "1em",
          height: "1em",
          viewBox: "0 0 16 16",
          className: "bi bi-search mt-n1",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg"
        }, /*#__PURE__*/_react.default.createElement("path", {
          fillRule: "evenodd",
          d: "M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
        }), /*#__PURE__*/_react.default.createElement("path", {
          fillRule: "evenodd",
          d: "M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
        }))),
        onChange: function onChange(event) {},
        onSubmit: function onSubmit(event) {},
        placeholder: "",
        reset: false,
        sidebar: false,
        value: ""
      };
    }
  }]);

  return Search;
}(_react.default.Component);

Search.propTypes = {
  autoFocus: _propTypes.default.bool,

  /**
   * Wird Komponente im Body genutzt?
   */
  body: _propTypes.default.bool,
  className: _propTypes.default.string,
  icon: _propTypes.default.any,
  onChange: _propTypes.default.func,
  onSubmit: _propTypes.default.func,
  placeholder: _propTypes.default.string,

  /**
   * Erlaube Zurücksetzen?
   */
  reset: _propTypes.default.bool,

  /**
   * Wird Komponente in der Sidebar genutzt?
   */
  sidebar: _propTypes.default.bool,
  value: _propTypes.default.string
};
var _default = Search;
exports.default = _default;