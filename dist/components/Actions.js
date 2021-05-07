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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FjdGlvbnMuanMiXSwibmFtZXMiOlsiY29sbGFwc2VTZWN0aW9uIiwiZWxlbWVudCIsInNlY3Rpb25IZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJlbGVtZW50VHJhbnNpdGlvbiIsInN0eWxlIiwidHJhbnNpdGlvbiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImhlaWdodCIsInNldEF0dHJpYnV0ZSIsImV4cGFuZFNlY3Rpb24iLCJmdW4iLCJlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJBY3Rpb25zIiwicHJvcHMiLCJzdGF0ZSIsIm9wZW4iLCJpZCIsIlV0aWxpdGllcyIsImd1aWQiLCJ0b2dnbGUiLCJiaW5kIiwicHJldlByb3BzIiwic2V0U3RhdGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib25Ub2dnbGUiLCJjbGFzc05hbWUiLCJicmVhayIsImNvbnRyb2xzQ2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJmZWF0dXJlZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYW55Iiwic3RyaW5nIiwiYm9vbCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxTQUFTQSxlQUFULENBQXlCQyxPQUF6QixFQUFrQztBQUM5QjtBQUNBLE1BQUlDLGFBQWEsR0FBR0QsT0FBTyxDQUFDRSxZQUE1QjtBQUNBLE1BQUlDLGlCQUFpQixHQUFHSCxPQUFPLENBQUNJLEtBQVIsQ0FBY0MsVUFBdEM7QUFDQUwsRUFBQUEsT0FBTyxDQUFDSSxLQUFSLENBQWNDLFVBQWQsR0FBMkIsRUFBM0I7QUFFQUMsRUFBQUEscUJBQXFCLENBQUMsWUFBWTtBQUM5Qk4sSUFBQUEsT0FBTyxDQUFDSSxLQUFSLENBQWNHLE1BQWQsR0FBdUJOLGFBQWEsR0FBRyxJQUF2QztBQUNBRCxJQUFB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QUFFLDJCQUEyQixLQUFLTixLQUFMLENBQVdlO0FBQXRELFNBQ0ssS0FBS2YsS0FBTCxDQUFXZ0IsUUFEaEIsQ0FOSixlQVVJO0FBQUssUUFBQSxTQUFTLG9DQUE2QixLQUFLaEIsS0FBTCxDQUFXYyxLQUF4QztBQUFkLHNCQUNJO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsUUFESixFQUVLLEtBQUtkLEtBQUwsQ0FBV2lCLFFBRmhCLENBREosQ0FWSixDQURKO0FBbUJIOzs7U0F2REQsZUFBMEI7QUFDdEIsYUFBTztBQUNISixRQUFBQSxTQUFTLEVBQUUsRUFEUjtBQUVIRSxRQUFBQSxpQkFBaUIsRUFBRSxFQUZoQjtBQUdIYixRQUFBQSxJQUFJLEVBQUUsS0FISDtBQUlIWSxRQUFBQSxLQUFLLEVBQUU7QUFKSixPQUFQO0FBTUg7Ozs7RUFwQmlCSSxlQUFNQyxTOztBQXVFNUJwQixPQUFPLENBQUNxQixTQUFSLEdBQW9CO0FBQ2hCO0FBQ0o7QUFDQTtBQUNJSixFQUFBQSxRQUFRLEVBQUVLLG1CQUFVQyxHQUpKOztBQU1oQjtBQUNKO0FBQ0E7QUFDSVQsRUFBQUEsU0FBUyxFQUFFUSxtQkFBVUUsTUFUTDs7QUFXaEI7QUFDSjtBQUNBO0FBQ0lSLEVBQUFBLGlCQUFpQixFQUFFTSxtQkFBVUUsTUFkYjs7QUFnQmhCO0FBQ0o7QUFDQTtBQUNJTixFQUFBQSxRQUFRLEVBQUVJLG1CQUFVQyxHQW5CSjtBQW9CaEJwQixFQUFBQSxJQUFJLEVBQUVtQixtQkFBVUcsSUFwQkE7O0FBc0JoQjtBQUNKO0FBQ0E7QUFDQTtBQUNJWixFQUFBQSxRQUFRLEVBQUVTLG1CQUFVSSxJQTFCSjs7QUE0QmhCO0FBQ0o7QUFDQTtBQUNJWCxFQUFBQSxLQUFLLEVBQUVPLG1CQUFVRTtBQS9CRCxDQUFwQjtlQWtDZXhCLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBVdGlsaXRpZXMgZnJvbSBcIi4vVXRpbGl0aWVzLmpzXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmZ1bmN0aW9uIGNvbGxhcHNlU2VjdGlvbihlbGVtZW50KSB7XHJcbiAgICAvKiBTb3VyY2Ugb2YgdGhlc2UgZnVuY3Rpb25zOiBodHRwczovL2Nzcy10cmlja3MuY29tL3VzaW5nLWNzcy10cmFuc2l0aW9ucy1hdXRvLWRpbWVuc2lvbnMvICovXHJcbiAgICB2YXIgc2VjdGlvbkhlaWdodCA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgdmFyIGVsZW1lbnRUcmFuc2l0aW9uID0gZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uO1xyXG4gICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gJyc7XHJcblxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IHNlY3Rpb25IZWlnaHQgKyAncHgnO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9IGVsZW1lbnRUcmFuc2l0aW9uO1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gODQgKyAncHgnO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jb2xsYXBzZWQnLCAndHJ1ZScpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBleHBhbmRTZWN0aW9uKGVsZW1lbnQpIHtcclxuICAgIHZhciBzZWN0aW9uSGVpZ2h0ID0gZWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IHNlY3Rpb25IZWlnaHQgKyAncHgnO1xyXG5cclxuICAgIGNvbnN0IGZ1biA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZnVuKTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IG51bGw7XHJcbiAgICB9O1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZnVuKTtcclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNvbGxhcHNlZCcsICdmYWxzZScpO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBuZXcgYWN0aW9ucyBtZW51LCBiZXR0ZXIgb3B0aW1pemVkIGZvciBtb2JpbGUgZGV2aWNlcy48YnI+XHJcbiAqIDxzdHJvbmc+SW1wb3J0YW50Ojwvc3Ryb25nPiBJZiB5b3UgdXNlIDxjb2RlPiZsdDtBY3Rpb25zIC8mZ3Q7PC9jb2RlPiBvbiBhIHBhZ2UsIG1ha2Ugc3VyZSBhbHNvIHRvIHNldCA8c3Ryb25nPmhhc0FjdGlvbnM8L3N0cm9uZz4gcHJvcCBmcm9tXHJcbiAqIDxzdHJvbmc+UGFnZTwvc3Ryb25nPiBjb21wb25lbnQgdG8gPGNvZGU+dHJ1ZTwvY29kZT4uXHJcbiAqL1xyXG5jbGFzcyBBY3Rpb25zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBvcGVuOiBwcm9wcy5vcGVuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5pZCA9IFwiQWN0aW9ucy1cIiArIFV0aWxpdGllcy5ndWlkKCk7XHJcblxyXG4gICAgICAgIHRoaXMudG9nZ2xlID0gdGhpcy50b2dnbGUuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGRlZmF1bHRQcm9wcygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgIGNvbnRyb2xzQ2xhc3NOYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBvcGVuOiBmYWxzZSxcclxuICAgICAgICAgICAgYnJlYWs6IFwibWRcIlxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgICAgIGlmIChwcmV2UHJvcHMub3BlbiAhPT0gdGhpcy5wcm9wcy5vcGVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0aGlzLnByb3BzLm9wZW4gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZSgpIHtcclxuICAgICAgICBjb25zdCBvcGVuID0gIXRoaXMuc3RhdGUub3BlbjtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XHJcblxyXG4gICAgICAgIC8vIGV4cGFuZFNlY3Rpb24oZWxlbWVudCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuIH0sICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKG9wZW4pIHtcclxuICAgICAgICAgICAgICAgIGV4cGFuZFNlY3Rpb24oZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xsYXBzZVNlY3Rpb24oZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Ub2dnbGUpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblRvZ2dsZShvcGVuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGlkPXt0aGlzLmlkfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImJsdWUtYWN0aW9ucyBcIiArIHRoaXMucHJvcHMuY2xhc3NOYW1lICsgXCIgXCIgKyAodGhpcy5zdGF0ZS5vcGVuID8gXCJvcGVuXCIgOiBcImNsb3NlZFwiKSArIGAgYnJlYWstJHt0aGlzLnByb3BzLmJyZWFrfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYmx1ZS1hY3Rpb25zLWluZGljYXRvciBkLSR7dGhpcy5wcm9wcy5icmVha30tbm9uZWB9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImJsdWUtYWN0aW9ucy1jb250cm9scyBcIiArIHRoaXMucHJvcHMuY29udHJvbHNDbGFzc05hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BibHVlLWFjdGlvbnMtZmVhdHVyZWQgZC0ke3RoaXMucHJvcHMuYnJlYWt9LW5vbmVgfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsdWVudC1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbHVlbnQtYnRuLWJhbGxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5mZWF0dXJlZH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5BY3Rpb25zLnByb3BUeXBlcyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogQ29udGVudCB0aGF0IHdpbGwgYXBwZWFyIG9uIHRoZSBtZW51IHdoZW4gaXQncyBleHBhbmRlZC5cclxuICAgICAqL1xyXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFeHRlbmRzIHRoZSA8Y29kZT5jbGFzc05hbWU8L2NvZGU+IG9mIDxjb2RlPi5ibHVlLWFjdGlvbnM8L2NvZGU+LlxyXG4gICAgICovXHJcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFeHRlbmRzIHRoZSA8Y29kZT5jbGFzc05hbWU8L2NvZGU+IG9mIDxjb2RlPi5ibHVlLWFjdGlvbnMtY29udHJvbHM8L2NvZGU+LlxyXG4gICAgICovXHJcbiAgICBjb250cm9sc0NsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnRlbnQgdGhhdCB3aWxsIGFwcGVhciB3aGVuIHRoZSBtZW51IGlzIHNocnVua2VuLlxyXG4gICAgICovXHJcbiAgICBmZWF0dXJlZDogUHJvcFR5cGVzLmFueSxcclxuICAgIG9wZW46IFByb3BUeXBlcy5ib29sLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2lsbCBmaXJlIHdoZW4gdGhlIHN0YXRlIG9mIDxjb2RlPm9wZW48L2NvZGU+IHdpbGwgY2hhbmdlIGluc2lkZSBvZiB0aGUgY29tcG9uZW50Ljxicj5cclxuICAgICAqIDxzdHJvbmc+RXhhbXBsZTo8L3N0cm9uZz4gPGNvZGU+b25Ub2dnbGU9e29wZW4gPT4gdGhpcy5zZXRTdGF0ZSh7IG9wZW4gfSl9PC9jb2RlPlxyXG4gICAgICovXHJcbiAgICBvblRvZ2dsZTogUHJvcFR5cGVzLmZ1bmMsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiA8Y29kZT5zbTwvY29kZT4sIDxjb2RlPm1kPC9jb2RlPiwgPGNvZGU+bGc8L2NvZGU+IG9yIDxjb2RlPnhsPC9jb2RlPlxyXG4gICAgICovXHJcbiAgICBicmVhazogUHJvcFR5cGVzLnN0cmluZ1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uczsiXX0=