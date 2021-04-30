"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Utilities = _interopRequireDefault(require("./Utilities.js"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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

function collapseSection(element) {
  /* Source of these functions: https://css-tricks.com/using-css-transitions-auto-dimensions/ */
  var sectionHeight = element.scrollHeight;
  var elementTransition = element.style.transition;
  element.style.transition = '';
  requestAnimationFrame(function () {
    element.style.height = sectionHeight + 'px';
    element.style.transition = elementTransition;
    requestAnimationFrame(function () {
      element.style.height = 84 + 'px';
    });
  });
  element.setAttribute('data-collapsed', 'true');
}

function expandSection(element) {
  var sectionHeight = element.scrollHeight;
  element.style.height = sectionHeight + 'px';

  var fun = function fun(e) {
    element.removeEventListener('transitionend', fun);
    element.style.height = null;
  };

  element.addEventListener('transitionend', fun);
  element.setAttribute('data-collapsed', 'false');
}
/**
 * The new actions menu, better optimized for mobile devices.<br>
 * <strong>Important:</strong> If you use <code>&lt;Actions /&gt;</code> on a page, make sure also to set <strong>hasActions</strong> prop from
 * <strong>Page</strong> component to <code>true</code>.
 */


var Actions = /*#__PURE__*/function (_React$Component) {
  _inherits(Actions, _React$Component);

  var _super = _createSuper(Actions);

  function Actions(props) {
    var _this;

    _classCallCheck(this, Actions);

    _this = _super.call(this, props);
    _this.state = {
      open: props.open
    };
    _this.id = "Actions-" + _Utilities.default.guid();
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Actions, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.open !== this.props.open) {
        this.setState({
          open: this.props.open
        });
      }
    }
  }, {
    key: "toggle",
    value: function toggle() {
      var open = !this.state.open;
      var element = document.getElementById(this.id); // expandSection(element);

      this.setState({
        open: open
      }, function () {
        if (open) {
          expandSection(element);
        } else {
          collapseSection(element);
        }
      });

      if (this.props.onToggle) {
        this.props.onToggle(open);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", {
        id: this.id,
        className: "blue-actions " + this.props.className + " " + (this.state.open ? "open" : "closed") + " break-".concat(this.props.break)
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "blue-actions-indicator d-".concat(this.props.break, "-none"),
        onClick: this.toggle
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "blue-actions-controls " + this.props.controlsClassName
      }, this.props.children), /*#__PURE__*/_react.default.createElement("div", {
        className: "blue-actions-featured d-".concat(this.props.break, "-none")
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "fluent-btn"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "fluent-btn-ball"
      }), this.props.featured)));
    }
  }], [{
    key: "defaultProps",
    get: function get() {
      return {
        className: "",
        controlsClassName: "",
        open: false,
        break: "md"
      };
    }
  }]);

  return Actions;
}(_react.default.Component);

Actions.propTypes = {
  /**
   * Content that will appear on the menu when it's expanded.
   */
  children: _propTypes.default.any,

  /**
   * Extends the <code>className</code> of <code>.blue-actions</code>.
   */
  className: _propTypes.default.string,

  /**
   * Extends the <code>className</code> of <code>.blue-actions-controls</code>.
   */
  controlsClassName: _propTypes.default.string,

  /**
   * Content that will appear when the menu is shrunken.
   */
  featured: _propTypes.default.any,
  open: _propTypes.default.bool,

  /**
   * Will fire when the state of <code>open</code> will change inside of the component.<br>
   * <strong>Example:</strong> <code>onToggle={open => this.setState({ open })}</code>
   */
  onToggle: _propTypes.default.func,

  /**
   * <code>sm</code>, <code>md</code>, <code>lg</code> or <code>xl</code>
   */
  break: _propTypes.default.string
};
var _default = Actions;
exports.default = _default;